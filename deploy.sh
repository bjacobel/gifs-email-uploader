#!/bin/bash

rm -rf dist/gifs-email-uploader.zip

zip dist/gifs-email-uploader.zip dist/index.js

aws lambda update-function-code \
  --function-name gifs-SES-uploader \
  --zip-file fileb://~/code/gifs-email-uploader/dist/gifs-email-uploader.zip
