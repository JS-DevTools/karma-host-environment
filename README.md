Karma Host Environment
------------------------------

[![Build Status](https://api.travis-ci.com/JS-DevTools/karma-host-environment.svg?branch=master)](https://travis-ci.com/JS-DevTools/karma-host-environment)
[![Coverage Status](https://coveralls.io/repos/github/JS-DevTools/karma-host-environment/badge.svg?branch=master)](https://coveralls.io/github/JS-DevTools/karma-host-environment)

[![npm](https://img.shields.io/npm/v/karma-host-environment.svg)](https://www.npmjs.com/package/karma-host-environment)
[![Dependencies](https://david-dm.org/JS-DevTools/karma-host-environment.svg)](https://david-dm.org/JS-DevTools/karma-host-environment)
[![License](https://img.shields.io/npm/l/karma-host-environment.svg)](LICENSE)

[![OS and Browser Compatibility](https://jsdevtools.org/img/badges/ci-badges-with-ie.svg)](https://travis-ci.com/JS-DevTools/karma-host-environment)


When writing [universal JavaScript](https://medium.com/@mjackson/universal-javascript-4761051b7ae9), it's desirable to also write universal tests, so you can easily test your code in all of the different environments that you support.  But inevitably, some functionality of your library will differ based on whether you're running in Node.js or a web browser, or based on which operating system or browser your code is running in.  So you need to write conditional code in your tests, based on the host environment.

`karma-host-environment` makes it easy to write that conditional code.  And it's a universal JavaScript module, so you can use it with _any_ test framework or environment, including [Karma](https://karma-runner.github.io), [Mocha](https://mochajs.org/), [Tape](https://github.com/substack/tape), [QUnit](https://qunitjs.com/), etc.  The [Karma plug-in](https://karma-runner.github.io/1.0/config/plugins.html) even allows you to access **environment variables** in your browser tests!


Usage
--------------------------
When `karma-host-environment` loads, it defines a global object called `host` with properties that describe the host environment. Any properties that don't apply (such as the `host.browser` property when running in Node.js) are `false`.  Any properties that _do_ apply are an object with additional properties about that environment.  This allows you to write simple conditional checks that take advantage of the "truthy" and "falsy" behavior of JavaScript:

```javascript
if (host.browser && host.browser.IE && host.browser.IE.v8) {
  // Test specific behavior for Internet Explorer 8
}
else if (host.browser) {
  // Test default web browser behavior
}
else {
  // Test Node.js behavior
}
```


`host` Properties
--------------------------
To check the values of the `host` object for your current browser, **[click here](https://jsdevtools.org/karma-host-environment/test/)**.

### `host.global`
When running in a web browser, `host.global` is a reference to the `window` object.  When running in Node.js, it's a reference to the `global` object.

### `host.node`
This property is `false` when running in a web browser (including Karma).  When running in Node.js (e.g. Mocha, Tape, etc.) it is an object with the following structure:

```javascript
{
  v7: true,             // The major version, as a boolean
  version: 7.3,         // The major.minor version, as a float
  majorVersion: 7,      // The major version, as an integer
  minorVersion: 3,      // The minor version, as an integer
  patchVersion: 24      // The patch version, as an integer
}
```

### `host.karma`
This property is `true` when running in Karma, or in a web page that is hosted by Karma. Otherwise, it's `false`.

### `host.os`
This property is always an object with the following structure:

```javascript
{
  windows: false,       // Windows and Windows Phone
  mac: true,            // Mac OS and iOS
  linux: false          // Linux, Android, and other *nix platforms
}
```

> **Note:** Only _one_ of the properties will be `true`. All others are `false`.

### `host.browser`
This property is `false` when running in Node.js (including Mocha, Tape, etc). When running in a browser (e.g. QUnit, Karma, Mocha for web, etc.) it is an object with the following structure:

```javascript
{
  mobile: false,        // Any mobile browser on iOS, Android, or Windows Phone
  IE: false,            // Internet Explorer, Edge, XBox, and Windows Phone
  safari: false,        // Safari and Safari Mobile
  firefox: false,       // Firefox on desktop and Android
  chrome: {             // Chrome on desktop and Android
    v58: true,          // The major version, as a boolean
    version: 58.4,      // The major.minor version, as a float
    majorVersion: 58,   // The major version, as an integer
    minorVersion: 4,    // The minor version, as an integer
    patchVersion: 3029  // The patch version, as an integer
  },
}
```

> **Note:** Only _one_ of the browser properties will be an object. All others are `false`.

### `host.env`
This property is always an object.  When running in Node.js, it is set to [`process.env`](https://nodejs.org/api/process.html#process_process_env).  When running in a web browser, it is usually empty, since web browsers don't have access to environment variables.  But when running in Karma, the [Karma plug-in](https://karma-runner.github.io/1.0/config/plugins.html) works-around this limitation and allows you to access your environment variables in the browser.

```javascript
{
  TERM: 'xterm-256color',
  SHELL: '/usr/local/bin/bash',
  USER: 'maciej',
  PATH: '~/.bin/:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin',
  PWD: '/Users/maciej',
  EDITOR: 'vim',
  SHLVL: '1',
  HOME: '/Users/maciej',
  LOGNAME: 'maciej',
  _: '/usr/local/bin/node'
}
```


Installation
--------------------------
### Node.js test frameworks (Karma, Mocha, Tape, etc.)
Install using [npm](https://docs.npmjs.com/getting-started/what-is-npm):

```bash
npm install karma-host-environment
```

#### Karma
[Configure Karma](https://karma-runner.github.io/1.0/config/configuration-file.html) to use the `host-environment` framework plug-in:

```javascript
// karma.conf.js
module.exports = function(config) {
  config.set({
    frameworks: ['host-environment'],
  });
};
```

#### Mocha
Use the [`--require` option](https://mochajs.org/#usage) to load `karma-host-environment`:

```bash
mocha --require karma-host-environment
```

Or add it to your [`mocha.opts` file](https://mochajs.org/#mochaopts):

```
--require karma-host-environment
--reporter dot
```

#### Others
Just use `require` to load `karma-host-environment` in your test script:

```javascript
require('karma-host-environment');
console.log(host.node.version);
```


### Browser test frameworks (QUnit, Mocha, etc.)
Reference [`karma-host-environment.js`](dist/karma-host-environment.js) or [`karma-host-environment.min.js`](dist/karma-host-environment.min.js) in your HTML test page:

```html
<script src="https://cdn.rawgit.com/JS-DevTools/karma-host-environment/master/dist/karma-host-environment.js"></script>
<script>
    console.log(host.browser);
</script>
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

3. __Link the module to itself__ (so Mocha and Karma can find the plugin)<br>
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
