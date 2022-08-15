<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->


[![Flow-Idra](https://cldup.com/dTxpPi9lDf.thumb.png)](https://www.idracompany.com/)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://bitbucket.org/idradigis/reactjs-redux-structure-template/src/master/)

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation
Requires [Node.js](https://nodejs.org/) v14+ to run.

```sh
$ npm install
```

## Running the app

```sh
npm install
** Add .env.dev || .env.prod
npm run start:dev || npm run start:prod
npm run typeorm:migration:generate <filename> - generate migration
npm run typeorm:migration:run - run migration
npm run typeorm:migration:drop - drop database
npm run seed:run - initital data seed
npm run devops:original:clean-database - drop => migration => seed
```

## Tech

| Core | Version |
| ------ | ------ |
| @nestjs/cli  | 7.5.1 |
| @nestjs/common | 7.5.1 |
| @nestjs/core | 7.5.1 |
| @nestjs/typeorm | 7.5.1 |
| typeorm |0.2.29 |
| pg | 8.5.1 |
| typescript | 4.0.5 |

## Plugins

Dillinger is currently extended with the following plugins.
Instructions on how to use them in your own application are linked below.

| Plugin | Version |
| ------ | ------ |
| @nestjs/websockets | 8.1.2 |
| @nestjs/jwt | 7.2.0 |
| nodemailer | 6.6.1 |
| @mui/system  | 5.8.0 |
| @mui/icons-material  | 5.6.2 |
| eslint | 8.15.0 |
| prettier | 2.6.2 |
| husky | 8.0.1 |
| react-multi-lang | 2.1.1 |
| lodash | 4.17.21 |
| moment | 2.29.1 |

## Notice Import Root

| Import | Stand for |
| ------ | ------ |
| @/* | src/* |
| @utils | src/Utils/index.ts |
| @entities/*  | src/Entities/* |
| @constants  | src/Constants/index.ts |
| @interfaces | src/Interfaces/index.ts |

