# EXERCISE 1. Reference Architecture of an SAP BTP CAP Application using LLMs on Azure OpenAI via SAP Generative AI Hub

<!--## Prerequisites 

## Setting-Up SAP Business Application Studio (BAS) with Smart Converter Project

Search for your user under **Security -> Users**. Click on **...** to seelct Assign Role Collection, search for **Business_Application_Studio** and assign all the roles to your user.

  ![Alt text](../assets/pre-basrole.png)-->

1. Login into your SAP BTP subaccount. Click the **Instance and Subscriptions** on the left menu, and then click the **Go to Application** button of the SAP Business Application Studio service subscription. Click on the Default Identity Provider to log in to SAP BAS.

    ![Alt text](../assets/cap-dev-1.png)

2. Create a Dev Space.

    ![Alt text](../assets/cap-dev-2.png)

3. When it’s ready, open your dev space by clicking on the name. 

    ![Alt text](../assets/cap-dev-3.png)


4. In the menu in SAP Business Application Studio, select **Terminal** &rarr; **New Terminal**.
  
    ![Alt text](../assets/bas_menu.png)

   Navigate to the projects folder by typing below in the terminal:

   ```bash
   $ cd projects
   ```

7. Clone the SAP CAP Application from the GitHub repository. 

   ```bash
   $ git clone https://github.com/SAP-samples/teched2023-XP263.git
   ```

8. Click **Menu->File** and then choose **Add Folder to Workspace** from the dropdown menu.

    ![add workspace](../assets/add_workspace.png)

9. Open the project by choosing/typing the below then clicking **Open**:
    ```bash
    projects/teched2023-XP263/exercises/MicrosoftAzure/src
    ```
    
Continue to - [Exercise 2: API CAP Deployment ](../ex3.2/README.md) where you will deploy the backend API of the Smart CO2 Converter App.
