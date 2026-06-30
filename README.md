# Published portfolios

Public hosting for 8th Light **personal** portfolios, served via GitHub Pages.

This repo holds **generated output only**. Do not hand-edit. The source tooling, the case-study
records, and the design system live in the private repo
[`agustin-8thLight/portfolio-system`](https://github.com/agustin-8thLight/portfolio-system),
which is where all real work happens (see its `HANDOFF.md`).

## Why this repo exists

GitHub Pages can't publish from a private repo on a free plan. The personal portfolio is
public-by-design (indexable, anonymized work only), so its built output lives here in public while the
tooling and records stay private. Client cuts are **not** hosted here, by design. Those are unlisted,
`noindex`, per-prospect, and served from Cloudflare.

## What's here

Each subfolder is one designer's published personal portfolio, named by slug:

- `marcus-bell/` — the demo persona (fictional, fully anonymized). Proof of the pipeline, not a real person.

## How output gets here

Built in the private repo, then synced and pushed here:

```bash
# in the private repo
cd demo && node ../.claude/skills/build-case-study/publish/build.mjs site.json
# copy out/<slug> into a clone of this repo, commit, push
```

Pages serves it at `https://agustin-8thlight.github.io/portfolio/<slug>/`.
