# Extend a Business Process Using a CAP Application on SAP BTP

## Section 1. Create Business Partner Validation Application

In this section we will focus on creating a Node.js CAP project in the Business Application Studio

**1.1** Login into your SAP BTP trial subaccount. Click the **Instance and Subscriptions** on the left menu, and then click **Go to Application** button of the SAP Business Application Studio service subscription.

![Alt text](./images/cap-dev-1.png)

**1.2** Now you will see the Dev Space we created previsouly is in **STOPPED** status, lets activate it by clicking the Run botton 

![Alt text](./images/cap-dev-2.png)

**1.3** When it’s ready, open your dev space by clicking on the name. 

![Alt text](./images/cap-dev-3.png)


**1.4** In the menu in SAP Business Application Studio, select **Terminal** &rarr; **New Terminal** and navigate to the projects folder using:

   ```bash
      cd projects
   ```

**1.5** Clone the mock server GitHub repository:

   ```bash
      git clone https://github.com/alphageek7443/business-partner-validation
   ```

**1.6** Choose **File** in the menu on the top and then select **Add Folder to Workspace** from the dropdown menu.

  ![add workspace](./images/add_workspace.png)

**1.7** Open the project by choosing **projects** &rarr; **business-partner-validation** and choose **Open**.

  ![add workspace](./images/cap-dev-4.png)

In our Business Partner Service, we need to fetch the latest Business Partner data from the S4-Mock-Server by consuming the OP_API_BUSINESS_PARTNER_SRV API exposed by S4-Mocker-Server application.

