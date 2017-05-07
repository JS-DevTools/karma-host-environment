(function () {
  'use strict';

  if (host.browser) {
    // Configure Mocha for web browsers
    mocha.setup('bdd');
    mocha.fullTrace();
    mocha.checkLeaks();
    mocha.globals([]);
  }

}());
