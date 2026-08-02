---
title: What should I back up, and how do I start over?
sidebar:
  label: Where EigenFrame stores its data
description: "The one folder EigenFrame owns: where it is on each platform, what in it is worth backing up, what just rebuilds, and how to reset the app without touching your frames."
---

# What should I back up, and how do I start over?

Everything EigenFrame owns lives under one folder in your per-user application-data directory:

- **Windows:** `%APPDATA%\EigenFrame` (`C:\Users\<you>\AppData\Roaming\EigenFrame`)
- **macOS:** `~/.config/EigenFrame`
- **Linux:** `~/.config/EigenFrame`

Your frames, masters, and stacks are never inside it. That folder holds only records EigenFrame keeps about them.

## What's worth backing up

This is state you set yourself. Losing it means redoing work, not just waiting on a rescan.

- Your library folder list, their per-folder settings, and [import rules](../library/import-rules.md)
- [Performance settings](./performance-and-cache.md)
- Your stack output templates
- [Calibration assignments](../calibration/how-calibration-is-assigned.md) you set by hand
- [Rig](../library/rigs-and-equipment-groups.md) definitions and their per-rig rules and settings
- [Rig logbook](../library/rigs-and-equipment-groups.md) notes and optical-train changes
- Each target's chosen [alignment reference](./glossary.md#alignment-reference)
- Stored alignment [fits](./glossary.md#fit), [accepted](./glossary.md#accepted) decisions, and saved match/distortion tuning
- Integration [presets](./glossary.md#preset)
- Frame [rejections](./glossary.md#reject-and-un-reject)
- Remembered view preferences: your filter selections, collapsed panels, and stacking lab toggles

## What just costs time to rebuild

This is computed from your frames. Delete it and EigenFrame recomputes it on the next scan or the next time it's needed.

- The catalog index of what's in your library folders
- Thumbnails
- Star catalogs
- Flat quality verdicts
- [Rough alignment](./glossary.md#rough-alignment) results
- The [tile cache](./performance-and-cache.md)

The tile cache can be relocated to a folder of its own outside `EigenFrame`, so backing up the `EigenFrame` folder doesn't necessarily capture it. That's fine: it doesn't need capturing.

> **Screenshot:** The `EigenFrame` application-data folder open in a file browser.

## Starting over

Quit EigenFrame, delete the `EigenFrame` folder, then start it again. Your frames, masters, and stacks are untouched.

You lose everything in the first list above: your library folder list, so you'll re-add and re-scan your folders; your calibration assignments, rig settings and logbook, alignment references, fits and tuning, presets, rejections, and remembered view preferences. Everything in the second list rebuilds on its own once your folders are scanned again.

## Related

- [Performance and cache](./performance-and-cache.md)
- [Will this reorganize, move, or damage my library?](../start/what-eigenframe-does-with-your-files.md)
- [Library folders](../library/library-folders.md)
- [Settings](./settings.md)
- [Glossary](./glossary.md)
