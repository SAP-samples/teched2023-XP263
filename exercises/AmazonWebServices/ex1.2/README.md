<<<<<<< Updated upstream
# Exercise 1.2- Extend a Business Process Using a CAP Application on SAP BTP

## Exercise 1.2.1- Create Business Partner Validation Application

In this section we will focus on creating a Node.js CAP project in the Business Application Studio

1. Login into your SAP BTP subaccount. Click the **Instance and Subscriptions** on the left menu, and then click **Go to Application** button of the SAP Business Application Studio service subscription.

![Alt text](./images/cap-dev-1.png)

2. Now you will see the Dev Space we created previsouly is in **STOPPED** status, lets activate it by clicking the Run botton 

![Alt text](./images/cap-dev-2.png)

3. When it’s ready, open your dev space by clicking on the name. 

![Alt text](./images/cap-dev-3.png)


4. In the menu in SAP Business Application Studio, select **Terminal** &rarr; **New Terminal** and navigate to the projects folder using:
=======
# Configure Amazon SNS Service and integrate with SAP CAP Application


 
 In the exercise of this unit, we will intorduce how to integrate the Amazon Simple Notification Service (SNS) with our Business Partner Validation application, By using the AWS SDK for SNS. After finish this exercise, you will achieve the following objectives
 - Understand how to conifugre the Amazon Simple Notification Service Topic on the AWS Management Console.
 - Understand how to protect your Amazon SNS Topic with Amazon IAM Access Policy.
 - Understands how to consuming the Amazon SNS Topic programmatically within the SAP CAP project by using the AWS SDK for SNS.
>>>>>>> Stashed changes

**You could find the complete sample code of this exercise [here](../sample-code)**.

<<<<<<< Updated upstream
5. Clone the GitHub repository:

   ```bash
      git clone -b code https://github.com/SAP-samples/teched2023-XP263.git
   ```

**1.6** Choose **File** in the menu on the top and then select **Add Folder to Workspace** from the dropdown menu.
=======
## Exercise 1.3.1 Setup Amazon Simple Notification Service (SNS)

> - Please not down below values after you finish this section
>   - Amazon SNS Topic ARN
>   - Amazon SNS Topic Reigon
>   - Amazon IAM User Access Key
>   - Amazon IAM User Secret Access Key

Amazon Simple Notification Service is a regional service, please create the Amazon SNS Topic in the AWS region which is equals to the region of your BTP subaccount, so that we could minimize the lattency.
>>>>>>> Stashed changes

1. 👉 Open **Amazon Simple Notification Service Management Console**, click **Topics** on the left panel, then click the **Create Topic** button.

<<<<<<< Updated upstream
**1.7** Open the project by choosing **projects** &rarr; **business-partner-validation** and choose **Open**.
=======
![Alt text](./images/aws-sns-1.png)
>>>>>>> Stashed changes

![Alt text](./images/aws-sns-2.png)

2. 👉 Select **Standard** Topic type, give the proper topic name and display name. **Leave everything as what it is**, and click the **Create topic** button. 

![Alt text](./images/cap-sns-3.JPG)

3. 👉 Once the topic creation complete successfully, **note down** the **Topic ARN** (Amazon Resource Name) and **Topic Region** value. We will use it later in the exercise.

> - You could find the Topic Region value inside of the Topic ARN.

<<<<<<< Updated upstream
1. Now let's define the S4-Mock-Server service endpoint, and install the required NPM packages of CAP project, so that we could consume the S4-Mock-Server in the CAP project successfully.
=======
![Alt text](./images/aws-sns-4.png)
>>>>>>> Stashed changes

4. 👉 Click on the **Create subscription** button. In the **Create subscription screen**, choose **Protocol** as **Email**, and then **give your email address** to the **Endpoint**, then click the **Create subscription** button to complete the topic subscription. 

![Alt text](./images/aws-sns-5.png)

5. 👉 You will receive an email and asking for comfirm the topic subscription. Follow the instruction in the email to confirm the subscription.

![Alt text](./images/aws-sns-18.png)

## Exercise 1.3.2 Setup Amazon IAM Access Policy

