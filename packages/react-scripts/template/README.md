This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
This project uses custom react-scripts from [@zedesk.net/cordova-react-scripts](https://www.npmjs.com/package/@zedesk/cordova-react-scripts)

## Custom template

This project aims to prepare your project to run with cordova

Cordova must be installed in your environement :

```bash
npm i cordova -g
```

As usual with create-react-app, the source code of the application is located in the `src` directory.

Running `yarn build` will build the application into the `www` folder, which is the base directory for a cordova app.

adding platform :

```bash
cordova platform add android --save
```

You must define at least one emulator into Android Studio.

### Hot reload mode

To allow hot reload, modify the config.xml file by adding the url of the react dev server as source of the content tag.

For example :

```xml
<content src="http://192.168.0.1:3000" />
```

then start the react dev server, then cordova

```bash
yarn start
rm -rf www/*
cordova emulate android
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode on android emulator. It starts the react dev server and the android emulator.

### `npm run emulate`

Start the android emulator.

This script expects that the react dev server is running on the local machine on port 3000

### `npm start:react`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build:release`

build the release cordova application.

This script builds first the react app, then the cordova app.

### `npm run build`

build the cordova application in debug mode.

This script builds first the react app, then the cordova app.

### `npm run build:react`

Builds the app for production to the `www` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run build:cordova`

Build the cordova app in debug mode.

The react app must have previously be builded and production files must be present in the `www` folder.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
