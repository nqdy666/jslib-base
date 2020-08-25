# [jslib-base](https://github.com/nqdy666/jslib-base)
[![](https://img.shields.io/badge/Powered%20by-jslib%20base-brightgreen.svg)](https://github.com/nqdy666/jslib-base)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/nqdy666/jslib-base/blob/master/LICENSE)
[![npm](https://img.shields.io/badge/npm-1.6.0-orange.svg)](https://www.npmjs.com/package/@nq-js-lib/cli)
[![NPM downloads](http://img.shields.io/npm/dm/@nq-js-lib/cli.svg?style=flat-square)](http://www.npmtrends.com/@nq-js-lib/cli)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/nqdy666/jslib-base.svg)](http://isitmaintained.com/project/nqdy666/jslib-base "Percentage of issues still open")

[English](./README.md) | 简体中文

最好用的 `JS|TS` 第三方库脚手架，10秒快速搭建一个新库的基础框架

**基于jslib-base的库，都可以分享到[jsmini](https://github.com/jsmini)平台**

## :star: 特性

- 统一新建和更新命令行工具
- 支持ES6+或TypeScript编写源码，编译生成生产代码
- 第三方依赖自动注入（自动剔除第三方依赖无用代码tree shaking）
- 多环境支持（支持浏览器原生，支持AMD，CMD，支持Webpack，Rollup，fis等，支持Node）
- 集成代码风格校验(eslint)
- 集成单元测试环境（mocha）
- 集成测试覆盖率（istanbul+nyc）
- 集成可持续构建工具[travis-ci](https://www.travis-ci.org/)
- 集成ISSUE_TEMPLATE
- 集成[jsmini](https://github.com/jsmini)

## :rocket: 使用者指南

通过npm下载安装jslib（node >= 6.0）

```bash
$ npm i -g @nq-js-lib/cli
```

也可不安装全局命令，通过npx直接使用

```bash
$ npx @nq-js-lib/cli new
```

新建一个项目

```bash
$ nqjslib new mylib
# 交互式询问，输入项目信息
$ cd mylib
$ npm i
```

更新项目，只需在项目根目录执行如下命令

```bash
$ nqjslib update
```

对于旧项目，不能直接执行update命令，可以先初始化一个配置文件

```bash
$ nqjslib new -c
```

目录简介

```
.
├── demo 使用demo
├── dist 编译产出代码
├── doc 项目文档
├── src 源代码目录
├── test 单元测试
├── CHANGELOG.md 变更日志
└── TODO.md 计划功能
```

常用命令脚本

```bash
$ npm run lint # 校验代码
$ npm run test # 运行单测
$ npm run build # 构建代码
$ npm run release # 发布代码
$ npm publish # 发布到npm
```

## :kissing_heart: 贡献者指南
本项目使用lerna来管理多个插件

安装lerna

```bash
$ npm install -g lerna@3.16.4
```

lerna常用命令

```bash
$ lerna init # 初始化
$ lerna create @nq-js-lib/todo # 创建一个package
$ lerna add yargs --scope=@nq-js-lib/cli # 给package安装依赖
$ lerna list # 列出所有的包
$ lerna bootstrap # 安装全部依赖
$ lerna link # 建立全部软连接
$ lerna changed # 列出下次发版lerna publish 要更新的包
$ lerna publish # 会打tag，上传git,上传npm
```

## 贡献者列表

[contributors](https://github.com/nqdy666/jslib-base/graphs/contributors)

## :gear: 更新日志
[CHANGELOG.md](./CHANGELOG.md)

## :airplane: 计划列表
[TODO.md](./TODO.md)

## :bulb: 谁在使用

- [jsmini](https://github.com/jsmini)
- [template.js](https://github.com/nqdy666/template.js)
- [...](https://github.com/nqdy666/jslib-base/issues/10)

## 参考文档
- [Lerna 中文教程详解](https://juejin.im/post/5ced1609e51d455d850d3a6c)