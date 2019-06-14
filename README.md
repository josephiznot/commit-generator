# Commit Generator!

# *** UNDER CONSTRUCTION! COME BACK SOON! ***

Commit generator is used to create automated commits made to your GitHub in 
order to decorate your commit history with pixel art.

## Description

All in all, the commit generator is a cron job that is ran in the AWS cloud
using a CloudWatch rule to schedule the execution of a Lambda function that
commits code to GitHub. Since the cronjob is ran in the cloud, and not on a
local computer, you never have to worry again unexecuted cronjobs due to your
machine dying.

## Technologies Used

* AWS
    * Lambda
    * CloudWatch
    * IAM
* Node.js
* Git
* NPM
* Bash

## Getting started

1. Zip node modules
    * We will be importing all of the dependencies, for our Lambda function,
    as a Lambda layer. This will keep the size of our Lambda function small
    enough to edit the code inline. From the root of the repository's directory,
    run the following:
    ```bash
    npm install
    mkdir nodejs
    mv node_modules nodejs/
    zip -r nodejs.zip nodejs
    rm -rf nodejs
    ```
    If the execution is correct, it should have created a new zip file for
    all of our Lambda layer, *nodejs.zip*.

    **NOTE:** The *nodejs* directory name is not random. It will point our
    Lambda layer to the node_modules folder.