In this section, we will introduce how to consume the external APIs by using the [Remote Service](https://cap.cloud.sap/docs/guides/using-services#introduction) functionality in the SAP CAP application.

> **Good to read before start**
>
> - [Consuming Services](https://cap.cloud.sap/docs/guides/using-services)
>
> The CAP runtimes for node.js not only supports consuming the service via [Axios](https://axios-http.com/docs/intro), Fetch API, but also provides you an easy functionlity, called [Remote Service](https://cap.cloud.sap/docs/guides/using-services#introduction) to consume the external CAP service or OData Service.

**1.8** Now let's define the S4-Mock-Server service endpoint, and install the required NPM packages of CAP project, so that we could consume the S4-Mock-Server in the CAP project successfully.

Open the package.json file under the root directory of your CAP Project and append the code shown on below under the **cds.requires.s4_mock_server**. 

**Do not forgot to replace the CHANGE-TO-YOUR-S4-Mocker-Server-Application-Endpoint with your real S4-Mocker-Server service endpoint.**

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

**1.9** 

## Section 5. Deploy Frontend Fiori Application and Backend CAP Project to the SAP Business Technology Platform (BTP) Trial Subaccount.

In this section, we will show you how to deploy your Business Partner Validation CAP project and Fiori UI Application to your SAP BTP Trial subaccount as Multi-Target Application (MTA)

> - Make sure the SAP HANA DB in the SAP BTP Trial Account is up and running. 

### Step 1. Build MTA Project

<details>
    
---
**1.1** **Right click** on the **mta.yaml** file under your CAP project root directory, and then choose **Build MTA Project** from the menu.

![Alt text](./images/cap-dev-41.png)

**1.2** Once the MTA Build process success, you will see the **build complete message** in your **terminal**. Also there will be a **business-partner-validation_1.0.0.mtar** file generated under the **mta_archieve folder**.

![Alt text](./images/cap-dev-75.png)

</details>

### Step 2. Deploy MTA Project in the SAP BTP Trial Subaccount

<details>

---
**2.1** Right click on the generated **business-partner-validation_1.0.0.mtar** file under the **mta_archieve** folder. Then select **Deploy MTA Achive** option from the menu. This will start the deployment process.

![Alt text](./images/cap-dev-76.png)

**2.2** The **Cloud Foundry Sign In and Targets** page will be poping-up. Choose the **Credentials** as the **Select authentication method**, then **enter the username and password you used to login to the SAP BTP Trial subaccount**. Click **Sign in**.

![Alt text](./images/cap-dev-77.png)

**2.3** Select your SAP BTP trial subaccount and space, then click **Apply** to complete the sign in. 

![Alt text](./images/cap-dev-78.png)

**2.4** After you sign-in successfully, the MTA deployment will be triggered. The deployment can take some minutes. After successful deployment, you will see the **Process finsihed** without any error statement in your terminal.

![Alt text](./images/cap-dev-83.png)

</details>

### Step 3. Verify the Deployment Result. 

<details>

---
**3.1** Let's verify whether our backend CAP project is run and running on your SAP BTP trial subaccount. Issue the command **cf apps** in your terminal. 

![Alt text](./images/cap-dev-84.png)

You should see the **business-partner-validation-srv** is under the **started** status. 

**3.2** The public endpoint of business-partner-validation-srv service will also display in the terminal. Copy the route of the business-partner-validation-srv service from your terminal and open it in the browser.

![Alt text](./images/cap-dev-85.png)

**3.3** If you click on the **BusinessPartner**, **BusinessPartnerAddress** you will see the **401 Unauthorized** error. This means that the XSUAA deployment was also success, since we do not assign BusinessPartnerView or BusinessPartnerValidator role to us on the SAP BTP Trial subaccount.
</details>

### Step 4. Setup Fiori UI Application in SAP Build WorkZone.

<details>

---

**4.1** Go back to your SAP BTP trial subaccount main page. Go to **Instance and Subscription**. Click the **Go to Application** button of the **SAP Build Work Zone, standard edition** service subscription.

![Alt text](./images/cap-dev-86.png)

**4.2** Go to the **Channel Manager**, click the **update content** button of the **HTML5 Apps** channel.

![Alt text](./images/cap-dev-87.png)

**4.3** Go to the **Content Manager**, switch to the **Content Explorer** tab, select the **HTML5 Apps**.

![Alt text](./images/cap-dev-88.png)

**4.4** **Check** the **Manage Business Partner** application in the table, then click **+ Add to My Content** button.

![Alt text](./images/cap-dev-89.png)

**4.6** Switch to the **My Content** tab. Lets create a new Group by click the **+ New** button, and selct Group from the menu.

![Alt text](./images/cap-dev-90.png)

**4.7** Give the **title** of the new Group as **Business Partner Validation**, then **assign the Manage Business Partner HTML5 App to this group**. Click **Save** to save the changes.

![Alt text](./images/cap-dev-91.png)

**4.8** Go back to My Content tab, then click on the Everyone role.

![Alt text](./images/cap-dev-92.png)

**4.9** Click **Edit** button, **assign** the **Manage Business Partner HTML5 app** to this role. Click **Save** to save the changes.

![Alt text](./images/cap-dev-93.png)

**4.10** Go to the **Site Directory**, then click **+ Create Site** button to create a new site. 

![Alt text](./images/cap-dev-94.png)

**4.11** Give the site name as** OpenSAP-AWS-Course-Week3**, then click **Create**.

**4.12** Now let's try out our new site. Click the **Go to site**.

![Alt text](./images/cap-dev-96.png)

**4.13** You can see the Business Partner Validation group that includes the Manage Business Partner apps. Open the Manage Business Partner app by clicking on it.

![Alt text](./images/cap-dev-97.png)

**4.14** Now you have launched your Business Partner Validation app through the SAP Build Work Zone, standard edition successfully.

![Alt text](./images/cap-dev-98.png)

</details>

## Section 6. Testing the Business Partner Validation App on SAP BTP Trial Subaccount.

### Step 1. Assign Business Partner Viewer and Business Partner Validator Role on SAP BTP Trial

<details>
    
---
**1.1**  Go back to your SAP BTP trial subaccount main page. Go to **Security -> Users**. Click on the entry of your user, then click the **Assign Role Collection** button.

![Alt text](./images/cap-dev-99.png)

**1.2** Search for **BusinessPartnerViewer-dev** and **BusinessPartnerValidator-dev** in the Assign Role Collection pop-up window's search bar. Click **Assign Role Collection** button to assign these two roles to yourself.

![Alt text](./images/cap-dev-100.png)
</details>

### Step 2. Testing the Business Partner Validation App from End-to-End

<details>

---
**2.1** Now go back to the **Manage Business Partner** app in the **SAP Build WorkZone**. Click the **Go** Button to view the Business Partner entry fetched from the S4-Mock-Server.

![Alt text](./images/cap-dev-101.png)

**2.2** Click on the first entry in the table, and navigate to the Business Partner details page.

![Alt text](./images/cap-dev-102.png)

**2.3** Since we already assign the Business Partner Validtor role to ourself, so that we could see **Edit** and **Delete** button available to us. Let's start update the Business Partner record by clicking the edit button.

![Alt text](./images/cap-dev-103.png)

**2.4** Please updates the Business Partner data as shown in the image below. After editing click the Save button to save the changes. 

> After this step, the updated data will persist to the SAP HANA Database opnly, but not update in the S4-Mock-Server yet.

![Alt text](./images/cap-dev-104.png)

**2.5** Now let's click the Edit button again, **uncheck** the **Business Partner Central Blocked** check box, and change the **Verification Status** value to **V** by selecting it from the drop-down menu. Then Click the Save button to save the changes.

![Alt text](./images/cap-dev-105.png)

**2.6** Now you will see that the upodated ZipCode value 12345 has been persisted back to the S4-Mock-Server, and our application is working as desired. We are all set now.

</details>