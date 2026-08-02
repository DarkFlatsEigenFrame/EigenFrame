---
title: How do I stop my masters and finished images coming in as lights?
description: "Import rules in full: ordered path patterns per library folder that exclude files or force a type, the pattern syntax, first match wins, and the opt-in re-apply."
---

# How do I stop my masters and finished images coming in as lights?

**Import rules** are an ordered list of path patterns on a library folder. Each rule either excludes matching files from the scan or forces a type onto them. Rules are checked top to bottom and the first one that matches a file decides its fate; a file that matches none of them falls through to the folder's own [Override](./library-folders.md#settings). Open the editor from **Import rules** on a folder's expanded settings.

> **Screenshot:** Import rules editor with three rules and the re-apply preview open.

## What a large, convention-bearing library runs into

A folder tree that already carries years of its own conventions rarely sorts cleanly into the categories a scan detects from headers alone. A few patterns come up constantly:

**Integrated masters sitting at the top of a target's folder.** A master built outside EigenFrame (PixInsight, WBPP) often carries `IMAGETYP=LIGHT`, the type of the frames that went into it rather than the type of the result. Match the master's path and set the rule's action to **Type →** with the correct subtype, and it is labeled correctly regardless of what the header says.

**A folder of finished, non-linear, processed work.** Final images you export back into the same tree are not raw data and have no place in the catalog. An **Exclude** rule on that folder's path keeps the scan out of it entirely.

**A folder of already-culled or rejected subs.** Subs you moved out of the working set during triage should not resurface as if they were still candidates. Exclude them the same way.

**Calibration sitting in sibling folders.** When bias, dark, flat and light frames live in separate folders under one library folder, a single folder-wide Override cannot label them all correctly, since it applies one type to everything. Give each sibling folder its own **Type →** rule instead, one pattern per folder, so each is labeled independently while the whole tree is still added as one library folder.

## Pattern syntax and matching

A pattern is checked against the file's whole path (or the object key, for a cloud source), anchored from the very start to the very end. Because of that, a pattern almost always needs to open with a wildcard unless you intend to match a full path literally.

- `*` matches any run of characters, including path separators.
- `?` matches exactly one character.
- Matching is case-insensitive.
- Everything else in the pattern is matched literally.

`*\Calibration\*` matches any file with a `Calibration` folder anywhere in its path. `*MasterFlatCal*` matches any file whose path contains that substring, regardless of which folder it sits in.

Because a pattern matches the whole path, a wildcard broad enough to catch a file sitting directly in a target's folder will also catch every file in every subfolder beneath it, so the two cannot be separated with a single rule.

## Actions

Each rule has an action:

- **Exclude.** The file is skipped by the scan.
- **Type →**, with a subtype of Bias, Dark, Flat or Light. The file is labeled with that subtype instead of whatever its header says.

Import rules can force a frame's subtype but never its category, so a rule can relabel a miscategorized flat master as a flat, but it cannot turn a light frame into a master or the reverse.

Add a rule with **+ Add rule**. Reorder with the `▲` and `▼` controls; since the first match wins, a narrow pattern needs to sit above a broader one it would otherwise be shadowed by. Remove a rule with the `×` beside it.

Edits are a draft until you press **Save rules**, and **Discard** reverts to what is saved. A folder with no rules says so, and every supported image file under it is scanned with its detected type.

## Forward-only by default

Saving rules changes nothing about files already in the catalog. They apply to files as they are scanned from that point on, exactly like the folder's Override and equipment group assignment.

To fix records that already came in wrong, open **Re-apply to existing records…** below the rule list. It is disabled while you have unsaved changes, so save first. Once open, it previews what the currently saved rules would do to every record already cataloged under that folder: how many would be removed, how many would be relabeled, and how many are left untouched. **Re-apply now** starts the pass in the background, with progress on the activity tray. **Cancel** dismisses the preview without applying it.

## Related

- [Library folders](./library-folders.md)
- [Will EigenFrame read my data?](./supported-file-formats.md)
- [Troubleshooting](../help/troubleshooting.md#my-masters-came-in-as-light-frames)
