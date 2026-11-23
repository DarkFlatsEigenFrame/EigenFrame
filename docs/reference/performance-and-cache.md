---
title: It's slow, it's using all my RAM, or my cache drive is full
sidebar:
  label: Performance and cache
description: "Performance Settings: every knob, its default, and how to tune for a slow disk, a memory-tight machine, or a full cache drive."
---

# It's slow, it's using all my RAM, or my cache drive is full

Open **Performance Settings** from the gear menu. Every setting there applies immediately with no restart, with four exceptions: the **Stacking Tile Cache** applies on next launch, **Scan Concurrency** applies to the next scan, **Cache Location** goes through a guided relocation instead of saving directly, and **Prepared data location** changes only through its **Move** button.

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
| Prepared data location | Folder holding thumbnails, star catalogs and flat analysis | EigenFrame's own folder | none |
| Pause background preparation below | Free space on the drive holding prepared data below which background preparation pauses | 10 GB | none |

Only the four settings with an entry in the Env override column can actually be pinned by an environment variable. When one is set, its field on the screen is disabled and shows which variable is holding it.

The screen warns you if Read Concurrency and Compute Concurrency are both 2 or below: performance is significantly reduced at that level.

## Have last night's frames ready when you sit down

**Prepare new frames in the background**, under **Background preparation** in Performance Settings, is off by default. Turn it on and leave EigenFrame open while you image. Each frame that arrives in a library folder gets its thumbnail, statistics and star detection as soon as EigenFrame sees it, and each flat gets its surface analysis. When you open the night, its thumbnails paint at once, star counts and FWHM are already on the filter tab, and the flats page reads its verdicts without analyzing the frames again. Turning the setting on also prepares any master that has no thumbnail yet.

This work runs at the lowest priority: anything you open, and any stack you run, goes first. While frames are being prepared, the Activity tray shows a **Preparing new frames** row, which disappears when the work is done.

Prepared data takes roughly 1.3 MB per light and 0.5 MB per flat. It lives in EigenFrame's own folder on your system drive unless you move it (see below). Under the setting, the screen shows how much prepared data there is, the drive and folder it is on, and how much space is free on that drive. Preparation pauses when free space falls below **Pause background preparation below**, 10 GB by default, and resumes once 2 GB more is free. While it is paused the tray row reads **paused, low disk space**, and anything you open yourself is still prepared.

> **Screenshot:** Performance Settings, the Background preparation section with the toggle on and the prepared-data line.

## Prepared data on a nearly full system drive

Thumbnails, star catalogs and flat analysis are kept, not cached: they are never evicted, and rebuilding them means reading every frame again. If they belong on a roomier drive, type a folder into **Prepared data location** and press **Move**. EigenFrame copies the prepared data to the new folder, then removes the old copy; the library database and your settings stay where they are. A progress bar shows the copy, and **Cancel move** leaves everything where it was. EigenFrame keeps working during the copy, and thumbnails pause for a moment at the end while it switches over.

The move is refused if the folder already holds prepared data or its drive lacks room for the copy. If EigenFrame closes during a move, the next start either finishes it or undoes it, so the prepared data is always in one place. Leave the field blank and press **Move** to bring the prepared data back to EigenFrame's own folder.

If the drive holding the prepared data is missing when EigenFrame starts, EigenFrame uses its own folder for that session and goes back to the chosen folder once the drive is there at the next start.

> **Screenshot:** The Move prepared data dialog, mid-copy.

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
