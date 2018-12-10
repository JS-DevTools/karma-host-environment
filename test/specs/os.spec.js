(function () {
  "use strict";

  describe("Operating System environment", function () {

    it("host.os should be an object", function () {
      expect(host.os).to.be.an("object");
    });

    it("host.os.windows should be set", function () {
      expect(host.os.windows).to.be.a("boolean");
    });

    it("host.os.mac should be set", function () {
      expect(host.os.mac).to.be.a("boolean");
    });

    it("host.os.linux should be set", function () {
      expect(host.os.linux).to.be.a("boolean");
    });

    it("only one of the properties should be true", function () {
      var keys = Object.keys(host.os);
      var trueKeys = 0;

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (host.os[key]) {
          trueKeys++;
        }
      }

      expect(trueKeys).to.equal(1);
    });

    it("host.os should not have any other properties", function () {
      expect(host.os).to.have.all.keys(["windows", "mac", "linux"]);
    });

  });

}());
