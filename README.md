# This is a proxy setup
The main motive behind creating this project is to create a proxy server

this is supposed to be exact replica of this steps mentioned in this article

https://mmazzarolo.com/blog/2022-02-05-creating-and-deploying-a-proxy-server-in-5-minutes/

The deployed site here in vercel ended up -
proxy-server-jade-gamma.vercel.app

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
