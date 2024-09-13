# This is a proxy setup
The main motive behind creating this project is to create a proxy server

this is supposed to be exact replica of this steps mentioned in this article

https://mmazzarolo.com/blog/2022-02-05-creating-and-deploying-a-proxy-server-in-5-minutes/

The deployed site here in vercel ended up -
https://proxy-server-mz84oskc8-darkacers-projects.vercel.app/

The API is hosted on the following endpoint
https://proxy-server-jade-gamma.vercel.app/api

## To push in new code to an empty repo
1. Create a repo in github
2. Run follpwing commands

```
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:darkacer/proxyServer.git

git config user.email "omkardeokar95@gmail.com"
git config user.name "darkacer"

git remote set-url origin https://github.com/darkacer/proxyServer

git push -u origin main
```

To Call the API - use the following example

```
curl --location 'https://proxy-server-jade-gamma.vercel.app/api' \
--header 'myUrl: https://workday--wdgtmdev.sandbox.my.salesforce.com/services/data/v62.0/metadata/deployRequest/0Af7600000WNrp6?includeDetails=true' \
--header 'Authorization: Bearer 00D760000004g8M!ARQAQNJ9WMA00.EYlYOb3TG1oomPIBJiHi8UyUTk9U.arvc91tn3BDfqluamOBevvjfOC9c4aC1hAz5I2QausYmVdscqZCxD' \
--header 'Content-Type: application/json' \
--header 'headerlist: Authorization,Content-Type'
```
