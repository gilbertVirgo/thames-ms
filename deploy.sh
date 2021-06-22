#!/bin/bash

GIT_BRANCH="${BRANCH:-master}"

cd /home/ubuntu/thames-ms
git pull git@github.com:Roundtable-Design/thames-ms.git $GIT_BRANCH
npm i
npm run build
npx serve -s build

### Test comment!!