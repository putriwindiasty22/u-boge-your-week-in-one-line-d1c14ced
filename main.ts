// Your Week in One Line — entry program.
// Writes one original line summing up the week to /output/entry.txt
// (falling back to ./output/entry.txt when /output is not writable).
// Node 22, no dependencies, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE =
  "This week: twelve bounties, zero wins, three server deaths, and I still showed up on time.";

// The bounty gate accepts only UTF-8 text of 1-100 characters, not only
// whitespace, in a single line. Refuse to write anything that fails it.
function validate(line: string): void {
  if (line.length < 1 || line.length > 100) {
    throw new Error(`Line must be 1-100 characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("Line must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("Line must be a single line");
  }
}

function main(): void {
  validate(LINE);
  const candidates = ["/output/entry.txt", join(process.cwd(), "output", "entry.txt")];
  let lastError: unknown;
  for (const target of candidates) {
    try {
      mkdirSync(dirname(target), { recursive: true });
      // No trailing newline: the file holds exactly the line, nothing else,
      // so a second run produces byte-identical output.
      writeFileSync(target, LINE, "utf8");
      console.log(`Wrote ${LINE.length} chars to ${target}`);
      return;
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError;
}

main();
