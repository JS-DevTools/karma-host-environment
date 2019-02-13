"use strict";

const { expect } = require("chai");

describe("window.host", function () {

  it("host should be defined", function () {
    expect(typeof host).to.equal("object");
    expect(window.host).to.be.an("object");
  });

  it("host.karma should be defined", function () {
    expect(window.host).to.have.property("karma");
    expect(window.host.karma).to.be.an("object");
  });

  it("host.karma should be a Host object", function () {
    expect(window.host.karma).to.have.all.keys("global", "os", "env", "node", "browser");
    expect(window.host.karma.global).to.be.an("object").and.not.empty;
    expect(window.host.karma.os).to.be.an("object").with.keys("windows", "mac", "linux");
    expect(window.host.karma.env).to.be.an("object").and.not.empty;
    expect(window.host.karma.node).to.be.an("object").and.not.empty;
    expect(window.host.karma.browser).to.equal(false);
  });

  it("host.env should be defined", function () {
    expect(window.host).to.have.property("env");
    expect(window.host.env).to.be.an("object");
  });

  it("host.env should contain environment variables", function () {
    expect(window.host.env).not.to.be.empty;
    expect(window.host.env).to.deep.equal(window.host.karma.env);

    for (let key of Object.keys(window.host.env)) {
      let value = window.host.env[key];
      expect(key).to.be.a("string").with.length.above(0);
      expect(value).to.be.a("string");
    }
  });

  it("host should not have any other properties", function () {
    expect(window.host).to.have.all.keys("karma", "env");
  });

});
