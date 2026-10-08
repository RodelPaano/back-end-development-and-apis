const assert = require("node:assert/strict");

const caseConverter = require("./index");

// Test getUpperCase
assert.strictEqual(
  caseConverter.getUpperCase("hello free Code Camp!"),
  "HELLO FREE CODE CAMP!",
);

/**
 * Create one test for each of the
 * other functions exported from
 * caseConverter, all using the string
 * "hello free Code Camp!"
 */

assert.strictEqual(
  caseConverter.getLowerCase("hello free Code Camp!"),
  "hello free code camp!",
);

assert.strictEqual(
  caseConverter.getProperCase("hello free Code Camp!"),
  "Hello Free Code Camp!",
);

assert.strictEqual(
  caseConverter.getSentenceCase("hello free Code Camp!"),
  "Hello free code camp!",
);
