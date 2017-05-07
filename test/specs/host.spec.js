(function () {
  'use strict';

  describe('host object', function () {

    it('host global should be defined', function () {
      expect(typeof host).to.equal('object');
    });

    it('host.node should be defined', function () {
      expect(host).to.have.property('node');
    });

    it('host.karma should be defined', function () {
      expect(host).to.have.property('karma');
    });

    it('host.os should be defined', function () {
      expect(host).to.have.property('os');
      expect(host.os).to.be.an('object');
      expect(host.os).to.have.all.keys(['windows', 'mac', 'linux']);
    });

    it('host.browser should be defined', function () {
      expect(host).to.have.property('browser');
    });

    it('host.env should be defined', function () {
      expect(host).to.have.property('env');
      expect(host.env).to.be.an('object');
    });

    it('host should not have any other properties', function () {
      expect(host).to.have.all.keys(['node', 'karma', 'os', 'browser', 'env']);
    });

  });

}());
