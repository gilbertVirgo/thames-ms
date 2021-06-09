#!/bin/bash

cd app
git pull
npm i
npm run build
npx serve -s build