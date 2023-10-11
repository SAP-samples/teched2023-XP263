[![REUSE status](https://api.reuse.software/badge/github.com/SAP-samples/teched2023-XP263)](https://api.reuse.software/info/github.com/SAP-samples/teched2023-XP263)

# XP263 - Develop a Cross-Platform Scenario with SAP BTP and GCP/Microsoft Azure/AWS

## Description

This repository contains the hands-on material for the SAP TechEd 2023 session-  XP263: Develop a Cross-Platform Scenario with SAP BTP and GCP/ Microsoft Azure/AWS.  

## Overview

The scenarios for each of the hyperscalers are as follows:

- **Amazon Web Services**: Build an SAP BTP Extension application to validate a SAP Business Partner and setup AWS Account to send notifications via AWS SNS Service.

- **Google Cloud Platform**: Build a simple category management application with data integration from Google BigQuery and SAP S/4HANA.

- **Microsoft Azure**: Build an SAP BTP application and integrate with Azure openAI using SAP AI Core LLM Service



## Requirements

The requirements to follow the exercises in this repository are:

### For Amazon Web Service scenario

1. A [SAP Business Technology Platform](https://www.sap.com/india/products/technology-platform.html) account. To setup your own SAP Business Technology Platform account you can follow the instruction [Get a Free Account on SAP BTP Trial](https://developers.sap.com/tutorials/hcp-create-trial-account.html)

2. A [SAP Business Application Studio](https://www.sap.com/products/technology-platform/business-application-studio.html) in the SAP Business Technology Platform account. To setup a SAP Business Application Studio you can follow the instruction [Set Up SAP Business Application Studio for Development](https://developers.sap.com/tutorials/appstudio-onboarding.html)

3. A [SAP HANA Database in the SAP HANA Cloud Service](https://www.sap.com/india/products/technology-platform/hana.html). To setup a SAP HANA Database in the SAP HANA Cloud Service you can follow the instruction [Start using SAP HANA Cloud in SAP BTP Cockpit](https://developers.sap.com/tutorials/hana-cloud-mission-trial-2.html) 

4. A [SAP Build Work Zone](https://www.sap.com/india/products/technology-platform/workzone.html). To setup a SAP Build Work Zone you can follow the instruction [Set Up SAP Build Work Zone](https://developers.sap.com/tutorials/cp-portal-cloud-foundry-getting-started.html)  


### For Google Cloud Platform scenario

1. A [SAP Datasphere System](https://www.sap.com/india/products/technology-platform/datasphere.html), configured with spaces and users with assigned roles. 
To get started, sign up for your [SAP Datasphere free tier tenant.](https://www.sap.com/products/technology-platform/datasphere/trial.html)

2. A [SAP Analytics Cloud account](https://www.sap.com/india/products/technology-platform/cloud-analytics.html) with live data connections to SAP Datasphere system to access SAP Datasphere Analytic Model or Perspective within SAP Analytics Cloud.
To get started, sign up for your [SAP Analytics Cloud Trial.](https://www.sap.com/products/technology-platform/cloud-analytics/trial.html)

3. A [Google cloud account](https://cloud.google.com) with a google cloud project enabled with the BigQuery API. If you're new to Google Cloud, [create a Google cloud account](https://cloud.google.com/free/) and create a [Google Cloud project](https://developers.google.com/workspace/guides/create-project). For new Projects, the BigQuery the BigQuery API is automatically enabled. 

### For Azure scenario

## Exercises

- [Getting Started](exercises/ex0/)

- [Exercise 1 - Scenario with AWS](exercises/AmazonWebServices/)
    - [Exercise 1.1 - Getting Started](exercises/AmazonWebServices/ex1.1/)
    - [Exercise 1.2 - Extend a Business Process Using a CAP Application on SAP BTP](exercises/AmazonWebServices/ex1.2/)
        - [Exercise 1.2.1 - Create Business Partner Validation Application](exercises/AmazonWebServices/ex1.2#exercise-121--create-business-partner-validation-application)
        - [Exercise 1.2.2 - Consume S4-Mock-Server API by using Remote Service functionality](exercises/AmazonWebServices/ex1.2#exercise-122--consume-s4-mock-server-api-by-using-remote-service-functionality-provided-by-sap-cap)
        - [Exercise 1.2.3- Build your Business Partner Validation Application](exercises/AmazonWebServices/ex1.2#exercise-123--create-business-partner-validation-application)
        - [Exercise 1.2.4- Deploy your Business Partner Validation Application in the SAP BTP Subaccount](exercises/AmazonWebServices/ex1.2#exercise-124--deploy-your-business-partner-validation-application-in-the-sap-btp-subaccount)
        - [Exercise 1.2.5- Verify the Deployment Result](exercises/AmazonWebServices/ex1.2#exercise-125--verify-the-deployment-result)
        - [Exercise 1.2.6- Setup Fiori UI Application in SAP Build WorkZone](exercises/AmazonWebServices/ex1.2#exercise-126--setup-fiori-ui-application-in-sap-build-workzone)
        - [Exercise 1.2.7- Assign Business Partner Viewer and Business Partner Validator Role on SAP BTP](exercises/AmazonWebServices/ex1.2#exercise-127--assign-business-partner-viewer-and-business-partner-validator-role-on-sap-btp)
        - [Exercise 1.2.8- Testing the Business Partner Validation App from End-to-End](exercises/AmazonWebServices/ex1.2#exercise-128--testing-the-business-partner-validation-app-from-end-to-end)
    - [Exercise 1.3 - Integrate the CAP Application with Amazon SNS](exercises/AmazonWebServices/ex1.3/)
        - [Exercise 1.3.1 Setup Amazon Simple Notification Service (SNS)](exercises/AmazonWebServices/ex1.3#exercise-131-setup-amazon-simple-notification-service-sns)
        - [Exercise 1.3.2 Consuming the Amazon Simple Notification Service Topic in SAP CAP Project](exercises/AmazonWebServices/ex1.3#exercise-132-consuming-the-amazon-simple-notification-service-topic-in-sap-cap-project)
        - [Exercise 1.3.3 Testing the Business Partner Validation Application from End-to-End](exercises/AmazonWebServices/ex1.3#exercise-133-testing-the-business-partner-validation-application-from-end-to-end)
      
- [Exercise 2 - Scenario with GCP](exercises/GoogleCloudPlatform/)
    - [Exercise 2.1 - Getting Started](exercises/GoogleCloudPlatform/ex2.1/)
    - [Exercise 2.2 - Build and expose data views on SAP Datasphere](exercises/ex2/ex2.2/)
        - [Exercise 2.2.1 - Creating a new view of "Product Sales Country"](exercises/GoogleCloudPlatform/ex2.2/#exercise-1--creating-a-new-view-of-product-sales-country)
    - [Exercise 2.3 - Creating a new view of "Product Sales Country Discount"](exercises/GoogleCloudPlatform/ex2.3/)
    - [Exercise 2.4 - Creating a new analytical model for "Product Sales Country Discount"](exercises/GoogleCloudPlatform/ex2.4/)
    - [Exercise 2.5 - Create a Category Management Dashboard on SAP Analytics Cloud](exercises/GoogleCloudPlatform/ex2.5/)
        - [Exercise 2.5.1 - Creating the Layout for the Category Management Dashboard](exercises/GoogleCloudPlatform/ex2.5#exercise-41-creating-the-layout-for-the-category-management-dashboard)
        - [Exercise 2.5.2 - Assigning the data from SAP Datasphere to Dashboard](exercises/GoogleCloudPlatform/ex2.5#exercise-42-assigning-the-data-from-sap-datasphere-to-dashboard)
    - [Exercise 2.6 - Creating the Charts in Category Management Dashboard for displaying Data](exercises/GoogleCloudPlatform/ex2.6)
        - [Exercise 2.6.1 - Creating the first Chart for displaying **Quantity per Product Category**](exercises/GoogleCloudPlatform/ex2.6#exercise-51-creating-the-first-chart-for-displaying-quantity-per-product-category)
        - [Exercise 2.6.2 - Creating another Chart for displaying **Discount per Product Category**](exercises/GoogleCloudPlatform/ex2.6#exercise-52-creating-another-chart-for-displaying-discount-per-product-category)
        - [Exercise 2.6.3 - Creating the last Chart for displaying **Sales Quantity over Time** ](exercises/GoogleCloudPlatform/ex2.6#exercise-53-creating-the-last-chart-for-displaying-sales-quantity-over-time)
    - [Exercise 2.7 - Creating **Input Controls** for the dashboard](exercises/GoogleCloudPlatform/ex2.7/)

- [Exercise 3 - Scenario with Azure](exercises/ex3/)
    - [Exercise 3.1 - Exercise 1 Sub Exercise 1 Description](exercises/ex1#exercise-11-sub-exercise-1-description)
    - [Exercise 3.2 - Exercise 1 Sub Exercise 2 Description](exercises/ex1#exercise-12-sub-exercise-2-description)




## Contributing
Please read the [CONTRIBUTING.md](./CONTRIBUTING.md) to understand the contribution guidelines.

## Code of Conduct
Please read the [SAP Open Source Code of Conduct](https://github.com/SAP-samples/.github/blob/main/CODE_OF_CONDUCT.md).

## How to obtain support

Support for the content in this repository is available during the actual time of the online session for which this content has been designed. Otherwise, you may request support via the [Issues](../../issues) tab.

## License
Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved. This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSES/Apache-2.0.txt) file.
