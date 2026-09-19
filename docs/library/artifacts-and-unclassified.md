---
title: Where do I see everything at once, and how do I fix files that didn't classify?
description: The Artifacts page in full, category and subtype perspectives, the filter bar, the rejection lens, match-signature grouping, and fixing Unclassified files.
---

# Where do I see everything at once, and how do I fix files that didn't classify?

**Artifact** is the umbrella term for anything cataloged: a raw frame, a master, or a stack. This page says frame or master wherever one is meant, and artifact only where the point covers both.

Open **Artifacts** from the library nav for a single table of everything in the catalog, cut by category and subtype, with the tools to fix what came in wrong.

> **Screenshot:** The Artifacts page in the Frames category, Bias subtype, with several groups expanded.

## Category and subtype

Three tabs sit at the top: **Frames**, **Masters**, **Unclassified**. Under Frames or Masters, four pills narrow further by subtype: **Bias**, **Dark**, **Flat**, **Light**. Unclassified has no subtype pills; it is a single bucket of everything that could not be classified.

Frames × Bias/Dark is the one perspective that groups: matching frames collapse into a stackable group with a frame count, rather than listing every file. Every other combination (Frames × Flat/Light, Masters of any subtype, Unclassified) is a flat, paged list. A note under the Light and Flat perspectives points to Sessions or the target's filter tab for actually reviewing or aligning a night; Artifacts is for bulk management, not inspection.

## The filter bar

Below the category tabs sits a **Rejected** control, and under it a row of filters: File path, Instrument, Camera ID, Gain, Offset, Readout, X Bin, Y Bin, Width, Height, ISO, USB. Two more, Exp (s) and Set °C, appear only on the Dark subtype, and **Object** appears only on the Light subtype. Each filter narrows the list as you type. **Clear** resets all of them at once and shows how many are active.

**File path** matches any part of a frame's full path, folder names included, so typing a project folder's name isolates every frame stored under it. It is also the one filter that finds an Unclassified file, which usually has no other header to match on. **Object** matches any part of the object header; each light row also shows its object name under the file name.

## The rejection lens

**Rejected** is a three-way switch: **Active** (the default, rejected artifacts hidden), **Include** (rejected artifacts shown alongside active ones), and **Only**. Only is the cleanup lens: it shows nothing but rejected artifacts and adds a **Delete all Rejected** button, which gathers every rejected artifact matching the current filters and asks you to type the exact count before it unlocks. Deletion is permanent. See [rejecting versus deleting](../inspect/culling-frames.md).

## Grouping by match signature

Under Frames × Bias or Frames × Dark, a folder of mixed captures sorts itself automatically: every frame sharing the same camera signature, instrument, gain, offset, readout mode, binning, and for darks exposure and set temperature, collapses into one group. Expand a group to see its individual frames, or select the whole group at once to stack it. A group is labeled by the values it shares; a group missing enough of them to be genuinely unmatchable is called out with a banner above the table, and each such group carries its own **Set match fields** button next to its readiness chip.

Selecting frames or a whole group opens a bottom bar with **Reject**, and, on the grouped Bias/Dark view, **Stack →** to build a master from the selection.

## Selecting frames on a flat list

The checkbox in the table header selects every frame on screen. A long list loads as you scroll, so when more frames match the filters than are on screen, a line above the table reads how many of the matching frames are selected and offers **Select all matching**. That extends the selection to every frame the current filters match, loaded or not; frames that scroll in later arrive already selected, and the bottom bar and the editor's **Apply** button both show the full matching count. **Clear selection** on the same line empties the selection. Changing a filter, a tab, a subtype pill, or the **Rejected** switch empties it as well, so an action only ever covers frames you can see the filters for.

## Fixing what went wrong

Two controls force EigenFrame to re-read a file from disk and reclassify it:

- **Reindex**, on an individual row in the Unclassified view, re-parses that one file's header.
- **Reclassify all errored**, a bulk button above the Unclassified list, re-reads every file currently stuck in a read error at once.

For masters that arrived without the fields calibration matching needs (common for a master built outside EigenFrame, which typically carries none of the camera-signature header), select one or more rows, or an entire group, and use **Edit / reclassify** (or a group's own **Set match fields**) to fill in instrument, gain, offset, readout, binning, and the rest by hand. See [how calibration is assigned](../calibration/how-calibration-is-assigned.md) for what each of those fields does and how a missing one affects matching.

When every selected row is a light, the same editor offers two more fields, **Object** and **Filter**, for correcting what the capture software wrote. A field left blank is left alone on every frame. Setting a new object name moves the selected frames to that target: the Targets list re-groups on the next read, the moved frames lose their alignment fits and are screened again on the new target, and a session that contained them lists them under the new name. Changing the filter moves the frames to that filter's tab on their target. See [why do I have two M31 cards](./targets.md) for the case where one object name spans two projects.

## Where Unclassified comes from

A file lands in Unclassified for one of two reasons:

- **The header could not be read at all.** The row carries a warning icon with the reason, and Reindex or Reclassify all errored is the fix once the underlying problem (a damaged file, an unsupported variant) is resolved.
- **The header read fine but lacks the keywords that distinguish Bias, Dark, Flat, and Light.** This is common on masters and on captures from software that does not write a type keyword. Reindex will not help here, since the file already read correctly; set the type yourself, either per file or, better, at the source.

Fixing it at the source means the folder's **Override**, which stamps every file scanned under it going forward, or its **import rules**, which can target specific paths and also re-apply to records already cataloged. See [library folders](./library-folders.md) and [import rules](./import-rules.md) for both. If the files are one-shot-colour, Bayer, or camera raw, an override will not help; see [will EigenFrame read my data?](./supported-file-formats.md).

> **Screenshot:** The Artifacts page in the Unclassified perspective with the reason column visible.

## Related

- [Library folders](./library-folders.md)
- [Teach EigenFrame your folder conventions](./import-rules.md)
- [Will EigenFrame read my data?](./supported-file-formats.md)
- [How does EigenFrame decide which masters calibrate which lights?](../calibration/how-calibration-is-assigned.md)
- [What's the difference between rejecting and deleting?](../inspect/culling-frames.md)
- [Rigs and equipment groups](./rigs-and-equipment-groups.md)
