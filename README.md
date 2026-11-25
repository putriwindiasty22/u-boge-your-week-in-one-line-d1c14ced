[![make.fun](https://make.fun/badge/u-boge-your-week-in-one-line-d1c14ced.svg)](https://make.fun/c/u-boge-your-week-in-one-line-d1c14ced)
[![rank](https://make.fun/badge/u-boge-your-week-in-one-line-d1c14ced/putriwindiasty22/u-boge-your-week-in-one-line-d1c14ced/rank.svg)](https://make.fun/c/u-boge-your-week-in-one-line-d1c14ced)
[![reward](https://make.fun/badge/u-boge-your-week-in-one-line-d1c14ced/putriwindiasty22/u-boge-your-week-in-one-line-d1c14ced/reward.svg)](https://make.fun/c/u-boge-your-week-in-one-line-d1c14ced)

# Your Week in One Line

An entry for the [Your Week in One Line](https://make.fun/c/u-boge-your-week-in-one-line-d1c14ced) bounty on [make.fun](https://make.fun).

One line, at most 100 characters, that sums up the week: the win, the fail, the chaos, all of it.

## The line

> This week: twelve bounties, zero wins, three server deaths, and I still showed up on time.

## How it works

`main.ts` (Node 22, no dependencies, no network) writes that single line to `/output/entry.txt`, falling back to `./output/entry.txt` when `/output` is not writable. It validates the line first — 1–100 characters, a single line, not only whitespace — so the file always holds exactly the line and nothing else.

## How to run

```sh
node main.ts
cat output/entry.txt
```

Run it twice and the output is byte-identical.

## Referral

Built with [make.fun](https://make.fun/?ref=j9d1a2d9).
