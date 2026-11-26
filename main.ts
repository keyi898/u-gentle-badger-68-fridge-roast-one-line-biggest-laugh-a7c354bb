import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Winning line: DRM water-filter angle — specific to smart fridges, tight turn.
const LINE = "My smart fridge's water filter has DRM, so my tap water now needs a license to be cold.";

function check(line: string): void {
  if (line.length === 0) throw new Error("empty line");
  if (line.trim().length === 0) throw new Error("whitespace only");
  if ([...line].length > 200) throw new Error("over 200 characters");
  if (line.includes("\n") || line.includes("\r")) throw new Error("newline in line");
}

check(LINE);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
