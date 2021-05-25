# Swagger - Express : Generating API documentaions - Example


### Clone the repository and start using yarn ###
```
* yarn install
* yarn dev
```

### Creating Swagger API documentation from multiple yaml files ###

1. Add `yaml` files for `defenitions` in swagger/definitions/index.yaml
2. Add `yaml` files for `paths` in swagger/paths/index.yaml
3. Create single json file using `swagger-cli` command. `yarn doc:generate`
4. Serve the html content using `swagger-ui-express` via express api (refer `app.ts`)