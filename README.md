Karma Host Environment
------------------------------

[![Build Status](https://api.travis-ci.org/BigstickCarpet/karma-host-environment.svg)](https://travis-ci.org/BigstickCarpet/karma-host-environment)
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/github/bigstickcarpet/karma-host-environment?svg=true&failingText=Windows%20build%20failing&passingText=Windows%20build%20passing)](https://ci.appveyor.com/project/BigstickCarpet/karma-host-environment/branch/master)

[![Coverage Status](https://coveralls.io/repos/BigstickCarpet/karma-host-environment/badge.svg?branch=master&service=github)](https://coveralls.io/r/BigstickCarpet/karma-host-environment)
[![Codacy Score](https://api.codacy.com/project/badge/Grade/55226dbb01134c88b313182318147c66)](https://www.codacy.com/public/jamesmessinger/karma-host-environment)
[![Inline docs](http://inch-ci.org/github/bigstickcarpet/karma-host-environment.svg?branch=master&style=shields)](http://inch-ci.org/github/bigstickcarpet/karma-host-environment)
[![Dependencies](https://david-dm.org/BigstickCarpet/karma-host-environment.svg)](https://david-dm.org/BigstickCarpet/karma-host-environment)

[![npm](http://img.shields.io/npm/v/karma-host-environment.svg)](https://www.npmjs.com/package/karma-host-environment)
[![Bower](http://img.shields.io/bower/v/karma-host-environment.svg)](#bower)
[![License](https://img.shields.io/npm/l/karma-host-environment.svg)](LICENSE)

[![Browser Compatibility](https://saucelabs.com/browser-matrix/karma-host.svg)](https://saucelabs.com/u/karma-host)


The Problem:
--------------------------
When writing [universal JavaScript](https://medium.com/@mjackson/universal-javascript-4761051b7ae9), it's desirable to also write universal tests, so you can easily test your code in all of the different environments that you support.  But inevitably, some functionality of your library will differ based on whether you're running in Node.js or a web browser, or based on which operating system or browser your code is running in.  So you need to write conditional code in your tests, based on the host environment.  But this code can get messy, since some global objects don't exist in all environments.

```javascript
//
// THE UGLY WAY TO DO IT 👎 😱
//
describe('my library', () => {
  it('behaves differently in Internet Explorer', () => {
    var isInternetExplorer = typeof navigator === 'object' &&
      (navigator.userAgent.indexOf('MSIE') !== -1 ||
       navigator.userAgent.indexOf('Edge') !== -1);

    if (isInternetExplorer) {
      // Test Internet Explorer behavior
    }
    else {
      // Test behavior for other browsers
    }
  }

  it('behaves differently on Linux', () => {
    if (typeof process === 'object' && process.platform === 'linux') {
      // Test Linux behavior
    }
    else {
      // Test behavior for other operating systems
    }
  }

  it('behaves differently based on an environment variable', () => {
    if (typeof process === 'object' && process.env.SOME_VARIABLE === 'true') {
      // Test conditional behavior
    }
    else if (typeof window === 'object') {
      // We're running in a web browser, so we can't check environment variables :(
    }
    else {
      // Test normabl behavior
    }
  }
});
```


The Solution:
--------------------------
`karma-host-environment` is a universal JavaScript module that works in Node.js, web browsers, mobile devices, Karma, Mocha, etc. and provides information about the host environment.  It even works as a [Karma plug-in](https://karma-runner.github.io/1.0/config/plugins.html) that allows you to access environment variables in your browser tests.

```javascript
//
// THE NICE WAY TO DO IT 👍 😎
//
describe('my library', () => {
  it('behaves differently in Internet Explorer', () => {
    if (host.browser.IE) {
      // Test Internet Explorer behavior
    }
    else {
      // Test behavior for other browsers
    }
  }

  it('behaves differently on Linux', () => {
    if (host.os.linux) {
      // Test Linux behavior
    }
    else {
      // Test behavior for other operating systems
    }
  }

  it('behaves differently based on an environment variable', () => {
    if (host.env.SOME_VARIABLE === 'true') {
      // Test conditional behavior, even in web browsers !!!
    }
    else {
      // Test normabl behavior
    }
  }
});
```


Installation & Usage
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
Install using [bower](http://bower.io/):

```bash
bower install karma-host-environment
```

Then reference [`karma-host-environment.js`](dist/karma-host-environment.js) or [`karma-host-environment.min.js`](dist/karma-host-environment.min.js) in your HTML test page:

```html
<script src="bower_components/karma-host-environment/dist/karma-host-environment.js"></script>
<script>
    console.log(host.browser);
</script>
```


Contributing
--------------------------
I welcome any contributions, enhancements, and bug-fixes.  [File an issue](https://github.com/BigstickCarpet/karma-host-environment/issues) on GitHub and [submit a pull request](https://github.com/BigstickCarpet/karma-host-environment/pulls).

#### Building
To build the project locally on your computer:

1. __Clone this repo__<br>
`git clone https://github.com/bigstickcarpet/karma-host-environment.git`

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

