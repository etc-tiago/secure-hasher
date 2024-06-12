import assert from "node:assert";
import { test } from "node:test";
import { generateHash } from "./index.js";

test("generateHash should generate a hash of the specified length", () => {
	const hash = generateHash(16);
	assert.strictEqual(hash.replace(/-/g, "").length, 16);
});

test("generateHash should generate a hash with hyphen separators", () => {
	const hash = generateHash(16);
	assert.match(hash, /^[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}$/);
});

test("generateHash should generate unique hashes", () => {
	const hash1 = generateHash(16);
	const hash2 = generateHash(16);
	assert.notStrictEqual(hash1, hash2);
});

test("generateHash should generate a hash with the correct length when a custom length is provided", () => {
	const length = 12;
	const hash = generateHash(length);
	assert.strictEqual(hash.replace(/-/g, "").length, length);
});
