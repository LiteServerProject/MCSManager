![doc_logo.png](/public/common/doc_logo.png)

[![Status](https://img.shields.io/badge/npm-v7.6.1-blue.svg)](https://www.npmjs.com/)
[![Status](https://img.shields.io/badge/node-v12.20.0-blue.svg)](https://nodejs.org/en/download/)
[![Status](https://travis-ci.org/Suwings/MCSManager.svg?branch=master)](https://travis-ci.org/Suwings/MCSManager)
[![Status](https://img.shields.io/badge/License-MIT-red.svg)](https://github.com/LiteServerProject/MCSManager)

简单，易用，多实例，轻量级的 Minecraft Server 控制面板 

[中文简体](https://github.com/LiteServerProject/MCSManager) |  [API 文档](https://github.com/Suwings/MCSManager/wiki/API-Documentation)  | [二次开发参考文档](https://github.com/Suwings/MCSManager/wiki/Development_Document)

<br />

LiteServer Project ❤ MCSManager
-----------

[LiteServer Project](https://github.com/LiteServerProject) 已成为 [MCSManager](https://travis-ci.org/Suwings/MCSManager) 的金牌赞助商. 感谢 [Suwings](https://github.com/Suwings) 向开源世界的贡献.

<br />

简介
-----------
这是一款可以管理多个 Minecraft 服务端（支持群组端）的 Web 管理面板，并且可以分配多个子账号来分别管理不同的 Minecraft 服务端，支持绝大部分主流的服务端，甚至是其他非 Minecraft 的程序。

控制面板可运行在 Windows 与 Linux 平台，无需数据库与任何系统配置，只需安装 node 环境即可快速运行，属于轻量级的 Minecraft 服务端控制面板。

![main_theme.png](/public/common/main_theme.png)

<br />

运行环境
-----------
推荐 `Node 10.16.0` 以上，无需数据库和更改任何系统配置，开箱即可运行。

<br />


配置文件
-----------
配置文件是程序目录下的 `property.js` 文件，它会在你第一次运行的时候，自动生成。

> 此文件不会与 github 版本冲突，git pull 更新时也不会自动覆盖。

<br />


常见问题
-----------
| 问题 | 详情 |
| ------------------------ | --------------------------------------------------------------------------------------------- |
无法正常安装面板？| [参考教程](https://github.com/Suwings/MCSManager/wiki/Linux-%E4%B8%8B%E5%AE%89%E8%A3%85%E4%B8%8E%E4%BD%BF%E7%94%A8%E8%AF%A6%E8%A7%A3)
Linux 下面板如何后台运行？ | [参考方法](https://github.com/Suwings/MCSManager/wiki/Linux-%E4%B8%8B%E5%AE%89%E8%A3%85%E4%B8%8E%E4%BD%BF%E7%94%A8%E8%AF%A6%E8%A7%A3#%E4%BF%9D%E6%8C%81%E5%90%8E%E5%8F%B0%E8%BF%90%E8%A1%8C)
使用面板开启 `Bedrock Server` 端 | [参考教程](https://github.com/Suwings/MCSManager/wiki/%E4%BD%BF%E7%94%A8%E9%9D%A2%E6%9D%BF%E5%BC%80%E5%90%AF-Bedrock_server-%E6%9C%8D%E5%8A%A1%E7%AB%AF)
面板管理员的默认账号和密码是什么？ | 账号 `#master` 密码 `123456`
面板如何正确关闭？ | `Ctrl+C`
配置文件是什么？ | `property.js` 文件
如何修改面板默认端口？ | `property.js` 文件
如何配置反向代理？ | [Apache 配置参考教程](https://github.com/Suwings/MCSManager/wiki/%E4%BD%BF%E7%94%A8-Apache2.4-%E8%BF%9B%E8%A1%8C%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86)
配好反向代理却无法使用？ | [Apache](https://github.com/Suwings/MCSManager/issues/34) [Nginx](https://github.com/Suwings/MCSManager/issues/22) [宝塔上的Nginx](https://github.com/Suwings/MCSManager/wiki/%E5%85%B3%E4%BA%8E%E5%AE%9D%E5%A1%94%E9%9D%A2%E6%9D%BF%E7%9A%84-Nginx-%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86%E4%BB%A5%E5%8F%8ASSL%E8%AF%81%E4%B9%A6%E9%83%A8%E7%BD%B2)
反代后文件管理偶尔失效? | 请检查反代机器的防火墙是否拦截
我能修改登录页面吗？| [修改教程](https://github.com/Suwings/MCSManager/wiki/%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BF%AE%E6%94%B9%E7%99%BB%E5%BD%95%E9%A1%B5%E9%9D%A2)
其他常见问题 | [查看 Wiki](https://github.com/Suwings/MCSManager/wiki)
关于HTTP跳转HTTPS的帮助 | [查看 Nginx 301永久重定向 范例](https://github.com/Suwings/MCSManager/wiki/Nginx%E5%85%A8%E5%B1%80301%E6%B0%B8%E4%B9%85%E9%87%8D%E5%AE%9A%E5%90%91)

<br />

在 Windows 运行 
-----------
本版本主要用于模板化大规模部署, 因此不适用于Windows平台. 我们不建议也不会测试与Windows平台的兼容性. 若需要在Windows平台运行请参考原版: [Suwings/MCSManager: 在Windows运行](https://github.com/Suwings/MCSManager#%E5%9C%A8-windows-%E8%BF%90%E8%A1%8C)

<br />

在 Linux 运行
-----------

参考 [lsp-mcsm-base](https://github.com/LiteServerProject/container-images/blob/master/lsp-mcsm-base/Dockerfile) 镜像

<br />

项目目录结构
-----------
**注意:** 并不是所有目录的文件我们都建议你进行更改！

| 目录名 | 详情/解释 |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **property.js**                   |控制面板配置文件|
| **core/logo.txt**               |控制台输出 logo 文字|
| **public/**                      |前端所有代码，资源目录，前后端分离，使用 ws 和 ajax 通讯|
| **public/login/**                |纯 UI 逻辑登陆页面|
| **public/template/**             |前端业务模板，每个模板拥有着一个生命周期，开始与结束。|
| **public/onlinefs_public/**      |文件在线管理模块前端所有代码|
| **public/common/js/meum.js**     |控制面板左侧菜单列表|
| **public/common/js/login.js**    |通用登录流程逻辑，可重复利用在各类 HTML 登录模板|
| **server/server_core**           |Minecraft 服务端核心目录，包括服务端文件，配置，Mod，以及插件|
| **server/x.json**               |Minecraft 服务器面板配置文件|
| **users/x.json**                |控制面板用户配置文件|
| **route/**                      |控制器，HTTP 请求业务逻辑层（可二次扩展）|
| **route/websocket/**            |控制器，Webscoket 请求业务逻辑层（可二次扩展）|
| **core/Process/**                |Minecraft Server 类实现|
| **core/User/**                   |User 类实现|
| **core/DataModel.js**            |数据持久化模型，几乎是所有的配置的 I/O 模型|
| **model/**                      |模型层，用于提供控制器与服务端，用户操作，也提供设计模式模型|
| **helper/**                     |业务逻辑辅助层，用于辅助和重复利用业务逻辑|
| **onlinefs/**                    |文件管理独立模块 ([Suwings/IndependentFileManager](https://github.com/Suwings/IndependentFileManager))|

<br />

浏览器兼容性
-----------
- `ECMAScript 5` 标准
- `IE 11+` `Chrome` `Firefox` `Safari` `Opera` 等现代主流浏览器

**例外:** 文件在线管理界面需要 `IE 11+` 

<br />

FTP 服务
-----------

本版本已完全移除ftpd相关代码, 推荐使用在线文件管理.

<br />

反向代理 与 HTTPS
-----------

尽管默认没有 https ，您可能在公共网络下不太放心，但是我们不传递明文的密码，可以保证你的账号的密码是难以泄露的。

具体密码传递过程可参考 [单击这里跳转](https://github.com/Suwings/MCSManager/wiki/%E7%99%BB%E5%BD%95%E5%AF%86%E7%A0%81%E4%BC%A0%E9%80%92%E8%BF%87%E7%A8%8B%E5%9B%BE)

**Property 文件**

反向代理之前，建议你阅读 `property.js` 文件

> 里面有各类的设置，包括 gzip压缩，端口和ip绑定等等。

**实现 HTTPS 与 WSS**

打开前端 URL 定位文件 `public/common/URL.js`, 将 http 与 ws 改成 https 与 wss；

可保证前端所有请求均为 https 和 wss，但是后端方面还需要配置 SSL 与 反向代理。

**反向代理**

推荐使用 [Kiritow: image-station/frpc](https://github.com/Kiritow/image-station/tree/master/frpc) 镜像实现反向代理, 以实现反向代理后侧的加密通信.

Nginx配置HTTPS示例, 包含WebSocket:

```nginx
server {
    listen 443 ssl;
    server_name 服务器域名;

    # Let's Encrypt 凭据名称
    ssl_certificate fullchain.pem;
    ssl_certificate_key privkey.pem;
    ssl_trusted_certificate chain.pem;

    location ^~ / {
        proxy_set_header Host 服务器域名;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Real-Port $remote_port;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass http://127.0.0.1:23333;
    }

    location ^~ /websocket/ws {
        proxy_pass http://127.0.0.1:23333;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

<br />

权限系统
-----------
尤其注意的是，为了更加简化面板权限系统，我们只分为两种账号。

`管理账号` 凡是以 # 字符开头的用户，均为管理账号，列如 `#master` `#admin` `#test`

`普通账号` 不以 # 字符开头的用户，列如 `test` `usernameww` `xxx`

普通账号能够管理的服务器只能由管理账号来进行设定，管理账号可以管理任何服务器，并且能管理所有用户。

具体使用，我想你只需要运行就知道，设计的十分简单。

<br />

问题报告
-----------
欢迎发现任何 BUG 及时反馈，必当及时修复。

若发现严重安全漏洞又不便公开发布，请发送邮件至: Suwings@outlook.com，安全问题修复后将在代码中附加漏洞发现者姓名。

<br />

开源协议
-----------
MIT License

<br />
