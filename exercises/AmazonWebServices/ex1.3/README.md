# Exercise 1.3 Integrate the CAP Application with Amazon SNS

In the exercise of this unit, we will introduce how to integrate the Amazon Simple Notification Service (SNS) with our Business Partner Validation application, By using the AWS SDK for SNS. After finishing this exercise, you will achieve the following objectives
 - Understand how to configure the Amazon Simple Notification Service Topic on the AWS Management Console.
 - Understand how to protect your Amazon SNS Topic with the Amazon IAM Access Policy.
 - Understand how to consume the Amazon SNS Topic programmatically within the SAP CAP project by using the AWS SDK for SNS.

**You can find the complete sample code of this exercise [here](../sample-code)**.

## Exercise 1.3.1 Setup Amazon Simple Notification Service (SNS)

> - Please not down below values after you finish this section
>   - Amazon SNS Topic ARN
>   - Amazon SNS Topic Reigon
>   - Amazon IAM User Access Key
>   - Amazon IAM User Secret Access Key

Amazon Simple Notification Service is a regional service, please create the Amazon SNS Topic in the AWS region which is equal to the region of your BTP subaccount, so that we can minimize the latency.

Please Note: There are changes in the user interface in SAP BTP and AWS services from the time the course was recorded. All these changes will be updated constantly in the GitHub repository.

1. 👉 Open **Amazon Simple Notification Service Management Console**, click **Topics** on the left panel, then click the **Create Topic** button.

![Alt text](./images/aws-sns-1.png)

![Alt text](./images/aws-sns-2.png)

2. 👉 Select **Standard** Topic type, give the proper topic name and display name. **Leave everything as what it is**, and click the **Create topic** button. 

![Alt text](./images/cap-sns-3.JPG)

3. 👉 Once the topic creation is complete successfully, **note down** the **Topic ARN** (Amazon Resource Name) and **Topic Region** value. We will use it later in the exercise.

> - You could find the Topic Region value inside of the Topic ARN.

![Alt text](./images/aws-sns-4.png)

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

1. 👉 Let's Install AWS SDK for Node.js in the SAP CAP Project. Open the Business Partner Validation project in the SAP Business Application Studio. Open a new ternimal and then issue the command **npm install @aws-sdk/client-sns --save**.

![Alt text](./images/aws-cap-dev-1.png)

2. 👉 After the installation completed, open the **package.json** file under your project root directory. You will see that the AWS SDK - SNS Client has been addedd under the **dependencies** section.

![Alt text](./images/aws-cap-dev-2.png)

## Exercise 1.3.6 Modify the SAP CAP Project Code

1. 👉 Let's **modify the package.json file** under the **project's root directory**, so that we could add the AWS SNS credentials, and also the frontend Fiori application's endpint as the environment variables. Add te code shown on below into your package.json file under the **cds.requires** section.

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

![Alt text](./images/aws-cap-dev-3.png)


2. 👉 Open the **srv/businesspartner-service.js** file. Let's first import the AWS SNS Client, and CAP CDS environment variables we just defined into this file. 

```node.js
const { SNSClient, PublishCommand } = require('@aws-sdk/client-sns');
const { aws, launchpad } = cds.env.requires;
```

![Alt text](./images/aws-cap-dev-4.png)

3. 👉 Let's creates an new async function, which will be responsible for sending out the email notification programmatically to the Amazon SNS Topic.

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

    let message = `Business Partner ${businessPartnerID} Records Has Been Changed, Please Review and Perform the Validation ASAP. \n`;
    message += `Please use below link to go the site.\n`;
    message += launchpad.url;
    
    let params = {

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

![Alt text](./images/aws-cap-dev-5.png)

4. 👉 Finally, let's **enhance** the **syncData function** to **leavage the sendEmailNotification function** we just created. Add the code shown on below at the **very end** of the syncData function.

```node.js

async function syncData(req){

  ....,

  // Send out SNS Notification while Business Partner's Verfication Status = P
  if(verificationStatus_code === 'P'){

    await sendEmailNotification(bpID);
  }
}
```

![Alt text](./images/aws-cap-dev-6.png)

## Exercise 1.3.7 Deploy the Code Changes to the SAP BTP Trial Subaccount

> - Make sure your SAP HANA DB is in the running status. The SAP HANA DB in the SAP BTP trial account will stop every single night automatically.

1. 👉 **Right click** on the **mat.yaml** file under your project root directory, and then choose **Build MTA Project** from the menu. 

![Alt text](./images/aws-cap-dev-8.png)

2. 👉 Once the MTA Build process is complete, expand the **mta_archives** folder, **right click** on the **business-partner-validation_1.0.0.mtar** file. Choose **Deploy MTA Archive** from the menu to trigger the SAP BTP trial deployment process.

![Alt text](./images/aws-cap-dev-7.png)

3. 👉 Wait until the deployment process to be completed. Grab a cup of coffee and take a rest as the deployment process will take some times.

## Exercise 1.3.8 Testing the Business Partner Validation Application from End-to-End

1. 👉 Go back to your SAP BTP Trial subaccount. Go to **Instance and Subscriptions**. Click **Go to application** button of the **SAP Build Work Zone, standard edition** service subscription.

![Alt text](./images/aws-cap-dev-9.png)

2. 👉 Click **Go to site** button to navigate to the OpenSAP-AWS-Course-Week3 site.

![Alt text](./images/aws-cap-dev-10.png)

3. 👉 Click Manage Business Partner App.

![Alt text](./images/aws-cap-dev-11.png)

4. 👉 Now click **Go** to browse all unblocked Business Partner Data fetching from S4-Mock-Server. Now you will see all the Business Partners are in the VERIFIED status.

![Alt text](./images/aws-cap-dev-12.png)

![Alt text](./images/aws-cap-dev-13.png)

5. 👉 Click on the first Business Partner 1004155 record in the table, this will navigate you to the details page. Let's now try to update the address data of this business partner by clicking the edit button.

![Alt text](./images/aws-cap-dev-14.png)

6. 👉 **Update the business partner data as shown on the image below**. Then click **Save** to persist the updated data to the SAP HANA DB. **Make sure to update the Verification Status value from V to P by selecting from the dropdown**. Now we should expected to receive an email notification sent from the Amazon SNS topic we created previsouly.

![Alt text](./images/aws-cap-dev-15.png)

7. 👉 Open your email box, then you should see an email with the tilte **AWS Notifications**. Open this email and you should see the message to indicate us the Business Partner 1004155 record has been changed. The Fiori application of the Business Partner Validation app is also includes in the emial. We could click on this URL and it will redirect us back to the Fiori application.

![Alt text](./images/aws-cap-dev-16.png)

## Congratulation!
 
Conratulations, you have successfully integrated the Amazon Simple Notification service with SAP CAP project and deployed the entire project to the SAP BTP Trial subaccount successfully. Well done !!
