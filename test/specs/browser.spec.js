(function () {
  'use strict';

  describe('Browser environment', function () {
    if (typeof window === 'undefined') {

      it('host.browser should be false', function () {
        expect(host.browser).to.be.false;
      });

    }
    else {

      it('host.browser should be an object', function () {
        expect(host.browser).to.be.an('object');
      });

      it('only one of the properties should be an object', function () {
        var keys = Object.keys(host.browser);
        var objectKeys = 0;

        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          if (typeof host.browser[key] === 'object') {
            objectKeys++;
          }
        }

        expect(objectKeys).to.equal(1);
      });

      it('the other properties should be false', function () {
        var keys = Object.keys(host.browser);

        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          var value = host.browser[key];

          if (key !== 'mobile' && typeof value !== 'object') {
            expect(value).to.be.false;
          }
        }
      });

      it('browser.version should be set', function () {
        var browser = getCurrentBrowser();
        expect(browser.version).to.be.a('number').above(0);
      });

      it('browser.majorVersion should be set', function () {
        var browser = getCurrentBrowser();
        expect(browser.majorVersion).to.be.a('number').above(0);
      });

      it('browser.minorVersion should be set', function () {
        var browser = getCurrentBrowser();
        expect(browser.minorVersion).to.be.a('number');
      });

      it('browser.patchVersion should be set', function () {
        var browser = getCurrentBrowser();
        expect(browser.patchVersion).to.be.a('number');
      });

      it('host.browser.mobile should be set', function () {
        expect(host.browser.mobile).to.be.a('boolean');
      });

      it('host.browser should not have any other properties', function () {
        expect(host.browser).to.have.all.keys(['IE', 'chrome', 'firefox', 'safari', 'mobile']);
      });

    }
  });

  /**
   * Returns the one object key from host.browser.
   *
   * @returns {object}
   */
  function getCurrentBrowser () {
    var keys = Object.keys(host.browser);

    for (var i = 0; i < keys.length; i++) {
      var currentBrowser = host.browser[keys[i]];
      if (typeof currentBrowser === 'object') {
        return currentBrowser;
      }
    }
  }

}());
