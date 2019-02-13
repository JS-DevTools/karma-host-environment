// tslint:disable: no-default-export
import { karmaPlugin } from "./karma-plugin";

export { KarmaHost } from "./karma-host";

// Export the Karma plugin
export default {
  "framework:host-environment": ["factory", karmaPlugin],
};

// CommonJS default export hack
// tslint:disable: no-unsafe-any
if (typeof module === "object" && typeof exports === "object") {
  module.exports = exports.default;
  Object.assign(module.exports, exports);
}
