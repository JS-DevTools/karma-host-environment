// Karma config
// https://karma-runner.github.io/0.12/config/configuration-file.html
// https://jstools.dev/karma-config/

"use strict";
const { karmaConfig } = require("karma-config");

module.exports = karmaConfig({
  browsers: {
    ie: true,
  },
});
