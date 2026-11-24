// Seventeen Syllables of Debugging — make.fun entry
// One haiku about debugging, 5-7-5, written deterministically.
// The program writes exactly this text to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const HAIKU = [
  "it worked yesterday", // it(1) worked(1) yes-ter-day(3) = 5
  "nothing changed, I swear it did", // noth-ing(2) changed(1) I(1) swear(1) it(1) did(1) = 7
  "git says otherwise", // git(1) says(1) oth-er-wise(3) = 5
].join("\n");

// Guard: the entry must stay inside the gate (1-200 chars, not blank).
if (HAIKU.length < 1 || HAIKU.length > 200 || HAIKU.trim().length === 0) {
  throw new Error(`haiku out of gate: ${HAIKU.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", HAIKU, "utf8");
