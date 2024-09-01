# To push in new code to an empty repo
1. Create a repo in github and run follpwing commands


git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:darkacer/proxyServer.git

git config user.email "omkardeokar95@gmail.com"
git config user.name "darkacer"

git remote set-url origin https://github.com/darkacer/proxyServer

git push -u origin main
