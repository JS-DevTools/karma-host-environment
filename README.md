Karma Host Environment
==============================

[![Build Status](https://api.travis-ci.com/JS-DevTools/karma-host-environment.svg?branch=master)](https://travis-ci.com/JS-DevTools/karma-host-environment)
[![Coverage Status](https://coveralls.io/repos/github/JS-DevTools/karma-host-environment/badge.svg?branch=master)](https://coveralls.io/github/JS-DevTools/karma-host-environment)

[![npm](https://img.shields.io/npm/v/karma-host-environment.svg)](https://www.npmjs.com/package/karma-host-environment)
[![Dependencies](https://david-dm.org/JS-DevTools/karma-host-environment.svg)](https://david-dm.org/JS-DevTools/karma-host-environment)
[![License](https://img.shields.io/npm/l/karma-host-environment.svg)](LICENSE)

[![OS and Browser Compatibility](https://jsdevtools.org/img/badges/ci-badges-with-ie.svg)](https://travis-ci.com/JS-DevTools/karma-host-environment)


Karma Host Environment lets you access host info like operating system, browser version, and even **environment variables** in your browser tests.



Example
--------------------------

```javascript
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
Install using [npm](https://docs.npmjs.com/about-npm/).  Be sure to install [karma](https://karma-runner.github.io/3.0/index.html) and [karma-cli](https://www.npmjs.com/package/karma-cli) too.

```bash
npm install karma karma-cli karma-host-environment
```



Usage
--------------------------
[Configure Karma](https://karma-runner.github.io/1.0/config/configuration-file.html) to use the `host-environment` framework plug-in:

**karma.conf.js**

```javascript
module.exports = function(config) {
  config.set({
    frameworks: ['host-environment'],
    ...
  });
};
```



API
--------------------------
Karma Host Environment uses [host-environment](https://jsdevtools.org/host-environment/) under the hood, so you have access to all the [same properties](https://jsdevtools.org/host-environment/#api).  The `host` object is exposed as a global variable, so you can access it anywhere.  Or, if you prefer, you can `import` or `require()` it from `"host-environment"`.

### `host` object

- [`host.global`](https://github.com/JS-DevTools/host-environment#hostglobal)
- [`host.os`](https://github.com/JS-DevTools/host-environment#hostos)
- [`host.env`](https://github.com/JS-DevTools/host-environment#hostenv)
- [`host.node`](https://github.com/JS-DevTools/host-environment#hostnode)
- [`host.browser`](https://github.com/JS-DevTools/host-environment#hostbrowser)


In addition, Karma Host Environment adds an additional property:

- `host.karma`<br>
  This property is `true` when running in Karma, or in a web page that is hosted by Karma.



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
