#!/bin/sh

cd adopt-pets
npm install
npm run lint
npm test
echo "Test run successful"
