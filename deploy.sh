#!/usr/bin/env sh

set -e
npm run build
cd dist

git init

git config --global user.email "33372685+erikrani@users.noreply.github.com"
git config --global user.name "erikrani"

git remote add origin "https://erikrani:${GH_TOKEN}@github.com/realerikrani/price-list.git"

git add -A
git commit -m 'deploy'

git push --quiet --force origin master:gh-pages

cd - || exit
