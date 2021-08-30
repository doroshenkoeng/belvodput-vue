#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# Copy .htaccess to dist
cp .htaccess dist

# Copy .cpanel.yml to dist
cp .cpanel.yml dist

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init

git config user.email "doroshenkoeng@gmail.com"
git config user.name "Sergey"

git add -A
git commit -m 'deploy'

# git remote add origin https://github.com/belvodput/belvodput.git
git push -f git@belvodput:belvodput/belvodput.git master

# if you are deploying to https://<USERNAME>.github.io
# git push -f origin master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -