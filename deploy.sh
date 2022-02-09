#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

# 设置github路径
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:xiaomai653/xiaomai653.github.io.git
else
  msg='来自github action的自动部署'
  githubUrl=https://${GITHUB_TOKEN}@github.com/xiaomai653/xiaomai653.github.io.git
  git config --global user.name "xiaomai"
  git config --global user.email "1271899086@qq.com"
fi

# 上传代码
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到github

cd -
rm -rf docs/.vuepress/dist