// routes
// post: /hello
// http://localhost:1337/parse/functions/hello
Parse.Cloud.define('hello', function (req, res) {
  var obj = new Parse.Object('GameScore');
  console.log('obj', obj);
  return 'Hi';
});

// routes
// post: /get_data
// // http://localhost:1337/parse/functions/get_data
Parse.Cloud.define('get_data', async function (req, res) {

  var myclass = 'GameScore';
  var query = new Parse.Query(myclass);
  try {
    var results = await query.find();
    // results is an array of parse.object.
    console.log('results', results);
  } catch (err) {
    // error is an instance of parse.error.
    console.log('error', err);
  }
  return { data: results };
});

// routes
// post: /GameScore1
// http://localhost:1337/parse/functions/GameScore1
Parse.Cloud.define('GameScore1', async function (req, res) {

  const GameScore1 = Parse.Object.extend("GameScore1");
  const gameScore = new GameScore1();

  gameScore.set("score", 1337);
  gameScore.set("playerName", "Sean Plott");
  gameScore.set("cheatMode", false);
  var results;
  try {
    results = await gameScore.save();
    // Execute any logic that should take place after the object is saved.
    console.log('New object created with objectId: ', gameScore);
  } catch (err) {
    // error is an instance of parse.error.
    console.log('error', err);
  }
  return { data: results };
});
