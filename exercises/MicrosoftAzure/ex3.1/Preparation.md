# Build SAP CAP Application and Integrate with Amazon SNS Service for Notification

>## Prerequistics 

## Setting-Up SAP Business Application Studio (BAS) with Smart Converter Project

Search for your user under **Security -> Users**. Click on **...** to seelct Assign Role Collection, search for **Business_Application_Studio** and assign all the roles to your user.

  ![Alt text](../assets/pre-basrole.png)

1. Login into your SAP BTP subaccount. Click the **Instance and Subscriptions** on the left menu, and then click the **Go to Application** button of the SAP Business Application Studio service subscription. Click on the Default Identity Provider to log in to SAP BAS.

    ![Alt text](../assets/cap-dev-1.png)

2. Create a Dev Space.

    ![Alt text](../assets/cap-dev-2.png)

3. When it’s ready, open your dev space by clicking on the name. 

    ![Alt text](../assets/cap-dev-3.png)


4. In the menu in SAP Business Application Studio, select **Terminal** &rarr; **New Terminal** and navigate to the projects folder using:

   ```bash
      cd projects
   ```

5. Clone the SAP CAP Application from the GitHub repository. 

   ```bash
      git clone ................................
   ```

6. Choose **File** in the menu on the top and then select **Add Folder to Workspace** from the dropdown menu.

    ![add workspace](./images/add_workspace.png)

7. Open the project by choosing the **projects** &rarr; **<project_name>** and choose **Open**.

8. Make sure that all necessary entitlements are set on the Subaccount you want to deploy the CAP backend to and [add the remaining entitlements](https://developers.sap.com/tutorials/cp-cf-entitlements-add.html) if missing:
  
  - SAP BTP, Cloud Foundry Runtime
  - SAP HANA Cloud (and create a database)
  - Destination
  - SAP Authorization and Trust Management Service
  - SAP HANA Schemas & HDI Containers
  
Continue to - [Exercise 2: API CAP Deployment ](../ex3.2/API_CAP_Deployment.md) where you will deploy the backend API of the Smart CO2 Converter App.
