(function () {
  'use strict';

  describe('Node.js environment', function () {
    if (typeof window === 'object') {

      it('host.node should be false', function () {
        expect(host.node).to.be.false;
      });

    }
    else {

      it('host.node should be an object', function () {
        expect(host.node).to.be.an('object');
      });

      it('host.node.version should be set', function () {
        expect(host.node.version).to.be.a('number').above(0);

        var expected = parseFloat(/^v(\d+\.\d+)\.\d+/.exec(process.version)[1]);
        expect(host.node.version).to.equal(expected);
      });

      it('host.node.majorVersion should be set', function () {
        expect(host.node.majorVersion).to.be.a('number');

        var expected = parseFloat(/^v(\d+)\.\d+\.\d+/.exec(process.version)[1]);
        expect(host.node.majorVersion).to.equal(expected);
      });

      it('host.node.minorVersion should be set', function () {
        expect(host.node.minorVersion).to.be.a('number');

        var expected = parseFloat(/^v\d+\.(\d+)\.\d+/.exec(process.version)[1]);
        expect(host.node.minorVersion).to.equal(expected);
      });

      it('host.node.patchVersion should be set', function () {
        expect(host.node.patchVersion).to.be.a('number');

        var expected = parseFloat(/^v\d+\.\d+\.(\d+)/.exec(process.version)[1]);
        expect(host.node.patchVersion).to.equal(expected);
      });

      it('host.node should not have any other properties', function () {
        expect(host.node).to.have.all.keys(['version', 'majorVersion', 'minorVersion', 'patchVersion']);
      });

    }
  });

}());
