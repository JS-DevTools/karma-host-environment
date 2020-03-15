Karma Host Environment
==============================

[![npm](https://img.shields.io/npm/v/@jsdevtools/karma-host-environment.svg)](https://www.npmjs.com/package/@jsdevtools/karma-host-environment)
[![License](https://img.shields.io/npm/l/@jsdevtools/karma-host-environment.svg)](LICENSE)
[![Buy us a tree](https://img.shields.io/badge/Treeware-%F0%9F%8C%B3-lightgreen)](https://plant.treeware.earth/JS-DevTools/karma-host-environment)

[![Build Status](https://github.com/JS-DevTools/karma-host-environment/workflows/CI-CD/badge.svg)](https://github.com/JS-DevTools/karma-host-environment/blob/master/.github/workflows/CI-CD.yaml)
[![Coverage Status](https://coveralls.io/repos/github/JS-DevTools/karma-host-environment/badge.svg?branch=master)](https://coveralls.io/github/JS-DevTools/karma-host-environment)
[![Dependencies](https://david-dm.org/JS-DevTools/karma-host-environment.svg)](https://david-dm.org/JS-DevTools/karma-host-environment)

[![OS and Browser Compatibility](https://jstools.dev/img/badges/ci-badges-with-ie.svg)](https://github.com/JS-DevTools/karma-host-environment/blob/master/.github/workflows/CI-CD.yaml)


[**Host Environment**](https://jstools.dev/host-environment/) is a library that makes it easy to detect whether your code is running in Node.js or a web browser, Windows or Mac, Internet Explorer or Chrome, etc.

**Karma Host Environment** is a companion to Host Environment, specifically for the [Karma test runner](https://karma-runner.github.io/3.0/index.html).  It allows you to detect not only the browser that your tests are running in, but also information about the host server, such as the operating system, Node.js version, and even environment variables.



Example
--------------------------

```javascript
import host from "@jsdevtools/host-environment";

if (host.ci) {
  // Setup CI/CD test fixtures
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
- [karma-config](https://jstools.dev/karma-config)<br>
  Karma configuration builder with sensible defaults to minimize boilerplate

- [host-environment](https://jstools.dev/host-environment)<br>
  Easily detect what host environment your code is running in



Installation
--------------------------
Use [npm](https://docs.npmjs.com/about-npm/) or [yarn](https://yarnpkg.com) to install `@jsdevtools/host-environment` **and** `@jsdevtools/karma-host-environment` as development dependencies:

```bash
npm install --save-dev @jsdevtools/host-environment @jsdevtools/karma-host-environment
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
Import [host-environment](https://jstools.dev/host-environment/) as you normally would:

```javascript
import host from "@jsdevtools/host-environment";
```

### The `host` object
You can use [all of the `host` properties](https://jstools.dev/host-environment/#api) as usual:

- [`host.global`](https://github.com/JS-DevTools/host-environment#hostglobal)
- [`host.os`](https://github.com/JS-DevTools/host-environment#hostos)
- [`host.env`](https://github.com/JS-DevTools/host-environment#hostenv)
- [`host.node`](https://github.com/JS-DevTools/host-environment#hostnode)
- [`host.browser`](https://github.com/JS-DevTools/host-environment#hostbrowser)

### The `host.env` property
Normally the `host.env` property would be an empty object when running in a web browser, since web browsers don't have access to environment variables.  But Karma Host Environment exposes the host server's environment variables, so you can use `host.env` just as you would if you were running in Node.js:

```javascript
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
Karma Host Environment is 100% free and open-source, under the [MIT license](LICENSE). Use it however you want.

This package is [Treeware](http://treeware.earth). If you use it in production, then we ask that you [**buy the world a tree**](https://plant.treeware.earth/JS-DevTools/karma-host-environment) to thank us for our work. By contributing to the Treeware forest you’ll be creating employment for local families and restoring wildlife habitats.



Big Thanks To
--------------------------
Thanks to these awesome companies for their support of Open Source developers ❤

[![Travis CI](https://jstools.dev/img/badges/travis-ci.svg)](https://travis-ci.com)
[![SauceLabs](https://jstools.dev/img/badges/sauce-labs.svg)](https://saucelabs.com)
[![Coveralls](https://jstools.dev/img/badges/coveralls.svg)](https://coveralls.io)
