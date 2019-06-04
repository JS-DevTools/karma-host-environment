// tslint:disable: no-default-export
import { karmaPlugin } from "./karma-plugin";

export { KarmaHost } from "./karma-host";

// Export the Karma plugin
export default {
  "framework:host-environment": ["factory", karmaPlugin],
};

// CommonJS default export hack
if (typeof module === "object" && typeof module.exports === "object") {
  module.exports = Object.assign(module.exports.default, module.exports);  // tslint:disable-line: no-unsafe-any
}
