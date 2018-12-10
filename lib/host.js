"use strict";

module.exports = Host;

/**
 * Returns a Host insance with the given properties.
 *
 * @param {object} props - The host environment properties
 * @class
 */
function Host (props) {
  clone(this, props);
}

/**
 * Safely serializes a Host object as JSON.
 *
 * @returns {object}
 */
Host.prototype.toJSON = function () {
  var json = clone({}, this);

  // The global object can't be serialized to JSON because it has circular references.
  // So call just serialize its toString() representation instead
  json.global = Object.prototype.toString.call(json.global);

  return json;
};

/**
 * Copies the properties of one object to another.
 *
 * @param {object} target - The object that the properties are copied to
 * @param {object} source - The object that the properties are copied from
 * @returns {object} - Returns the target object
 */
function clone (target, source) {
  var keys = Object.keys(source);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    target[key] = source[key];
  }

  return target;
}
