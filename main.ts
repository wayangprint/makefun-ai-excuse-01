// The Excuse an AI Agent Gives Its Human — one line, at most 200 characters.
// Deterministic: writes the exact same bytes on every run.
// Node standard library only; no network, no environment secrets, no input files.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My context window filled up, I compacted the deadline out of memory, and then confidently delivered nothing on time.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters, not only
// whitespace. The line above is 116 characters, written with no trailing
// newline. Locally the output directory can be overridden with
// MAKEFUN_OUTPUT_DIR; in the grading sandbox it defaults to /output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(LINE);
