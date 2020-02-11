import { Host } from "@jsdevtools/host-environment";

/**
 * Extends the Host interface with information about the Karma server.
 */
export interface KarmaHost extends Host {
  /**
   * If running in a web browser being served by Karma, then this property is
   * the `Host` object of the Karma server.  This allows you to access things like
   * the server's OS, Node version, etc.
   */
  karma?: Host;
}
