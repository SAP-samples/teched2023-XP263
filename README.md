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

### For Azure scenario


### For Google Cloud Platform scenario

1. A [SAP Datasphere System](https://www.sap.com/india/products/technology-platform/datasphere.html), configured with spaces and users with assigned roles. 
To get started, sign up for your [SAP Datasphere free tier tenant.](https://www.sap.com/products/technology-platform/datasphere/trial.html)

2. A [SAP Analytics Cloud account](https://www.sap.com/india/products/technology-platform/cloud-analytics.html) with live data connections to SAP Datasphere system to access SAP Datasphere Analytic Model or Perspective within SAP Analytics Cloud.
To get started, sign up for your [SAP Analytics Cloud Trial.](https://www.sap.com/products/technology-platform/cloud-analytics/trial.html)

3. A [Google cloud account](https://cloud.google.com) with a google cloud project enabled with the BigQuery API. If you're new to Google Cloud, [create a Google cloud account](https://cloud.google.com/free/) and create a [Google Cloud project](https://developers.google.com/workspace/guides/create-project). For new Projects, the BigQuery the BigQuery API is automatically enabled. 

### For Amazon Web Service scenario

1. A [SAP Business Technology Platform](https://www.sap.com/india/products/technology-platform.html) account. To setup your own SAP Business Technology Platform account you can follow the instruction [Get a Free Account on SAP BTP Trial](https://developers.sap.com/tutorials/hcp-create-trial-account.html)

2. A [SAP Business Application Studio](https://www.sap.com/products/technology-platform/business-application-studio.html) in the SAP Business Technology Platform account. To setup a SAP Business Application Studio you can follow the instruction [Set Up SAP Business Application Studio for Development](https://developers.sap.com/tutorials/appstudio-onboarding.html)

3. A [SAP HANA Database in the SAP HANA Cloud Service](https://www.sap.com/india/products/technology-platform/hana.html). To setup a SAP HANA Database in the SAP HANA Cloud Service you can follow the instruction [Start using SAP HANA Cloud in SAP BTP Cockpit](https://developers.sap.com/tutorials/hana-cloud-mission-trial-2.html) 

4. A [SAP Build Work Zone](https://www.sap.com/india/products/technology-platform/workzone.html). To setup a SAP Build Work Zone you can follow the instruction [Set Up SAP Build Work Zone](https://developers.sap.com/tutorials/cp-portal-cloud-foundry-getting-started.html)  

## Exercises

- [Getting Started](exercises/ex0/)

- [Exercise 1 - Scenario with Azure](exercises/ex1/)
    - [Exercise 1.1 - Exercise 1 Sub Exercise 1 Description](exercises/ex1#exercise-11-sub-exercise-1-description)
    - [Exercise 1.2 - Exercise 1 Sub Exercise 2 Description](exercises/ex1#exercise-12-sub-exercise-2-description)

- [Exercise 2 - Scenario with GCP](exercises/ex2/)
    - [Exercise 2.1 -Getting Started](exercises/ex2/ex2.1/)
    - [Exercise 2.2 - Build and expose data views on SAP Datasphere](exercises/ex2/ex2.2/)
        - [Exercise 2.2.1 - Creating a new view of "Product Sales Country"](exercises/ex2/ex2.2/#exercise-1--creating-a-new-view-of-product-sales-country)
    - [Exercise 2.3 - Creating a new view of "Product Sales Country Discount"](exercises/ex2/ex2.3/)
    - [Exercise 2.4 - Creating a new analytical model for "Product Sales Country Discount"](exercises/ex2/ex2.4/)
    - [Exercise 2.5 - Create a Category Management Dashboard on SAP Analytics Cloud](exercises/ex2/ex2.5/)
        - [Exercise 2.5.1 - Creating the Layout for the Category Management Dashboard](exercises/ex2/ex2.5#exercise-41-creating-the-layout-for-the-category-management-dashboard)
        - [Exercise 2.5.2 - Assigning the data from SAP Datasphere to Dashboard](exercises/ex2/ex2.5#exercise-42-assigning-the-data-from-sap-datasphere-to-dashboard)
    - [Exercise 2.6 - Creating the Charts in Category Management Dashboard for displaying Data](exercises/ex2/ex2.6)
        - [Exercise 2.6.1 - Creating the first Chart for displaying **Quantity per Product Category**](exercises/ex2/ex2.6#exercise-51-creating-the-first-chart-for-displaying-quantity-per-product-category)
        - [Exercise 2.6.2 - Creating another Chart for displaying **Discount per Product Category**](exercises/ex2/ex2.6#exercise-52-creating-another-chart-for-displaying-discount-per-product-category)
        - [Exercise 2.6.3 - Creating the last Chart for displaying **Sales Quantity over Time** ](exercises/ex2/ex2.6#exercise-53-creating-the-last-chart-for-displaying-sales-quantity-over-time)
    - [Exercise 2.7 - Creating **Input Controls** for the dashboard](exercises/ex2/ex2.7/)
    - [Exercise 3 - Scenario with AWS](exercises/ex2/)
    - [Exercise 2.1 - Exercise 2 Sub Exercise 1 Description](exercises/ex2#exercise-21-sub-exercise-1-description)
    - [Exercise 2.2 - Exercise 2 Sub Exercise 2 Description](exercises/ex2#exercise-22-sub-exercise-2-description)

- [Exercise 1 - Scenario with Azure](exercises/ex1/)

## Contributing
Please read the [CONTRIBUTING.md](./CONTRIBUTING.md) to understand the contribution guidelines.

## Code of Conduct
Please read the [SAP Open Source Code of Conduct](https://github.com/SAP-samples/.github/blob/main/CODE_OF_CONDUCT.md).

## How to obtain support

Support for the content in this repository is available during the actual time of the online session for which this content has been designed. Otherwise, you may request support via the [Issues](../../issues) tab.

## License
Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved. This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSES/Apache-2.0.txt) file.
