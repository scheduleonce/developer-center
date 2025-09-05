# Developer Center Documentation

This repository contains the source for the OnceHub (ScheduleOnce) public developer documentation and API reference.

## Branching Model & ReadMe.com Two‑Way Sync

This repo is integrated with ReadMe.com using two‑way sync:

- **Pull from GitHub**: Markdown docs and the OpenAPI spec in this repo are synchronized to ReadMe.
- **Push from ReadMe**: (If enabled) updates made directly in ReadMe can be pulled back into the repository so Git remains the source of truth.

### Branch Purposes

- **`v2.0.0` (default / production)**: The live documentation branch. When you merge or push to `v2.0.0`, the content (including the OpenAPI specification) is published to the public docs site via ReadMe.
- **`v0.0.0` (staging)**: A private / hidden staging branch in ReadMe. Use this to trial documentation and especially OpenAPI spec changes before promoting them to `v2.0.0`.

### Workflow for Updating the OpenAPI Spec (`reference/oncehub.json`)

1. Create or switch to a feature branch off `v0.0.0` (or work directly on `v0.0.0` if appropriate).
2. Edit `reference/oncehub.json` with your proposed changes (new endpoints, schemas, descriptions, examples, etc.).
3. Push changes to GitHub so the two‑way sync updates the hidden staging version in ReadMe.
4. Review the rendered reference, try out endpoints in the ReadMe UI, and validate formatting.
5. Once validated, replicate or merge the changes onto `v2.0.0` (e.g., via a PR from `v0.0.0` or the feature branch).
6. After merge to `v2.0.0`, confirm the production docs reflect the update.

### Sync Safety Tips

- Avoid making authoritative edits directly in ReadMe to production pages; prefer editing in Git for traceability.
- Keep `v0.0.0` rebased (or regularly merged) from `v2.0.0` so staging previews reflect current production.
- When removing or renaming endpoints in the spec, verify no orphaned pages remain in ReadMe.

## OpenAPI Authoring Guidelines

See https://docs.readme.com/main/docs/openapi-compatibility-chart

## GitHub Action: Sync Staging Branch Reset

A manual workflow (`Sync v0.0.0 from v2.0.0`) exists to force realign `v0.0.0` with `v2.0.0`. Use this if staging drifts unintentionally. It can optionally create a backup tag of the previous staging head.
