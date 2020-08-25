# [jslib-base](https://github.com/nqdy666/jslib-base)
[![](https://img.shields.io/badge/Powered%20by-jslib%20base-brightgreen.svg)](https://github.com/nqdy666/jslib-base)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/nqdy666/jslib-base/blob/master/LICENSE)
[![npm](https://img.shields.io/badge/npm-1.6.0-orange.svg)](https://www.npmjs.com/package/@nq-js-lib/cli)
[![NPM downloads](http://img.shields.io/npm/dm/@nq-js-lib/cli.svg?style=flat-square)](http://www.npmtrends.com/@nq-js-lib/cli)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/nqdy666/jslib-base.svg)](http://isitmaintained.com/project/nqdy666/jslib-base "Percentage of issues still open")

English | [简体中文](./README.zh-CN.md)

The best third party `JS|TS` library scaffold. fast to create the framework for building a new library.

**The library that based jslib-base can be shared to the [jsmini](https://github.com/jsmini) platform**

## Characteristics

- nqjslib` commander all in one
- Coded in ES6+ or TypeScript, easily compile and generate production code
- Third parties rely on automatic injection(Tree shaking)
- Supports multi environment, including default browsers, Node, AMD, CMD, Webpack, Rollup, Fis and so on.
- Integrated code style lint(eslint).
- Integrated unit test environment(mocha).
- Integrated test coverage(istanbul+nyc).
- Integrated continuous integration tool [travis-ci](https://www.travis-ci.org/)
- Supports [sideEffects](https://github.com/webpack/webpack/tree/master/examples/side-effects)
- Integrated Issue template
- Integrated [jsmini](https://github.com/jsmini)

## Usage Instructions

Using npm, install global nqjslib`(node >= 6.0)

```bash
$ npm i -g @nq-js-lib/cli
```

Or use the npx command to skip the install

```bash
$ npx @nq-js-lib/cli new
```

create a new lib

```bash
$ nqjslib new mylib
# input something
$ cd mylib
$ npm i
```

To update the old lib

```bash
$ nqjslib update
```

For older projects, the update command cannot be executed directly. Instead, a configuration file can be initialized first

```bash
$ nqjslib new -c
```

Directory

```
├── demo - Using demo
├── dist - Compiler output code
├── doc - Project documents
├── src - Source code directory
├── test - Unit tests
├── CHANGELOG.md - Change log
└── TODO.md - Planned features
```

The npm scripts

```bash
$ npm run lint
$ npm run test
$ npm run build
$ npm run release
$ npm publish
```

## Contribution Guide

This project use lerna to manage mutil plugins

First, to install lerna

```bash
$ npm install -g lerna@3.16.4
```

Some commands of lerna

```bash
$ lerna init
$ lerna create @nq-js-lib/todo
$ lerna add yargs --scope=@nq-js-lib/cli
$ lerna list
$ lerna bootstrap
$ lerna link
$ lerna changed
$ lerna publish
```

## Contributors

[contributors](https://github.com/nqdy666/jslib-base/graphs/contributors)

## Change Log
[CHANGELOG.md](./CHANGELOG.md)

## TODO
[TODO.md](./TODO.md)

## Current Users

- [jsmini](https://github.com/jsmini)
- [template.js](https://github.com/nqdy666/template.js)
- [...](https://github.com/nqdy666/jslib-base/issues/10)

## Relative links
- [Lerna 中文教程详解](https://juejin.im/post/5ced1609e51d455d850d3a6c)