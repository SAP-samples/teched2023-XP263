# EXERCISE 2. Deploy CAP API to Cloud Foundry

1. Set a custom _API_KEY_ (preferably a string generated on your machine) in your `src/api/mta.yaml` which will be used as simple authorization for the React Native app (and as well during testing via an API Platform like Postman setting the _API_KEY_ as header `api-key`. It is akin to any password. Users can also choose to keep it as the default value in the code.

   ```yaml
   ...
   modules:
   - name:  smart-converter-api-srv-${space}
      type: nodejs
      path: gen/srv
      parameters:
         buildpack: nodejs_buildpack
      build-parameters:
         builder: npm-ci
      provides:
         - name: srv-api # required by consumers of CAP services (e.g. approuter)
         properties:
            srv-url: ${default-url}
      requires:
         - name: smart-converter-api-db
         - name: smart-converter-api-auth
         - name: smart-converter-aicore-dest
      properties:
         API_KEY: <YOUR_API_KEY>
      ...
   ```

2. Open new terminal and login to your Cloud Foundry space to deploy the CAP API.
   ```conosle
   cf login -a https://api.cf.ap21.hana.ondemand.com --sso

   ```
3. Change to the respective directory of the CAP API sample `src/api/` from terminal, or open new integrated terminal as shown below.
  ![integ_terminal](../assets/open_integ_terminal.png)

4. Install all dependencies for the API deployment through below command:
   ```console
   $ npm i # creates node_moudles directory
   ```
7. Deploy the API through:
   ```console
   $ npm run deploy # command reference can be checked in src/api/package.json
   ```

If all entitlements of your SAP BTP Subaccount are set correctly, you should get the following output at the end of the deployment:

```console
   ...
   Application "smart-converter-api-srv" staged
   Starting application "smart-converter-api-srv"...
   Application "smart-converter-api-srv" started and available at "your-subaccount-smart-conve70da6a68.cfapps.eu10.hana.ondemand.com"
   ...
   Process finished.
   ...
```

Success, you made it. The CAP backend should now be available on SAP BTP, Cloud Foundry Runtime via the outputted URL. For example:
```console
https://your-subaccount-smart-conve70da6a68.cfapps.eu10.hana.ondemand.com
```
This URL, which will be specific for each user, will be used in the React Native application to connect to the CAP backend.

Continue to - [Exercise 3: Run App on Local using Expo Go](../ex3.3/README.md) where you will enable the mobile app to run locally on mobile devices
