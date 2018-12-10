(function () {
  "use strict";

  if (host.browser) {
    // Expose Chai.expect as a global function
    window.expect = chai.expect;
  }
  else {
    // Expose Chai.expect as a global function
    global.expect = require("chai").expect;
  }

}());