1. 👉 Open the Amazon **Identity and Access Management (IAM)** management console. Select **Policies** on the left menu and then click **Create policy** blue button to create a new IAM policy.

![Alt text](./images/aws-sns-7.png)

2. 👉 In the **Specificy permissions** screen, select **Service** as **SNS**, choose **Actions allowed** as **Publish**, and enter the **SNS Topic ARN** value with the one we just created. Click **Next**.

![Alt text](./images/aws-sns-8.png)

3. 👉 In the **Review and create** screen, give a proper, read-friendly name for this new IAM policy. Review everything, if it is all looks good, click the **Create policy** blue button to create the new IAM policy. **Note Down the name of this policy**, as we will need it in the next step.

![Alt text](./images/aws-sns-9.png)

## Exercise 1.3.3 Setup Amazon IAM User with Access Key and Secret Access Key

1. 👉 Open the Amazon **Identity and Access Management (IAM)** management console. Select **Users** on the left menu and then click **Add users** blue button to create a new IAM user.

![Alt text](./images/aws-sns-6.png)

2. 👉 Give the proper, read-friendly name to your new IAM user, **do not grant AWS management console access**, then click Next.

![Alt text](./images/aws-sns-10.png)

3. 👉 Choose **Attach policies directly**, then **attach the IAM policy we just created in the last step** to it. Click **Next**.

![Alt text](./images/aws-sns-11.png)

4. 👉 Review everything, if it is all looks good, click the **Create user** orange button to create the new IAM user.

![Alt text](./images/aws-sns-12.png)

5. 👉 Find out the Amazon IAM user we just created. Switch to the **Security credentials** tab, and then click **Create access key** button in the Access keys section.

![Alt text](./images/aws-sns-13.png)

6. 👉Choose **Application running outside AWS**. Click **Next**.

![Alt text](./images/aws-sns-14.png)

7. 👉 Click **Create access key** button to finish the access keys creation.

8. 👉 **Note down** the value of **Access Key**, **Secret access key**, and **IAM User ARN**. This is the only time that you could view the value of these keys.

![Alt text](./images/aws-sns-15.png)

## Exercise 1.3.4 Update Access Policy of Amazon SNS Topic

1. 👉 Go back to the **Amazon Simple Notification Service Management Console** and select the SNS Topic we just created in the previsou step. Click Edit button.

![Alt text](./images/aws-sns-16.png)

2. 👉 Expand the **Access policy** tab. Overwrite the access policy as shown on below. Then click **Save changes** button.

```node.js
{
  "Version": "2008-10-17",
  "Id": "__default_policy_ID",
  "Statement": [
    {
      "Sid": "__default_statement_ID",
      "Effect": "Allow",
      "Principal": {
        "AWS": "IAM-USER-ARN-WE-JUST-CREATED"
      },
      "Action": "SNS:Publish",
      "Resource": "AMAZON-SNS-TOPIC-ARN"
    }
  ]
}
```

![Alt text](./images/aws-sns-17.png)

## Exercise 1.3.5 Consuming the Amazon Simple Notification Service Topic in SAP CAP Project.

