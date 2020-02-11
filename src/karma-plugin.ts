import * as fs from "fs";
import { FilePattern } from "karma";
import * as temp from "temp";
import { hostToPOJO } from "./host-to-pojo";

// Dependency injection for Karma
karmaPlugin.$inject = ["config.files"];

/**
 * Configures Karma to serve a JavaScript file that exposes the `host` global variable.
 */
export function karmaPlugin(files: FilePattern[]) {
  // Create a copy of the `host` object that's safe to serialize as JSON
  let hostPOJO = hostToPOJO();

  // Build a script that exposes a global `host` object in the browser.
  // The host-environment library automatically checks for a global `host` object,
  // calls its toJSON() method, and merges the results with itself.
  let script = `
    (function () {
      window.host = {
        karma: ${JSON.stringify(hostPOJO, undefined, 2)},
        env: ${JSON.stringify(hostPOJO.env, undefined, 2)}
      };
    }());`;

  // Save the JavaScript file as a temp file
  temp.track();
  let file = temp.openSync({ prefix: "karma-host-environment-", suffix: ".js" });
  fs.writeSync(file.fd, script);
  fs.closeSync(file.fd);

  // Inject the JavaScript file into Karma's file list
  files.unshift({
    pattern: file.path,
    included: true,
    served: true,
    watched: false,
  });
}
