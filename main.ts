import { mkdirSync, writeFileSync } from "node:fs";

// One funny line, written to the absolute output path the grader reads.
// The joke stands on its own: the setup and the punchline are the same line,
// and the guard-dog twist is the part that lands.
const LINE =
  "My password manager locked me out for forgetting its password — I hired a guard dog that only bites me.";

// The gate accepts 1–200 characters only; fail loudly instead of
// shipping a line the judge never sees.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
