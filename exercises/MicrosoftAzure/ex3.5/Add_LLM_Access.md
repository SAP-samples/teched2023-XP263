# Enable LLM Access

Users would have experienced that no response would have been recorded on calling LLM through the actions (summarize, suggest, etc.) on the mobile application. This is because the authentication credentials have not been added for the LLM Access layer. In this exercise we will add the same through the BTP cockpit.

1. Open your subaccount on BTP Cockpit and enter the **Spaces** tab in the **Cloud Foundry** drop-down.
![auth1](./assets/auth_1.png)

2. This will open up the spaces page where the user will have to select their developer space.
![auth2](./assets/auth_2.png)

3. Inside the space, user has to click on the **Instances** tab under **Services** drop-down.
![auth4](./assets/auth_4.png)

4. In the next window find the **smart-converter-llm-dest** destination. This destination links to the LLM Access layer. 
![auth5](./assets/auth_5.png)

5. On opening the **smart-converter-llm-dest** destination, the user will have to go to the **Destinations** tab.
![auth6](./assets/auth_6.png)

6. On the next page, user will have to click the **sap-genai-llm-access-service** field. This will open the _Destination Configuration_ editor. 
![auth7](./assets/auth_7.png)

7. The **Edit** button has to be clicked which will allow the user to change the configuration of the fields. Following credentials will be provided which need updating on the editor.
-> Token Service URL
-> Client ID
-> Client Secret
![auth8](./assets/auth_8.png)

8. Once entered, user has to click on **Save** to preserve the configuration. Now the application is setup to run the LLM service.
![auth9](./assets/auth_9.png)