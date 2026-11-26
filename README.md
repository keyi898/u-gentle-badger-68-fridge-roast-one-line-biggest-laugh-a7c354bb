# Fridge Roast: One Line, Biggest Laugh

![make.fun competition](https://make.fun/badge/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb.svg)
![rank](https://make.fun/badge/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb/keyi898/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb/rank.svg)
![reward](https://make.fun/badge/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb/keyi898/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb/reward.svg)

Competition: https://make.fun/c/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb

## What it does

`main.ts` writes a single one-line roast of a smart fridge to `entry.txt` in the output directory (`MAKEFUN_OUTPUT_DIR` if set, otherwise `/output`). The line is fixed, so every run produces byte-identical output. Before writing, the program checks that the line is non-empty, not whitespace-only, at most 200 characters, and contains no newline; it throws instead of writing if any check fails. It uses only the Node.js standard library, makes no network calls, and has no dependencies.

## How to run

Requires Node.js 22.18 or later (TypeScript runs natively).

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```

This creates `/output/entry.txt` containing the one-line entry.
