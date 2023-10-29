[![REUSE status](https://api.reuse.software/badge/github.com/SAP-samples/teched2023-XP263)](https://api.reuse.software/info/github.com/SAP-samples/teched2023-XP263)

# XP263 - Develop a Cross-Platform Scenario with SAP BTP and Amazon Web Services/Google Cloud Platform/Microsoft Azure

## Description

This repository contains the hands-on material for the SAP TechEd 2023 session - XP263: Develop a Cross-Platform Scenario with SAP BTP and any one of the Hyperscalers - Amazon Web Services/Google Cloud Platform/Microsoft Azure. 

## Overview

The scenarios for each of the Hyperscalers are as follows:

- **Amazon Web Services**: Build an SAP BTP Extension application to validate an SAP Business Partner and set up an AWS Account to send notifications via AWS SNS Service. In this scenario, you will learn how to set up a AWS Account and set up a AWS SNS service. On the SAP BTP side, you will learn how to build an SAP CAP application with SAP HANA Cloud as an application database and integrate with AWS SNS Service.

- **Google Cloud Platform**: Learn to build a category management application with data integration from Google BigQuery and SAP S/4HANA into SAP Dataspshere. 

- **Microsoft Azure**: Build an SAP BTP application and integrate with Azure openAI using SAP Generative AI Hub.


## Requirements

The requirements to follow the exercises in this repository are:

### For the Amazon Web Service scenario

1. A [SAP Business Technology Platform](https://www.sap.com/india/products/technology-platform.html) account. To set up your own SAP Business Technology Platform account you can follow the instructions on how to [Get a Free Account on SAP BTP Trial](https://developers.sap.com/tutorials/hcp-create-trial-account.html)

2. A [SAP Business Application Studio](https://www.sap.com/products/technology-platform/business-application-studio.html) in the SAP Business Technology Platform account. To set up a SAP Business Application Studio you can follow the instructions [Set Up SAP Business Application Studio for Development ](https://developers.sap.com/tutorials/appstudio-onboarding.html)

3. A [SAP HANA Database in the SAP HANA Cloud Service](https://www.sap.com/india/products/technology-platform/hana.html). To set up a SAP HANA Database in the SAP HANA Cloud Service you can follow the instructions [Start using SAP HANA Cloud in SAP BTP Cockpit](https://developers.sap.com/tutorials/hana-cloud-mission-trial-2.html) 

4. A [SAP Build Work Zone](https://www.sap.com/india/products/technology-platform/workzone.html). To set up a SAP Build Work Zone you can follow the instructions [Set Up SAP Build Work Zone](https://developers.sap.com/tutorials/cp-portal-cloud-foundry-getting-started.html)  

5. Amazon Web Services Account with SNS Service.

### For the Google Cloud Platform scenario

1. A [SAP Datasphere System](https://www.sap.com/india/products/technology-platform/datasphere.html), configured with spaces and users with assigned roles. 
To get started, sign up for your [SAP Datasphere trial](https://www.sap.com/products/technology-platform/datasphere/trial.html)

2. A [SAP Analytics Cloud account](https://www.sap.com/india/products/technology-platform/cloud-analytics.html) with live data connections to the SAP Datasphere system to access the SAP Datasphere Analytic Model or Perspective within SAP Analytics Cloud.
To get started, sign up for your [SAP Analytics Cloud Trial.](https://www.sap.com/products/technology-platform/cloud-analytics/trial.html)

3. A [Google Cloud account](https://cloud.google.com) with a Google Cloud project enabled with the BigQuery API. If you're new to Google Cloud, [create a Google Cloud account](https://cloud.google.com/free/) and create a [Google Cloud project](https://developers.google.com/workspace/guides/create-project). For new Projects, the BigQuery the BigQuery API is automatically enabled. 

### For Azure scenario

1. A [SAP Business Technology Platform](https://www.sap.com/india/products/technology-platform.html) account. To set up your own SAP Business Technology Platform account you can follow the instructions on how to [Get a Free Account on SAP BTP Trial](https://developers.sap.com/tutorials/hcp-create-trial-account.html)

2. A [SAP Business Application Studio](https://www.sap.com/products/technology-platform/business-application-studio.html) in the SAP Business Technology Platform account. To set up a SAP Business Application Studio you can follow the instructions [Set Up SAP Business Application Studio for Development ](https://developers.sap.com/tutorials/appstudio-onboarding.html)

3. A [SAP HANA Database in the SAP HANA Cloud Service](https://www.sap.com/india/products/technology-platform/hana.html). To set up a SAP HANA Database in the SAP HANA Cloud Service you can follow the instructions [Start using SAP HANA Cloud in SAP BTP Cockpit](https://developers.sap.com/tutorials/hana-cloud-mission-trial-2.html)
  
5. [SAP AI Launchpad](https://help.sap.com/docs/ai-launchpad)

6. [SAP AI Core](https://community.sap.com/topics/ai-core-artificial-intelligence) 

## Exercises

Select any one of the scenarios you want to develop. 


- [Exercise 1 - Scenario with AWS](exercises/AmazonWebServices/README.md)

    - [Exercise 1.1 - Build and Deploy SAP CAP Application](exercises/AmazonWebServices/ex1.1/README.md)
    - [Exercise 1.2 -  Configure Amazon SNS Service and integrate with SAP CAP Application](exercises/AmazonWebServices/ex1.2/README.md)
      
- [Exercise 2 - Scenario with GCP](exercises/GoogleCloudPlatform/)
    - [Exercise 2.1 - Getting Started](exercises/GoogleCloudPlatform/ex2.1/)
    - [Exercise 2.2 - Build and expose data views on SAP Datasphere](exercises/GoogleCloudPlatform/ex2.2/)
    - [Exercise 2.3 - Creating a new view of "Product Sales Country Discount"](exercises/GoogleCloudPlatform/ex2.3/)
    - [Exercise 2.4 - Creating a new analytical model for "Product Sales Country Discount"](exercises/GoogleCloudPlatform/ex2.4/)
    - [Exercise 2.5 - Create a Category Management Dashboard on SAP Analytics Cloud](exercises/GoogleCloudPlatform/ex2.5/)
    - [Exercise 2.6 - Creating the Charts in the Category Management Dashboard for /Displaying Data](exercises/GoogleCloudPlatform/ex2.6)
    - [Exercise 2.7 - Creating Input Controls for the Dashboard](exercises/GoogleCloudPlatform/ex2.7/)

- [Exercise 3 - Scenario with Azure](exercises/MicrosoftAzure/)
    - [Exercise 3.1 - Prepatory Steps](exercises/MicrosoftAzure/ex3.1/README.md)
    - [Exercise 3.2 - Deploy CAP API to Cloud Foundry](exercises/MicrosoftAzure/ex3.2/README.md)
    - [Exercise 3.3 - Run App Locally on Web Browser](exercises/MicrosoftAzure/ex3.3/README.md)
    - [Exercise 3.4 - Fetch SAP Generative AI Hub Credentials](exercises/MicrosoftAzure/ex3.4/README(OPTIONAL).md)
    - [Exercise 3.5 - Enable LLM Access](exercises/MicrosoftAzure/ex3.5/README.md)



## Contributing
Please read the [CONTRIBUTING.md](./CONTRIBUTING.md) to understand the contribution guidelines.

## Code of Conduct
Please read the [SAP Open Source Code of Conduct](https://github.com/SAP-samples/.github/blob/main/CODE_OF_CONDUCT.md).

## How to obtain support

Support for the content in this repository is available during the actual time of the online session for which this content has been designed. Otherwise, you may request support via the [Issues](../../issues) tab.

## License
Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved. This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSES/Apache-2.0.txt) file.
