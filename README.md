Karma Host Environment
==============================

[![Build Status](https://api.travis-ci.com/JS-DevTools/karma-host-environment.svg?branch=master)](https://travis-ci.com/JS-DevTools/karma-host-environment)
[![Coverage Status](https://coveralls.io/repos/github/JS-DevTools/karma-host-environment/badge.svg?branch=master)](https://coveralls.io/github/JS-DevTools/karma-host-environment)

[![npm](https://img.shields.io/npm/v/karma-host-environment.svg)](https://www.npmjs.com/package/karma-host-environment)
[![Dependencies](https://david-dm.org/JS-DevTools/karma-host-environment.svg)](https://david-dm.org/JS-DevTools/karma-host-environment)
[![License](https://img.shields.io/npm/l/karma-host-environment.svg)](LICENSE)

[![OS and Browser Compatibility](https://jsdevtools.org/img/badges/ci-badges-with-ie.svg)](https://travis-ci.com/JS-DevTools/karma-host-environment)


[**Host Environment**](https://jsdevtools.org/host-environment/) is a library that makes it easy to detect whether your code is running in Node.js or a web browser, Windows or Mac, Internet Explorer or Chrome, etc.

**Karma Host Environment** is a companion to Host Environment, specifically for the [Karma test runner](https://karma-runner.github.io/3.0/index.html).  It allows you to detect not only the browser that your tests are running in, but also information about the host server, such as the operating system, Node.js version, and even environment variables.



Example
--------------------------

```javascript
import host from "host-environment";

if (host.env.CI) {
  // Setup CI test fixtures
}

if (host.browser) {
  // Test browser behavior

  if (host.browser.IE) {
    // Test Internet Explorer-specific behavior
  }
}

if (host.node) {
  // Test Node.js behavior

  if (host.node.version < 8) {
    // Different logic for older versions of Node
  }

  if (host.os.windows) {
    // Test Windows-specific behavior
  }
}
```



Related Projects
--------------------------
- [karma-config](https://jsdevtools.org/karma-config)<br>
  Karma configuration builder with sensible defaults to minimize boilerplate

- [host-environment](https://jsdevtools.org/host-environment)<br>
  Easily detect what host environment your code is running in



Installation
--------------------------
Use [npm](https://docs.npmjs.com/about-npm/) or [yarn](https://yarnpkg.com) to install `host-environment` **and** `karma-host-environment` as development dependencies:

```bash
npm install --save-dev host-environment karma-host-environment
```



Usage
--------------------------
[Configure Karma](https://karma-runner.github.io/1.0/config/configuration-file.html) to use the `host-environment` framework plug-in:

**karma.conf.js**

```javascript
module.exports = function(config) {
  config.set({
    frameworks: ["host-environment"],
    ...
  });
};
```



API
--------------------------
Import [host-environment](https://jsdevtools.org/host-environment/) as you normally would:

```javascript
import host from "host-environment";
```

### The `host` object
You can use [all of the `host` properties](https://jsdevtools.org/host-environment/#api) as usual:

- [`host.global`](https://github.com/JS-DevTools/host-environment#hostglobal)
- [`host.os`](https://github.com/JS-DevTools/host-environment#hostos)
- [`host.env`](https://github.com/JS-DevTools/host-environment#hostenv)
- [`host.node`](https://github.com/JS-DevTools/host-environment#hostnode)
- [`host.browser`](https://github.com/JS-DevTools/host-environment#hostbrowser)

### The `host.env` property
Normally the `host.env` property would be an empty object when running in a web browser, since web browsers don't have access to environment variables.  But Karma Host Environment exposes the host server's environment variables, so you can use `host.env` just as you would if you were running in Node.js:

```javascript
if (host.env.CI) {
  // Setup CI test fixtures
}

if (host.env.QUICK_TEST) {
  // Skip long-running tests
}
```

### The `host.karma` property
In addition to all the usual `host` properties, Karma Host Environment adds an additional `host.karma` property.  This object exposes all the `host` properties of the Karma server itself, such as the operating system, Node.js version, environmenv variables, etc.

```javascript
if (host.karma) {
  // We're running in Karma

  if (host.karma.node.version > 10) {
    // The server is running in Node v10+
  }

  if (host.karma.os.windows) {
    // The server is a Windows OS
  }
}
```


Contributing
--------------------------
Contributions, enhancements, and bug-fixes are welcome!  [File an issue](https://github.com/JS-DevTools/karma-host-environment/issues) on GitHub and [submit a pull request](https://github.com/JS-DevTools/karma-host-environment/pulls).

#### Building
To build the project locally on your computer:

1. __Clone this repo__<br>
`git clone https://github.com/JS-DevTools/karma-host-environment.git`

2. __Install dependencies__<br>
`npm install`

3. __Link the module to itself__ (so Karma can find the plugin)<br>
`npm link`<br>
`npm link karma-host-environment`

4. __Run the tests__<br>
`npm test`



License
--------------------------
karma-host-environment is 100% free and open-source, under the [MIT license](LICENSE). Use it however you want.



Big Thanks To
--------------------------
Thanks to these awesome companies for their support of Open Source developers ❤

[![Travis CI](https://jsdevtools.org/img/badges/travis-ci.svg)](https://travis-ci.com)
[![SauceLabs](https://jsdevtools.org/img/badges/sauce-labs.svg)](https://saucelabs.com)
[![Coveralls](https://jsdevtools.org/img/badges/coveralls.svg)](https://coveralls.io)
