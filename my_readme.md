- parse-server simple example: https://github.com/datagit/parse-server-example
- doc:
  - (**) https://docs.parseplatform.org/js/guide/
  - https://github.com/parse-community/Parse-Server#getting-started
- config: https://docs.parseplatform.org/rest/guide/#your-configuration
  - keys: https://docs.parseplatform.org/parse-server/guide/#keys
- install parse-dashboard
```bash
npm install -g parse-dashboard
touch parse-dashboard-config.json
parse-dashboard --config parse-dashboard-config.json
```
- parse query: https://parseplatform.org/Parse-SDK-JS/api/master/Parse.Query.html
- triggers: https://docs.parseplatform.org/cloudcode/guide/#save-triggers
- check json-schema:
  - package:
    - https://joi.dev/api/?v=17.3.0
    - https://www.npmjs.com/package/jsonschema
  - event Parse.Cloud.beforeSave:
    - https://docs.parseplatform.org/cloudcode/guide/#implementing-data-validation
    - https://github.com/parse-community/parse-server/issues/5058