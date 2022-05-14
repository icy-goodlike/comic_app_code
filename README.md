## api_server 文件夹

* 该文件夹下面放的是本地服务器，必须先启动该服务器，此项目才能正常运行。

#### 1.启动方法

在vscode中打开该目录，打开终端运行如下命令:

```npm
nodemon app.js   
```

1.确保安装了nodemon,如果没有安装则使用node启动入口文件

```npm
node app.js
```

1.1安装nodemon方法

```npm
npm install -g nodemon
```

## comic-code 文件夹

* 该文件夹是项目源码

#### 1.启动方法

在vscode中打开，在终端运行如下命令安装所需要的包:

```npm
npm install   
```

再运行如下命令启动项目:

```npm
npm run serve
```

启动成功后，可复制终端的本地链接打开本项目。
