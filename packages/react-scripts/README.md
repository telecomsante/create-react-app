# react-scripts

This package is a fork of Create React App customized to create a React-Cordova application

cordova must be installed :

```bash
npm i cordova -g
```

to use it :

```bash
npx  create-react-app test-app \
  --scripts-version @zedesk/cordova-react-scripts
cd test-app
cordova platform add android
yarn build
cordova emulate android
```

## Pristine doc from facebook

This package includes scripts and configuration used by [Create React App](https://github.com/facebook/create-react-app).<br>
Please refer to its documentation:

- [Getting Started](https://facebook.github.io/create-react-app/docs/getting-started) – How to create a new app.
- [User Guide](https://facebook.github.io/create-react-app/) – How to develop apps bootstrapped with Create React App.
