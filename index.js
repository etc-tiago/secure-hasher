import { randomBytes } from "node:crypto";

export function generateHash(length = 16) {
	const bytes = randomBytes(Math.ceil(length / 2));
	const hash = bytes.toString("hex").slice(0, length);
	return hash.match(/.{1,4}/g)?.join("-") ?? hash;
}
