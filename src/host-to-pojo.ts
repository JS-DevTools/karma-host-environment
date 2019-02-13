import host from "host-environment";

type POJO = Record<string, unknown>;

/**
 * Returns a copy of the `host` object as a POJO (plain old JavaScript object)
 * that's safe to serialize as JSON.
 */
export function hostToPOJO(): POJO {
  let pojo = host.toJSON() as POJO;
  pojo.global = sanitize(global, 2);
  return pojo;
}


/**
 * Returns a sanitized value that is safe to serialize as JSON.
 */
function sanitize(value: unknown, depth: number): unknown {
  if (typeof value !== "object" || value === null) {
    return value;
  }

  if (Array.isArray(value)) {
    if (depth) {
      return value.map((item: unknown) => sanitize(item, depth - 1));
    }
    else {
      return [];
    }
  }

  if (depth) {
    let clone: POJO = {};
    for (let key of Object.keys(value as POJO)) {
      clone[key] = sanitize((value as POJO)[key], depth - 1);
    }
    return clone;
  }
  else {
    return {};
  }
}
