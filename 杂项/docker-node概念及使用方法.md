### docker

可以把 docker 看成一个 vm；  
它是存在于当前系统下的一个系统级的 runtime；  
它抽象了操作系统底层 API 封装，使上层软件可以跨系统平台使用；  
所有可以部署在 docker 里的程序，不再需要关注操作系统兼容性问题；  
下面所有记录的 docker 操作方法主要是关于 node 的；

### docker 的 image 文件

可以把 docker 的 image 文件看作是 docker 的程序包，所有 docker 程序包可以在不同的服务器上复制及部署

#### node-image 的生成

image 生成需要几个必要的文件：

- Dockerfile
- .dockerignore
- package.json
- 启动脚本

Dockerfile 是 image 生成的核心文件，它包含了创建 image 和启动的脚本的步骤，示例如下：

```javascript
    #制定node镜像的版本
    FROM node:latest
    #移动当前目录下面的文件到app目录下
    ADD . /app/
    #进入到app目录下面，类似cd
    WORKDIR /app
    #安装依赖
    RUN npm install
    #对外暴露的端口
    EXPOSE 8080
    #程序启动脚本
    CMD ["npm", "start"]
```

.dockerignore 相当于是.gitignore 的作用，其中要指定需要忽略掉的文件，node_modules 是需要忽略掉的，如不忽略，image 会非常大，并且在`RUN npm install`时候会被覆盖掉；

package.json 和启动脚本不做解释；

配置好这几个文件后，执行如下命令，可以生成 image 文件：  
`docker build -t <docker project name> .`  
生成后，可以通过`docker images`查看该 image,还可以通过 save 和 load 命令，将 image 转存出来，以在不同服务器之间复制部署。  
导出：`docker save -o <image path> <image name>`  
导入：`docker load -i <image path>`

### docker 项目的启动

在有了 docker 的 image 后，可以通过命令来在后台静默启动该 image，命令如下  
`docker run -d -p 3000:8080 <image name>`  
-d 参数是指在后台运行  
-p 外部机器的3000映射docker内部的808端口  
执行后，`docker ps` 查看运行的项目

### 其他常用操作
`docker stop <docker process id >`停进程  
`docker rm <docker process id >`删进程
`docker rmi <docker image id >`删image

### 相关文档

- [docker 命令大全](http://www.runoob.com/docker/docker-command-manual.html)
- [docker 官网](https://www.docker.com)
