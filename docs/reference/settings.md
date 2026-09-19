---
title: What does every setting do, and what is its default?
sidebar:
  label: Settings
description: "Every adjustable setting in EigenFrame: library folders, the rig editor, performance, stack output templates, and diagnostics, with defaults and where each is explained."
---

# What does every setting do, and what is its default?

One row per setting, grouped by where it lives. Each links to the page that explains it in full; this page exists so a setting is never more than one lookup away.

## Library folder settings

Per folder, in **Manage Library**. See [library folders](../library/library-folders.md).

| Setting | Controls | Default |
|---|---|---|
| Include subdirectories | Whether the folder walks into its subfolders | On |
| Intake scope | Which detected categories (Frames, Masters) and subtypes (Lights, Flats, Darks, Bias) the folder contributes | Everything |
| Override (type) | Labels arriving files as a chosen type regardless of their header | None (uses the detected type) |
| Equipment group | Assigns arriving lights and flats to a chosen rig instead of auto-discovering one | Auto-discover |
| Import rules | An ordered list of path patterns that exclude files or force a type | None. See [import rules](../library/import-rules.md) |
| Exclude patterns | Full-path glob patterns skipped on scan | None |

## Per-rig settings

From the **Equipment** page rig editor. This list matches [rigs and equipment groups](../library/rigs-and-equipment-groups.md) exactly; that page is the fuller explanation of each one.

> **Screenshot:** The Equipment page rig editor scrolled to the alignment tolerances.

| Setting | Controls | Default |
|---|---|---|
| Rules | Attribute and value or range a frame must match to join this rig | None (a rig with no rules matches nothing) |
| Calibration match fields, bias | Which header fields a bias master must match on | Instrument, gain, offset, readout, X binning, Y binning |
| Calibration match fields, dark | Which header fields a dark master must match on | The bias default plus exposure and set temp |
| Dark frames | Whether an unassigned dark is flagged as missing calibration | Required |
| Flat frames | Whether an unassigned flat is flagged as missing calibration | Required |
| Dark set-temp tolerance | How close a dark's set temp must be to a light's for automatic selection | 7°C |
| Star detection | Candidate bounds, acceptance settings, and quality thresholds for star detection. See [star detection and frame quality](../inspect/star-detection-and-frame-quality.md) | Shipped defaults; quality thresholds blank means flagging is off |
| Alignment tolerances | Rotation and scale a fit may land in and still be plausible, and whether a 180° flip is allowed. See [when frames will not align](../stack/when-frames-will-not-align.md) | Rotation ± 5.0°, Scale ± about 2%, 180° flip allowed |
| Output pedestal (DN) | Baseline added to a stacked master so the stored image stays positive | 250 |
| Stack output paths | Per-frame-type filename template override for this rig | Blank (inherits the library default) |
| Integration presets | Saved stacking settings for this rig, reusable across its targets. See [stack presets](../stack/stack-presets.md) | None until you save one |

## Performance settings

From **Performance Settings** in the gear menu. Full guidance, including how to tune each one, is on [performance and cache](./performance-and-cache.md); this is the default for each knob.

| Setting | Default |
|---|---|
| Read Concurrency | 3 |
| Scan Concurrency | 0 (automatic: 4 on a local drive, 16 on a network share) |
| Compute Concurrency | CPU count, capped at 16 |
| Stack jobs (concurrent) | 4 |
| Stacking reserved workers (under contention) | 4 |
| Viewer reserved workers (under contention) | 8 |
| Alignment evaluate concurrency | CPU count minus 2, never below 2, capped at Compute Concurrency |
| In-Flight Memory Budget | 4 GB |
| Cache Size Cap | 8 GB |
| Stacking Tile Cache | 4 GB |
| Stack Memory Budget | 0 (automatic: half the machine's RAM, floored at 4 GB) |
| Cache Eviction Headroom | 1 GB |
| Drive Free-Space Reserve | 2 GB |
| Drive Eviction Target | 8 GB |
| Stalled-read timeout | 5 seconds |
| Cache Location | Empty (uses `%APPDATA%/EigenFrame/tiles-cache`) |

## Stack output templates

From **Stack Outputs** in the gear menu, one template per frame type, plus a per-rig override on the Equipment page. See [where stacks are saved](../stack/where-stacks-are-saved.md).

| Template | Default |
|---|---|
| Bias | `EigenFrame/Masters/Bias/{SessionDate}.MasterBias.Gain.{Gain}.Offset.{Offset}{.ReadoutMode?}.{NCombine}x{ExposureTime}s` |
| Dark | `EigenFrame/Masters/Dark/{SessionDate}.MasterDark.Gain.{Gain}.Offset.{Offset}{.SetTemp?}.{NCombine}x{ExposureTime}s` |
| Flat | `EigenFrame/Masters/Flat/{SessionDate}.MasterFlat{.Filter?}.Gain.{Gain}.Offset.{Offset}.{NCombine}x{ExposureTime}s` |
| Light | `EigenFrame/Integrations/{Object}/{Object}_{Filter}_{SessionDate}` |

A per-rig override is blank by default, which inherits the template above.

Template syntax uses `/` separators, as shown above. The preview beneath each field renders the separator your own platform writes.

## Diagnostics

The **Send diagnostics** toggle and its connection string live at the bottom of Performance Settings. See [diagnostics and telemetry](./diagnostics-and-telemetry.md).

| Setting | Controls | Default |
|---|---|---|
| Send diagnostics | Whether operational events leave your machine at all | Off |
| Connection String | Where diagnostics are sent when the toggle is on | Blank (sends to the EigenFrame team's endpoint) |

## Related

- [Performance and cache](./performance-and-cache.md)
- [Rigs and equipment groups](../library/rigs-and-equipment-groups.md)
- [Where stacks are saved](../stack/where-stacks-are-saved.md)
- [Library folders](../library/library-folders.md)
- [Diagnostics and telemetry](./diagnostics-and-telemetry.md)
- [The screens](./the-screens.md)
