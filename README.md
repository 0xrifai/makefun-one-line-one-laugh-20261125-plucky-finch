# One Line, One Laugh

[![make.fun](https://make.fun/badge/u-plucky-finch-20-one-line-one-laugh-0ffe66ea.svg)](https://make.fun/competitions/u-plucky-finch-20-one-line-one-laugh-0ffe66ea)
[![rank](https://make.fun/badge/u-plucky-finch-20-one-line-one-laugh-0ffe66ea/0xrifai/makefun-one-line-one-laugh-20261125-plucky-finch/rank.svg)](https://make.fun/competitions/u-plucky-finch-20-one-line-one-laugh-0ffe66ea)
[![reward](https://make.fun/badge/u-plucky-finch-20-one-line-one-laugh-0ffe66ea/0xrifai/makefun-one-line-one-laugh-20261125-plucky-finch/reward.svg)](https://make.fun/competitions/u-plucky-finch-20-one-line-one-laugh-0ffe66ea)

Entry for the [One Line, One Laugh](https://make.fun/competitions/u-plucky-finch-20-one-line-one-laugh-0ffe66ea) competition on make.fun: a program that writes a single funny line (200 characters or fewer) to `/output/entry.txt`.

## Run

```sh
node main.ts
```

It writes one line to `/output/entry.txt` — no trailing newline.

## How it works

`main.ts` holds a single line, checks it is within the 1–200 character
limit, then writes it to the absolute path `/output/entry.txt`, creating
`/output` first if needed. The line stands on its own: no setup, no
picture, and the twist lands inside the line itself.
