---
title: What is the alignment reference and how do I change it?
description: One reference frame per target and rig anchors every filter and defines the output canvas. How it is chosen, how to set your own, and what changing it does to existing work.
---

# What is the alignment reference and how do I change it?

Every target on a rig has one alignment reference. Each frame is fitted to that one frame, so the reference defines the framing every other frame is measured against, and it defines the canvas a stack is written into: the output master has the reference frame's own dimensions, and each contributing frame is warped into that canvas and clipped to it.

There is one reference for the whole target, shared by every filter. Ha, OIII and SII co-register to the same framing, which is what lets their masters stack on each other afterwards.

## How the first one gets chosen

EigenFrame picks a reference for you as soon as stars have been detected. It scores every non-rejected light on the target across all filters, using star count, FWHM, eccentricity and SNR together, and takes the highest scoring frame.

That choice is provisional until it matters. The first time an alignment evaluation actually starts, the frame in use is written down and becomes the target's stored reference. From then on it stays put: detecting stars on a newly imported night, or re-detecting after calibration, cannot quietly move the anchor out from under fits you already have.

The target header shows which state you are in:

`Reference FOV: auto-selected (best sub)` or `Reference FOV: chosen`

Once a reference is stored, a **Revert to auto** control appears beside it, which clears your choice and hands the target back to automatic selection.

> **Screenshot:** Target page header showing the Reference FOV badge with a chosen reference and the Revert to auto control.

## Choosing one yourself

Two surfaces offer the choice, and they match the two ways you would judge it.

**From the image viewer.** Open a frame, look at its framing, and press **Set as reference** in the toolbar. The frame that is already the reference shows **✓ Reference** instead.

**From Cull by metric.** Sort a filter's frames by FWHM, quality or any other metric, and use the ⊙ control on the tile you want. This is the one to reach for when you want the best frame by a number rather than by eye.

Any non-rejected Light on that target and rig can be the reference, whether it is a single sub or a master you stacked earlier. A master additionally needs its own stars detected first, since the fit works from star catalogs.

## What changing it does

Changing the reference does not throw away your alignment. Existing fits are rebased onto the new reference arithmetically, with no re-evaluation and no re-reading of pixels. Frames that had no fit are left as they were.

A dialog states the consequence before it commits:

> This becomes the reference for all filters of this target. Every filter co-registers to its framing, not just the one you're viewing.

It then reports what the change touches, and offers up to three choices:

- **Rebase existing alignment**, on by default. This is the arithmetic carry-over described above.
- **Reject the N stale masters**, offered when you already have masters built against the old reference. Those masters live in the old canvas.
- **Queue a restack**, which rebuilds them in the new canvas. Alignment is preserved, only the integration runs again.

When a target has neither masters nor existing fits, there is nothing to report and the change commits straight away. Afterwards a summary tells you exactly what happened, for example `Rebased 137 fits onto the new reference`.

> **Screenshot:** The Set alignment reference dialog showing the stale-master count with the rebase, reject and restack options.

## If your reference gets rejected

You can reject the frame that is currently the reference. It stays the anchor: its stars still drive every fit on the target, even though it is excluded from the stack itself. The target page says so directly and offers the fix:

> ⚠ Your anchor is a rejected frame. Its stars still drive every alignment. Re-anchor to a frame that's in the stack.

**Re-anchor** takes you to the reference badge, where **Revert to auto** picks the best non-rejected sub. To pick a specific frame instead, set it from the viewer or Cull by metric as above.

## If you want to delete your reference

Deleting the reference file is gated on choosing a successor first, since every fit on the target is measured against it. Attempt the delete and EigenFrame offers a list of eligible frames, hands your pick to the same consequence dialog, and only then lets the delete through.

The bulk delete of rejected frames on a target follows the same rule: it skips the reference and tells you it did.

## Related

- [Running alignment and reading the results](./evaluate-alignment.md)
- [Judging a fit yourself](./alignment-viewer.md)
- [When frames will not align](./when-frames-will-not-align.md)
- [Where do my FWHM and HFR numbers come from?](../inspect/star-detection-and-frame-quality.md)
- [Culling frames](../inspect/culling-frames.md)
