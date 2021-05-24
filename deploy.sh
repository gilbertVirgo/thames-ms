#!/bin/bash

cd app
npm i
npm run build
npx serve -s build