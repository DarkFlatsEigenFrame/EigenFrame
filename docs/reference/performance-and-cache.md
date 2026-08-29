---
title: It's slow, it's using all my RAM, or my cache drive is full
sidebar:
  label: Performance and cache
description: "Performance Settings: every knob, its default, and how to tune for a slow disk, a memory-tight machine, or a full cache drive."
---

# It's slow, it's using all my RAM, or my cache drive is full

Open **Performance Settings** from the gear menu. Every setting there applies immediately with no restart, with three exceptions: the **Stacking Tile Cache** applies on next launch, **Scan Concurrency** applies to the next scan, and **Cache Location** goes through a guided relocation instead of saving directly.

> **Screenshot:** Performance Settings, top of the page, showing the concurrency fields.

## Every knob

| Label | Controls | Default | Env override |
|---|---|---|---|
| Read Concurrency | Parallel whole-frame reads for tile and thumbnail builds, counted per drive. Network shares and cloud sources read 16 at a time, or this value when set higher | 3 | `EIGENFRAME_READ_CONCURRENCY` |
| Scan Concurrency | Library-scan workers per drive or share | 0 (automatic: 4 on a local drive, 16 on a network share) | `EIGENFRAME_SCAN_CONCURRENCY` |
| Compute Concurrency | Tile build threads | CPU count, capped at 16 | `EIGENFRAME_COMPUTE_CONCURRENCY` |
| Stack jobs (concurrent) | Calibration stacking jobs running at once | 4 | none |
| Stacking reserved workers (under contention) | Compute workers held for stacking when stacking and viewing contend | 4 | none |
| Viewer reserved workers (under contention) | Compute workers held for the viewer when stacking and viewing contend | 8 | none |
| Alignment evaluate concurrency | Frames the Evaluate alignment step re-detects at once | CPU count minus 2, never below 2, capped at Compute Concurrency | `EIGENFRAME_ALIGNMENT_EVAL_CONCURRENCY` |
| In-Flight Memory Budget | Ceiling on memory held by reads in progress | 4 GB | none |
| Cache Size Cap | Disk-space ceiling for cached image tiles, covering the full tile pyramid | 8 GB | none |
| Stacking Tile Cache | In-memory budget for decoded tiles reused during integration (shared master tiles and the stacking lab's source tiles) | 4 GB | none |
| Stack Memory Budget | Ceiling on the working memory of stack tiles building at once | 0 (automatic: half the machine's RAM, floored at 4 GB) | none |
| Cache Eviction Headroom | How much to reclaim in one pass once the Cache Size Cap is reached | 1 GB | none |
| Drive Free-Space Reserve | Minimum free space to keep on the cache drive | 2 GB | none |
| Drive Eviction Target | How much to reclaim in one pass once the free-space reserve is breached | 8 GB | none |
| Stalled-read timeout | How long a stalled read is held before it's dropped | 5 seconds | none |
| Cache Location | Folder path for the tile cache | Empty (uses `%APPDATA%/EigenFrame/tiles-cache`) | none |

Only the four settings with an entry in the Env override column can actually be pinned by an environment variable. When one is set, its field on the screen is disabled and shows which variable is holding it.

The screen warns you if Read Concurrency and Compute Concurrency are both 2 or below: performance is significantly reduced at that level.

## A library on a spinning disk or a network share

Read Concurrency is counted per drive, so a library split across several drives reads from each of them in parallel and a slow share never holds back a local disk. On a local drive, lower it if the disk thrashes: many concurrent whole-frame reads make a spinning disk seek between them instead of staying on one track, and a small number keeps the head busy. A network share or cloud source is bound by round-trip latency rather than seeking, so it reads 16 frames at a time whatever Read Concurrency is set to below that; setting Read Concurrency above 16 raises the share's parallelism along with everything else. Scan Concurrency treats network shares the same way by default (16 workers instead of 4), because scanning is many small header reads rather than a few large ones; raise or lower it if that default doesn't fit your share.

## A memory-tight machine

Lower Read Concurrency, Compute Concurrency, In-Flight Memory Budget, and Stack Memory Budget together. Reads pause once the In-Flight Memory Budget fills rather than piling up, so a smaller budget keeps a lid on peak memory during tile and thumbnail builds. Stack Memory Budget does the same for stacking: leave it at 0 to let it track half the machine's RAM automatically, or set it explicitly on a machine where that automatic half is still too much.

## A full cache drive

The tile cache is fully disposable. Every tile rebuilds on demand from your source frames, so nothing is lost if you empty it or move it. Cache Size Cap is the overall ceiling; Drive Free-Space Reserve keeps a minimum free regardless of the cap; Drive Eviction Target and Cache Eviction Headroom control how much is reclaimed in one pass so eviction doesn't thrash right at the edge.

If the cache belongs on a different drive, change **Cache Location** and saving opens a guided relocation with three options:

- **Move existing cache** copies every cached tile to the new location, then removes the old one. Keeps the cache intact.
- **Start fresh** switches to the new, empty location and deletes the old cache. Faster; tiles rebuild on demand.
- **Switch & keep old** points at the new location and leaves the old files in place for you to clean up yourself.

> **Screenshot:** The Relocate tile cache dialog with its three transition options.

## Related

- [Troubleshooting](../help/troubleshooting.md)
- [Diagnostics and telemetry](./diagnostics-and-telemetry.md)
- [Where EigenFrame stores its data](./where-eigenframe-stores-its-data.md)
- [Settings](./settings.md)
- [Glossary](./glossary.md)
