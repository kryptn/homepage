#!/usr/bin/env bash
npm install
npm run-script build


cp -rf src/build/* kgi/
exit 0
