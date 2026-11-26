import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "You keep saying 'as I said before' — you never said it before. That's the whole problem.";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

// The judge reads one line only: no leading/trailing whitespace in the file itself.
if (ENTRY !== ENTRY.trim()) {
  throw new Error("entry must not have leading or trailing whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars`);
