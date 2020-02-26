# React学习笔记

 ## 1. 下载基础模板项目(nodejs安装,create-react-app模块安装,git安装略)
在当前文件夹创建一个react模板项目 react-admin

`
  create-react-app react-admin
`
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200225140317337.png)
#### ps: 运行时出现下图错误
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200225140726216.png)
解决: 跟目录下添加.env 配置文件忽略版本差异
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200225140943924.png)

##  2. 运行打包项目
 	首先安装serve模块(使用频繁 添加到全局模块中)
 	`npm install -g serve`
  	运行打包的项目 (serve 项目文件夹)
  	`serve build`
## 3. 为了将代码托管到github
##### git 常用基本命令
```bash
* git config --global user.name "username" //配置用户名
* git config --global user.email "xx@gmail.com" //配置邮箱
* git init //初始化生成一个本地仓库
* git add . //添加到暂存区
* git commit –m "message" //提交到本地仓库
* git remote add origin url //关联到远程仓库
* git push origin master //推送本地 master 分支到远程 master 分支
* git checkout master 推出分支
* 
* git checkout -b dev //创建一个开发分支并切换到新分支
* git push ogigin dev //推送本地 dev 分支到远程 dev 分支
* git pull origin dev //从远程 dev 分支拉取到本地 dev 分支
* git clone url //将远程仓库克隆下载到本地
```

1. 首先在 https://github.com/创建一个仓库 得到仓库地址
	`https://github.com/kikock/xxx.git`
	![在这里插入图片描述](https://img-blog.csdnimg.cn/20200225144736583.png)
	创建完成取得地址![在这里插入图片描述](https://img-blog.csdnimg.cn/20200225144918744.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2tpa29jaw==,size_16,color_FFFFFF,t_70)
3. 先创建或者修改 .gitignore文件 忽略不需要托管的文件
4. 开始进行仓库配置
	`git init   //初始化生成一个本地仓库`
	`git add . //添加到暂存区`
	`git commit –m "init app" //提交到本地仓库版本`
	`git remote add origin url //关联到远程仓库`
	`git push origin master //上传本地 master 分支到远程 master 分支(输入用户名和密码)`
	到此你的生产环境代码已经上传到仓库了.
	创建一个新的dev分支进行区分
	`git checkout -b dev //创建一个开发分支并切换到新分支`
	`git push ogigin dev //推送本地 dev 分支到远程 dev 分支`
	开发时在dev分支开发 再同步到master分支
	
	拉取代码进入创库查看当前本地分支
	`git branch`
	根据远程仓库的dev(别名/dev)生成本地dev 并切换到dev
	`git checkout -b origin/dev`
	
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200225144318519.png)
修改后推送到远程仓库dev分支
`git pull origin dev`
