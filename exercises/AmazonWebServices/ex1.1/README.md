# Extend a Business Process Using a CAP Application on SAP BTP

>## Prerequistics 

- Access the mock server URL and check whether you can view the records for Business Partner.
- Check whether the HANA DB is up and running.
- Assign the roles for accessing SAP Business Application Studio. 
  
  Search for your user under **Security -> Users**. Click on **...** to select Assign Role Collection, search for **Business_Application_Studio** and assign all the roles to your user.

  ![Alt text](./images/pre-basrole.png)

 
## Step 1 - Create a Business Partner Validation Application

In this section, you will focus on updating and deploying a Node.js CAP project in the Business Application Studio

1. 👉 Login into your SAP BTP subaccount. Click the **Instance and Subscriptions** on the left menu, and then click the **Go to Application** button of the SAP Business Application Studio service subscription. Click on the Default Identity Provider to log in to SAP BAS.

    ![Alt text](./images/cap-dev-1.png)

2. 👉 Create a Dev Space.

    ![Alt text](./images/cap-dev-2.png)

3. 👉 When it’s ready, open your dev space by clicking on the name. 

    ![Alt text](./images/cap-dev-3.png)


4. 👉 In the menu in SAP Business Application Studio, select **Terminal** &rarr; **New Terminal** and navigate to the projects folder using:

   ```bash
      cd projects
   ```

5. 👉 Clone the SAP CAP Application for Business Partner Validation from the GitHub repository. 

   ```bash
      git clone https://github.com/alphageek7443/business-partner-validation
   ```

6. 👉 Choose **File** in the menu on the top and then select **Add Folder to Workspace** from the dropdown menu.

    ![add workspace](./images/add_workspace.png)

7. 👉 Open the project by choosing the **projects** &rarr; **business-partner-validation** and choose **Open**.

    ![add workspace](./images/cap-dev-4.png)

## Step 2- Consume S4-Mock-Server API by using Remote Service functionality provided by SAP CAP

In this section, we will introduce how to consume the external APIs by using the [Remote Service](https://cap.cloud.sap/docs/guides/using-services#introduction) functionality in the SAP CAP application.

> **Good to read**
>
> - [Consuming Services](https://cap.cloud.sap/docs/guides/using-services)
>
> The CAP runtimes for node.js not only supports consuming the service via [Axios](https://axios-http.com/docs/intro), Fetch API, but also provides you an easy functionlity, called [Remote Service](https://cap.cloud.sap/docs/guides/using-services#introduction) to consume the external CAP service or OData Service.

In this step, you will fetch the latest Business Partner data from the S4-Mock-Server by consuming the OP_API_BUSINESS_PARTNER_SRV API exposed by S4-Mock-Server application.

Note: For this exercise, we have deployed and created the destination for accessing the mock server.


1. 👉 Now let's define the S4-Mock-Server service endpoint, and install the required NPM packages so that we can consume the S4-Mock-Server in the CAP project successfully.

    Open the package.json file under the root directory of your CAP Project and update the code shown below under the **cds.requires.s4_mock_server**. 

    **Do not forget to replace the CHANGE-TO-YOUR-S4-Mocker-Server-Application-Endpoint with your real S4-Mocker-Server service endpoint.**

    You can get the endpoint URL from the destination. In your SAP BTP Cockpit, go to **Connectivity -> Destinations** and look for the **mockserver** destination to retrieve the URL.
   
    ```node.js
    "[sandbox]": {
        "credentials": {
            "url": "https://CHANGE-TO-YOUR-S4-Mocker-Server-Application-Endpoint/op-api-business-partner-srv"
        }
    },
    "[production]": {
        "credentials": {
            "url": "https://CHANGE-TO-YOUR-S4-Mocker-Server-Application-Endpoint/op-api-business-partner-srv"
        }
    }
    ```
    ![Alt text](./images/external-url.png)

## Step 3 - Build your Business Partner Validation Application

In this section, we will show you how to build and deploy your Business Partner Validation CAP project and Fiori UI Application to your SAP BTP subaccount as a Multi-Target Application (MTA)

> - Make sure the SAP HANA DB in the SAP BTP Account is up and running. 

1. 👉 **Right-click** on the **mta.yaml** file under your CAP project root directory, and then choose **Build MTA Project** from the menu.

    ![Alt text](./images/cap-dev-41.png)

2. 👉 Once the MTA Build process is successful, you will see the **build complete message** in your **terminal**. Also, there will be a **business-partner-validation_1.0.0.mtar** file generated under the **mta_archieve folder**.

    ![Alt text](./images/cap-dev-75.png)

## Step 4 - Deploy your Business Partner Validation Application in the SAP BTP Subaccount

1. 👉 Right click on the generated **business-partner-validation_1.0.0.mtar** file under the **mta_archieve** folder. Then select the **Deploy MTA Acchive** option from the menu. This will start the deployment process.

    ![Alt text](./images/cap-dev-76.png)

2. 👉 The **Cloud Foundry **Sign-In** and Targets**** page will be popping up. Choose the **Credentials** as the **Select authentication method**, then **enter the username and password you used to log in to the SAP BTP subaccount**. Click **Sign in**.

    ![Alt text](./images/cap-dev-77.png)

3. 👉 Select your SAP BTP subaccount and space, then click **Apply** to complete the sign-in. 

    ![Alt text](./images/cap-dev-78.png)

4. 👉 After you sign in successfully, the MTA deployment will be triggered. The deployment can take some minutes. After successful deployment, you will see the **Process finished** without any error statement in your terminal.

    ![Alt text](./images/cap-dev-83.png)

## Step 5- Verify the Deployment Result. 

1. 👉 Let's verify whether our backend CAP project is run and running on your SAP BTP subaccount. Issue the command **cf apps** in your terminal. 

    ![Alt text](./images/cap-dev-84.png)

You should see the **business-partner-validation-srv** is under the **started** status. 

2. 👉 The public endpoint of business-partner-validation-srv service will also display in the terminal. Copy the route of the business-partner-validation-srv service from your terminal and open it in the browser.

    ![Alt text](./images/cap-dev-85.png)

3. 👉 If you click on the **BusinessPartner**, **BusinessPartnerAddress** you will see the **401 Unauthorized** error. This means that the XSUAA deployment was also a success since we did not assign BusinessPartnerView or BusinessPartnerValidator role to user on the SAP BTP subaccount.


## Congratulations!

Congratulations on completing your Exercise 1.1! You have successfully deployed an SAP CAP Application in SAP BTP.

Let's continue to - [Exercise 1.2 - Setup Fiori UI Application in SAP Build Work Zone](../ex1.2/README.md)

