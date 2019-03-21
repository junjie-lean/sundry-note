# 云服务架构

###  云服务是iaas,paas,saas三者的统称
- IaaS: Infrastructure-as-a-service,基础设施服务，代表产品：阿里云服务器
- PaaS: Platform-as-a-service，平台服务，代表产品：MySQL,Node.js
- SaaS: Software-as-a-service，软件服务，代表产品：Facebook,QQ

<hr/>

### 详细定义：
 #### SaaS
    SaaS是指，软件的服务，管理，部署均是第三方处理，不需要关心任何技术问题，讲究开箱即用，几乎互联网产品都是SaaS;
 #### PaaS
    PaaS是指，抽象掉硬件，操作系统平台等等细节问题，对外提供统一结构的接口，可以无缝扩展，开发者需要关注的是业务问题逻辑，不需要关注底层，docker，node.js这些都是PasS架构，开发者不要关注底层问题，因为这些应用已经把底层抽象出来，开发者只需要去写业务逻辑。
 #### IaaS
    IaaS是云服务中的最底层，这种模式只提供基础资源，用户需要去控制底层，然后才能实现使用逻辑，云主机这些就属于IaaS架构；

<hr />

### 其他扩展
还有其他更细化的扩展，比如BaaS(Backend as a Service),DaaS(Data as a Service),NaaS(Network as a service),FaaS(Function as a service)


