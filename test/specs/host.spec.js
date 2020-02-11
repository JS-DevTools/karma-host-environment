"use strict";

const { host } = require("host-environment");
const { expect } = require("chai");

describe("host", function () {

  it("should have all of the host-environment fields", function () {
    expect(host).to.have.keys("global", "os", "env", "ci", "node", "browser", "karma", "merge", "toJSON");
    expect(host.global).to.equal(window);
    expect(host.os).to.be.an("object").with.keys("windows", "mac", "linux");
    expect(host.env).to.be.an("object").and.not.empty;
    expect(host.node).to.equal(false);
    expect(host.browser).to.be.an("object").with.keys("IE", "edge", "chrome", "firefox", "safari", "mobile");
    expect(host.merge).to.be.a("function");
    expect(host.toJSON).to.be.a("function");
  });

  it("should have the karma-host-environment fields too", function () {
    expect(host.karma).to.be.an("object").with.keys("global", "os", "env", "ci", "node", "browser");
    expect(host.karma).to.deep.equal(window.host.karma);
  });

  it("should have environment variables", function () {
    expect(host.env).not.to.be.empty;
    expect(host.env).to.deep.equal(host.karma.env);

    for (let key of Object.keys(host.env)) {
      let value = host.env[key];
      expect(key).to.be.a("string").with.length.above(0);
      expect(value).to.be.a("string");
    }
  });

});
