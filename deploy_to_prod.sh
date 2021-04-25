#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# Copy .htaccess to dist
copy .htaccess dist

# Copy .cpanel.yml to dist
copy .cpanel.yml dist

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git remote add origin git@github.com:belvodput/belvodput.git

# if you are deploying to https://<USERNAME>.github.io
git push -f origin master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -