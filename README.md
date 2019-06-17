# Commit Generator!

# *** UNDER CONSTRUCTION! COME BACK SOON! ***

Commit generator is used to create automated commits made to your GitHub in 
order to decorate your commit history with pixel art.

## Description

All in all, the commit generator is a cron job that is ran in the AWS cloud
using a CloudWatch rule to schedule the execution of a Lambda function that
commits code to a GitHub account. Since the cronjob is ran in the cloud, it will
execute as often as you assign it.

## Technologies Used

* AWS
    * Lambda
    * CloudWatch
    * IAM
* Node.js
* Git
* NPM
* Bash

## Prerequesites
1. Git installed.
Be sure you have Git installed on your machine. If you are unsure,
run the following command in your terminal to check.
```bash
git --version
```
2. Node installed.
Be sure you have Node installed on your machine. If you are unsure,
run the following command in your terminal to check.
```bash
node --version
```
If you have Node installed, you will see the latest version of Node on your
computer. If you do not see the version number then go download Node [here](https://nodejs.org/en/).
3. AWS account.
If you do not have an AWS account, [create one](https://portal.aws.amazon.com/billing/signup#/start).
Aftewards make sure you create
an [Admin IAM user](https://docs.aws.amazon.com/IAM/latest/UserGuide/getting-started_create-admin-group.html)

## Getting started
1. Fork repository
2. Clone repository.
    * Clone the repository, install all the dependencies from the package.json,
    and then change directories into new repository.

    ```bash
    git clone <GITHUB_URL>
    npm install
    cd commit-generator
    ```
3. Zip node modules
    * We will be importing all of the dependencies, for our Lambda function,
    as a Lambda layer. This will keep the size of our Lambda function small
    enough to edit the code inline in the Lambda console. From the root of the
    repository's directory, run the following:
    ```bash
    npm install
    mkdir nodejs
    mv node_modules nodejs/
    zip -r nodejs.zip nodejs
    rm -rf nodejs
    ```
    If the execution is correct, it should have created a new zip file for
    our Lambda layer, *nodejs.zip*.

    **NOTE:** The directory name *nodejs* is not random. It will point our
    Lambda layer to the node_modules folder when we upload it to AWS.
## Create Lambda function

## Create Lambda layer

## Create CloudWatch Rule
