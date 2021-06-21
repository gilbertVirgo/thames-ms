#!/bin/bash

cd /home/ubuntu/thames-ms
git pull git@github.com:Roundtable-Design/thames-ms.git master
npm i
npm run build
npx serve -s build

### Test comment!!