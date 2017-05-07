(function () {
  'use strict';

  describe('Environment variables', function () {

    it('host.env should be an object', function () {
      expect(host.env).to.be.an('object');
    });

    it('all keys should be valid environment variable names', function () {
      var keys = Object.keys(host.env);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        expect(key).to.match(/^\w+$/);
      }
    });

    it('all values should be strings', function () {
      var keys = Object.keys(host.env);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var value = host.env[key];
        expect(value).to.be.a('string');
      }
    });

  });

}());
