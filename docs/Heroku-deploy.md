# Deploy to heorku

1. we need to move everything in the api folder to root folder because heorku expect a package.js in the root

2. we do `ng build --configurations=heroku-prod ` to build the angular to a public folder and use it as part of node

3. <https://github.com/YIREN1/chatapp/commit/61bf92b5b4498a2cf4d49a41028d12ccac65de2e> This commit should give an idea of the changes that we need to make to make it working (env variables and stuff)

4. something left is google service account, <https://medium.com/@nwkeeley/a-better-solution-would-be-to-4fde38db8401>, we have a solution here