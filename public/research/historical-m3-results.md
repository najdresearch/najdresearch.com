# HUMAIN M3 vs MiniMax M3: historical Najd study

Najd Research compared HUMAIN M3 and MiniMax M3 across 6,089 case IDs and 14 configurations per model. The latest preserved pre-audit snapshot contains one grade per case and configuration: 170,492 outputs in total. The results below use that snapshot, verified by its SHA-256 manifest and imported into Najd Arena.

| Model      | Acceptable grades | All outputs | Full-denominator score |
| ---------- | ----------------: | ----------: | ---------------------: |
| HUMAIN M3  |            56,202 |      85,246 |                 65.93% |
| MiniMax M3 |            54,969 |      85,246 |                 64.48% |

“Correct” and “possible correct” count as acceptable. All other outcomes, including technical failures, count as zero; every one of the 6,089 case IDs remains in the denominator for each configuration. The snapshot has 170,367 usable grades and 125 technical failures across both models. The score difference is 1.45 percentage points in this historical protocol.

## How to interpret this result

This experiment covers every **case ID** in the [published Najd Benchmark release](https://huggingface.co/datasets/najdresearch/najd-benchmark/tree/cb30c1c9e46c62f691380c3269885cdb8f22f52b), including the 372 cases now in its quarantine split. It does **not** reproduce the exact published case contents: the historical evidence differs from the release on 1,419 prompts and 1,422 expected-answer fields. The 372 quarantined cases also lack the certification of the 5,717-case canonical split. Treat this as an archived pre-audit comparison, not a certified Arena leaderboard ranking or a claim about an exact run of the current Hugging Face dataset.

The [earlier PDF report](https://drive.google.com/file/d/1sxxj3zvP82EGQzcmmki_dSLruzEsQVG8/view) describes an older snapshot with 168,440 usable grades, 144 pending grades, and 1,908 technical failures. Its headline percentages should not be mixed with the newer figures above. The PDF may require Drive access. Raw model answers and the historical source snapshot remain private.

## Reproduction and evidence

The Arena importer at `tui/scripts/seed_historical_m3.py` verifies the archived grade and evidence hashes, the pinned release-file hashes, all 6,089 case IDs, and 28 complete configurations before writing grades to PostgreSQL. The Arena page at `/historical/m3` calculates the scores from those imported rows. The private archived input directory and model answers are not published.

An exact-content comparison on the current Hugging Face release requires a new run after the quarantined cases have appropriate fixtures or repairs and a defined grading protocol. The live canonical runner currently uses the 5,717 certified cases.
