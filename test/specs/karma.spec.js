(function () {
  "use strict";

  describe("Karma environment", function () {

    it("host.karma should be set", function () {
      expect(host.karma).to.be.a("boolean");
    });

    if (typeof window === "object") {
      if (typeof window.__karma__ === "object") {

        it("host.karma should be true", function () {
          expect(host.karma).to.be.true;
        });

      }
      else {

        it("host.karma should be false", function () {
          expect(host.karma).to.be.false;
        });

      }
    }
    else {
      if (/karma$/.test(process.argv[1])) {

        it("host.karma should be true", function () {
          expect(host.karma).to.be.true;
        });

      }
      else {

        it("host.karma should be false", function () {
          expect(host.karma).to.be.false;
        });

      }
    }
  });

}());
