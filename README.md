# @zedesk/cordova-react-scripts

![node version](https://img.shields.io/badge/node-v10.x-brightgreen.svg) ![cordova version](https://img.shields.io/badge/cordova-v8.1.2-brightgreen.svg) ![create--react--app version](https://img.shields.io/badge/create--react--app-v2.1.5-brightgreen.svg)

This project is a fork of [create-react-app](https://github.com/facebook/create-react-app) customized to create hybrid app with cordova.

As prerequisite, you will need to have [Node 10.x](https://nodejs.org/en/) or later and the [cordova client](https://cordova.apache.org/#getstarted) installed.

## Quick Overview

```sh
npx create-react-app my-app --scripts-version=@zedesk/cordova-react-scripts
cd my-app
cordova platform add android --save
npm start
```

## created files tree

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── config.xml
├── config.js
├── platforms
├── plugins
├── hooks
├── res
└── www
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
```

