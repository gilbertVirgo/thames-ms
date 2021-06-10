#!/bin/bash

cd app
git pull git@github.com:Roundtable-Design/thames-ms.git master
npm i
npm run build
npx serve -s build

### Test comment!
### Another test!
### Another nother test!