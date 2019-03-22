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



