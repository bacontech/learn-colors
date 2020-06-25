#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

git push -f https://github.com/bacontech/learn-colors.git master:gh-pages


cd -


## Troubleshooting:
## Did you add vue.config.js?
# module.exports = {
#    publicPath: process.env.NODE_ENV === 'production'
#      ? './'
#      : './'
#  }
