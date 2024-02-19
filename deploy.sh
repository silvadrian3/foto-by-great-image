#!/bin/bash

echo starting staging deployment

rm -rf ./deployment/dist
npm install
cp -a angular-2-data-table ./node_modules/angular-2-data-table
ng build --env=staging
mv ./dist ./deployment/dist
cd ./deployment/
gcloud app deploy app.yaml

echo deployment complete