### Prerequisites
You have completed the [Section 1. Setup Amazon Simple Notification Service (SNS)](https://github.com/anbazhagan-uma/opensap-btp-aws/blob/main/Week%203/Unit%203.4/README.md#section-1-setup-amazon-simple-notification-service-sns) and have the below values handy.
- **Amazon SNS Topic ARN**
- **Amazon SNS Topic Reigon**
- **Amazon IAM User Access Key**
- **Amazon IAM User Secret Access Key**
- **Frontend Fiori application's URL** 

<<<<<<< Updated upstream
1. **Right click** on the **mta.yaml** file under your CAP project root directory, and then choose **Build MTA Project** from the menu.
=======
1. 👉 Let's Install AWS SDK for Node.js in the SAP CAP Project. Open the Business Partner Validation project in the SAP Business Application Studio. Open a new ternimal and then issue the command **npm install @aws-sdk/client-sns --save**.
>>>>>>> Stashed changes

![Alt text](./images/aws-cap-dev-1.png)

<<<<<<< Updated upstream
2. Once the MTA Build process success, you will see the **build complete message** in your **terminal**. Also there will be a **business-partner-validation_1.0.0.mtar** file generated under the **mta_archieve folder**.
=======
2. 👉 After the installation completed, open the **package.json** file under your project root directory. You will see that the AWS SDK - SNS Client has been addedd under the **dependencies** section.
>>>>>>> Stashed changes

![Alt text](./images/aws-cap-dev-2.png)

## Exercise 1.3.6 Modify the SAP CAP Project Code

1. 👉 Let's **modify the package.json file** under the **project's root directory**, so that we could add the AWS SNS credentials, and also the frontend Fiori application's endpint as the environment variables. Add te code shown on below into your package.json file under the **cds.requires** section.

<<<<<<< Updated upstream
1. Right click on the generated **business-partner-validation_1.0.0.mtar** file under the **mta_archieve** folder. Then select **Deploy MTA Achive** option from the menu. This will start the deployment process.
=======
```node.js
"cds":{
  ...
  "requires":{
    ...
    "aws": {
      "sns": {
        "topicArn": "REPLACE-WITH-YOUR-AWS-SNS-TOPIC-ARN",
        "region": "REPLACE-WITH-YOUR-AWS-SNS-TOPIC-REGION"
      },
      "iam": {
        "accessKey": "REPLACE-WITH-YOUR-AWS-IAM-USER-ACCESS-KEY",
        "secretAccessKey": "REPLACE-WITH-YOUR-AWS-IAM-USER-SECRET-ACCESS-KEY"
      }
    },
    "launchpad": {
      "url": "REPLACE-WITH-YOUR-FRONTEND-FIORI-APPLICATION-URL"
    },
  }
}
```
>>>>>>> Stashed changes

![Alt text](./images/aws-cap-dev-3.png)

<<<<<<< Updated upstream
2. The **Cloud Foundry Sign In and Targets** page will be poping-up. Choose the **Credentials** as the **Select authentication method**, then **enter the username and password you used to login to the SAP BTP subaccount**. Click **Sign in**.
=======
>>>>>>> Stashed changes

2. 👉 Open the **srv/businesspartner-service.js** file. Let's first import the AWS SNS Client, and CAP CDS environment variables we just defined into this file. 

<<<<<<< Updated upstream
3. Select your SAP BTP subaccount and space, then click **Apply** to complete the sign in. 
=======
```node.js
const { SNSClient, PublishCommand } = require('@aws-sdk/client-sns');
const { aws, launchpad } = cds.env.requires;
```
>>>>>>> Stashed changes

![Alt text](./images/aws-cap-dev-4.png)

<<<<<<< Updated upstream
4. After you sign-in successfully, the MTA deployment will be triggered. The deployment can take some minutes. After successful deployment, you will see the **Process finsihed** without any error statement in your terminal.
=======
3. 👉 Let's creates an new async function, which will be responsible for sending out the email notification programmatically to the Amazon SNS Topic.
>>>>>>> Stashed changes

```node.js
async function sendEmailNotification(bpID){

    const REGION = aws.sns.region;
    const SNS_TOPIC_ARN = aws.sns.topicArn;
    const AWS_ACCESS_KEY_ID = aws.iam.accessKey;
    const AWS_SECRET_ACCESS_KEY = aws.iam.secretAccessKey;
    const businessPartnerID = bpID;

    const snsClient = new SNSClient({
        region: REGION,
        credentials:{
            accessKeyId: AWS_ACCESS_KEY_ID,
            secretAccessKey: AWS_SECRET_ACCESS_KEY,
        },
    });

<<<<<<< Updated upstream
1. Let's verify whether our backend CAP project is run and running on your SAP BTP subaccount. Issue the command **cf apps** in your terminal. 
=======
    let message = `Business Partner ${businessPartnerID} Records Has Been Changed, Please Review and Perform the Validation ASAP. \n`;
    message += `Please use below link to go the site.\n`;
    message += launchpad.url;
    
    let params = {
>>>>>>> Stashed changes

        Message: message,
        TopicArn: SNS_TOPIC_ARN,
    };

    try{
        const data = await snsClient.send(new PublishCommand(params));
        console.log("Success.",  data);
    }catch(error){
        console.log(error.message);
    }
};
```

<<<<<<< Updated upstream
2. The public endpoint of business-partner-validation-srv service will also display in the terminal. Copy the route of the business-partner-validation-srv service from your terminal and open it in the browser.
=======
![Alt text](./images/aws-cap-dev-5.png)
>>>>>>> Stashed changes

4. 👉 Finally, let's **enhance** the **syncData function** to **leavage the sendEmailNotification function** we just created. Add the code shown on below at the **very end** of the syncData function.

<<<<<<< Updated upstream
3. If you click on the **BusinessPartner**, **BusinessPartnerAddress** you will see the **401 Unauthorized** error. This means that the XSUAA deployment was also success, since we do not assign BusinessPartnerView or BusinessPartnerValidator role to us on the SAP BTP subaccount.
=======
```node.js
>>>>>>> Stashed changes

async function syncData(req){

<<<<<<< Updated upstream
1. Go back to your SAP BTP  subaccount main page. Go to **Instance and Subscription**. Click the **Go to Application** button of the **SAP Build Work Zone, standard edition** service subscription.
=======
  ....,
>>>>>>> Stashed changes

  // Send out SNS Notification while Business Partner's Verfication Status = P
  if(verificationStatus_code === 'P'){

<<<<<<< Updated upstream
2. Go to the **Channel Manager**, click the **update content** button of the **HTML5 Apps** channel.
=======
    await sendEmailNotification(bpID);
  }
}
```
>>>>>>> Stashed changes

![Alt text](./images/aws-cap-dev-6.png)

<<<<<<< Updated upstream
3. Go to the **Content Manager**, switch to the **Content Explorer** tab, select the **HTML5 Apps**.
=======
## Exercise 1.3.7 Deploy the Code Changes to the SAP BTP Trial Subaccount
>>>>>>> Stashed changes

> - Make sure your SAP HANA DB is in the running status. The SAP HANA DB in the SAP BTP trial account will stop every single night automatically.

<<<<<<< Updated upstream
4. **Check** the **Manage Business Partner** application in the table, then click **+ Add to My Content** button.
=======
1. 👉 **Right click** on the **mat.yaml** file under your project root directory, and then choose **Build MTA Project** from the menu. 
>>>>>>> Stashed changes

![Alt text](./images/aws-cap-dev-8.png)

<<<<<<< Updated upstream
5. Switch to the **My Content** tab. Lets create a new Group by click the **+ New** button, and selct Group from the menu.
=======
2. 👉 Once the MTA Build process is complete, expand the **mta_archives** folder, **right click** on the **business-partner-validation_1.0.0.mtar** file. Choose **Deploy MTA Archive** from the menu to trigger the SAP BTP trial deployment process.
>>>>>>> Stashed changes

![Alt text](./images/aws-cap-dev-7.png)

<<<<<<< Updated upstream
6. Give the **title** of the new Group as **Business Partner Validation**, then **assign the Manage Business Partner HTML5 App to this group**. Click **Save** to save the changes.
=======
3. 👉 Wait until the deployment process to be completed. Grab a cup of coffee and take a rest as the deployment process will take some times.
>>>>>>> Stashed changes

## Exercise 1.3.8 Testing the Business Partner Validation Application from End-to-End

<<<<<<< Updated upstream
7. Go back to My Content tab, then click on the Everyone role.
=======
1. 👉 Go back to your SAP BTP Trial subaccount. Go to **Instance and Subscriptions**. Click **Go to application** button of the **SAP Build Work Zone, standard edition** service subscription.
>>>>>>> Stashed changes

![Alt text](./images/aws-cap-dev-9.png)

<<<<<<< Updated upstream
8. Click **Edit** button, **assign** the **Manage Business Partner HTML5 app** to this role. Click **Save** to save the changes.
=======
2. 👉 Click **Go to site** button to navigate to the OpenSAP-AWS-Course-Week3 site.
>>>>>>> Stashed changes

![Alt text](./images/aws-cap-dev-10.png)

<<<<<<< Updated upstream
9. Go to the **Site Directory**, then click **+ Create Site** button to create a new site. 
=======
3. 👉 Click Manage Business Partner App.
>>>>>>> Stashed changes

![Alt text](./images/aws-cap-dev-11.png)

<<<<<<< Updated upstream
10. Give the site name as** OpenSAP-AWS-Course-Week3**, then click **Create**.

11. Now let's try out our new site. Click the **Go to site**.
=======
4. 👉 Now click **Go** to browse all unblocked Business Partner Data fetching from S4-Mock-Server. Now you will see all the Business Partners are in the VERIFIED status.

![Alt text](./images/aws-cap-dev-12.png)
>>>>>>> Stashed changes

![Alt text](./images/aws-cap-dev-13.png)

<<<<<<< Updated upstream
12. You can see the Business Partner Validation group that includes the Manage Business Partner apps. Open the Manage Business Partner app by clicking on it.
=======
5. 👉 Click on the first Business Partner 1004155 record in the table, this will navigate you to the details page. Let's now try to update the address data of this business partner by clicking the edit button.
>>>>>>> Stashed changes

![Alt text](./images/aws-cap-dev-14.png)

<<<<<<< Updated upstream
13. Now you have launched your Business Partner Validation app through the SAP Build Work Zone, standard edition successfully.
=======
6. 👉 **Update the business partner data as shown on the image below**. Then click **Save** to persist the updated data to the SAP HANA DB. **Make sure to update the Verification Status value from V to P by selecting from the dropdown**. Now we should expected to receive an email notification sent from the Amazon SNS topic we created previsouly.
>>>>>>> Stashed changes

![Alt text](./images/aws-cap-dev-15.png)

7. 👉 Open your email box, then you should see an email with the tilte **AWS Notifications**. Open this email and you should see the message to indicate us the Business Partner 1004155 record has been changed. The Fiori application of the Business Partner Validation app is also includes in the emial. We could click on this URL and it will redirect us back to the Fiori application.

<<<<<<< Updated upstream
1.  Go back to your SAP BTP subaccount main page. Go to **Security -> Users**. Click on the entry of your user, then click the **Assign Role Collection** button.

![Alt text](./images/cap-dev-99.png)

2. Search for **BusinessPartnerViewer-dev** and **BusinessPartnerValidator-dev** in the Assign Role Collection pop-up window's search bar. Click **Assign Role Collection** button to assign these two roles to yourself.

![Alt text](./images/cap-dev-100.png)

## Exercise 1.2.8- Testing the Business Partner Validation App from End-to-End

1. Now go back to the **Manage Business Partner** app in the **SAP Build WorkZone**. Click the **Go** Button to view the Business Partner entry fetched from the S4-Mock-Server.

![Alt text](./images/cap-dev-101.png)

2. Click on the first entry in the table, and navigate to the Business Partner details page.

![Alt text](./images/cap-dev-102.png)

3. Since we already assign the Business Partner Validtor role to ourself, so that we could see **Edit** and **Delete** button available to us. Let's start update the Business Partner record by clicking the edit button.

![Alt text](./images/cap-dev-103.png)

4. Please updates the Business Partner data as shown in the image below. After editing click the Save button to save the changes. 

> After this step, the updated data will persist to the SAP HANA Database opnly, but not update in the S4-Mock-Server yet.

![Alt text](./images/cap-dev-104.png)

5. Now let's click the Edit button again, **uncheck** the **Business Partner Central Blocked** check box, and change the **Verification Status** value to **V** by selecting it from the drop-down menu. Then Click the Save button to save the changes.

![Alt text](./images/cap-dev-105.png)

6. Now you will see that the upodated ZipCode value 12345 has been persisted back to the S4-Mock-Server, and our application is working as desired. We are all set now.
=======
![Alt text](./images/aws-cap-dev-16.png)

## Congratulation!
 
Conratulations, you have successfully integrated the Amazon Simple Notification service with SAP CAP project and deployed the entire project to the SAP BTP Trial subaccount successfully. Well done !!
>>>>>>> Stashed changes
