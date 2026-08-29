---
title: What's the difference between rejecting and deleting?
description: Reject excludes a frame from EigenFrame's stacks and is fully reversible. Delete removes the file from disk, permanently, with confirmation.
---

# What's the difference between rejecting and deleting?

EigenFrame gives you two separate actions on a frame, and they do very different things.

- **Reject** excludes the frame from EigenFrame's stacks. It's a record inside EigenFrame. The file on disk is untouched, and you can undo it at any time.
- **Delete** removes the file from disk. It's permanent, it asks for confirmation, and there is no recycle step.

[What EigenFrame does with your files](../start/what-eigenframe-does-with-your-files.md) covers this at a high level; this page covers where each action lives in the app and how to use them well.

## Reject: be aggressive

Rejecting a frame costs nothing. It's a record inside EigenFrame, reversible with one click, and the file stays exactly where it is. That makes it the right tool for a first pass: flip through a night and reject anything obviously bad, a passing cloud, a trailed sub, a bump, without stopping to think twice.

A rejected frame is skipped when EigenFrame builds a stack. It stays in the catalog, its thumbnail still renders (with a REJECTED overlay), and nothing about the file itself changes.

## Un-reject

Every rejected frame can be restored. In the contact sheet and the viewer, the same reject control toggles back: reject a passing frame and it turns into a restore control, click it again and the frame is back in play. A contact sheet with rejected frames in it also gets a **Restore all** action alongside **Reject all**.

Because restoring is always available, there's no reason to hesitate over a borderline frame. Reject it, and if you change your mind later, restore it. Nothing is lost either way.

## Delete: permanent, and it changes what is on disk

Delete only appears on frames you've already rejected. It removes the file from disk, along with EigenFrame's tile data for it, and there is no way back afterward.

That is the difference worth understanding. Rejecting records a decision in EigenFrame's catalog. Deleting changes the folder itself, so the cleaner set is what every later read of that folder finds.

A single delete opens a confirmation dialog showing exactly what you're about to remove, with the file count and a preview filmstrip for more than one frame. Press D to confirm or Escape to back out, or shift-click the delete control to skip the dialog entirely for a single frame.

> **Screenshot:** The permanent-delete confirmation dialog with its preview filmstrip.

A contact sheet's **Delete rejected** action removes every rejected frame in that group in one pass, with the same confirmation dialog (or shift-click to skip it).

For a larger clear-out across a whole target and filter, spanning every session, there's a heavier confirmation: you have to type the exact frame count into a field before the delete button unlocks. That one has no keyboard shortcut and no shift-click skip, since it can span far more frames than a single session's worth.

## Cull by metric

Flipping through frames by eye is a good first pass, but the borderline cases benefit from a number. **Cull by metric** takes every frame in a filter and sorts it by one measurement at a time: FWHM, HFR, eccentricity, star count, SNR, median background level, background MAD, a composite Quality score, and, once enough frames have aligned, Transparency.

Each metric gets its own tab. Within a tab, frames are ordered low to high, and you set two boundaries, a low cut and a high cut, each shown as a count with a step control and the value it would keep at (for example "keep ≥ 2.10 px"). A histogram above the frames shows the whole distribution with both cut tails tinted. Dragging a divider through the frame grid moves the boundary directly; every tab's cuts combine, so a frame cut on any metric is included in what you're about to reject.

Nothing is rejected until you commit. The footer keeps a running tally of frames and exposure time on each side, "Keep N · Xh" and "Reject N · Xh", and the commit button reads "Reject N" with the live count. Only frames that are still passing are affected. A frame you've already rejected by hand stays rejected; the cull only adds to what's excluded, it never restores anything.

The Quality tab is a composite score built from adjustable importance sliders over the same underlying metrics, and it can be saved per filter, per target, or as the equipment group's default. See [Star detection and frame quality](./star-detection-and-frame-quality.md) for where these metrics come from and what each one measures.

> **Screenshot:** Cull by metric, frames ordered by FWHM with a range marked for rejection.

Each frame in Cull by metric also carries its own reject toggle and, once rejected, its own delete control, so you can act on an individual outlier without leaving the sorted view.

## Reject flagged

When a rig has quality thresholds set, frames that fall outside them are marked with an amber flag and counted on the group header as **N flagged**. The header then offers **Reject flagged (N)**, which rejects exactly those frames in one click.

The flag is a suggestion and the click is yours: flagging on its own leaves a frame in every stack it was already part of. Loosening a threshold clears the flags immediately, and frames you rejected while it was tighter stay rejected until you un-reject them. See [star detection and frame quality](./star-detection-and-frame-quality.md) for where the thresholds live and how they differ from the acceptance settings.

> **Screenshot:** Contact sheet group header showing the flagged count and the Reject flagged action.

## Per-frame rejection: contact sheet and viewer

On a session's contact sheet, every thumbnail carries a reject control in its corner. Click it to reject or restore that one frame in place; the thumbnail immediately shows the REJECTED overlay. Every tile also carries a small **i** control at the left end of its bottom edge. Click it for the frame's details: capture time (local when the frame's header records one, otherwise labeled UTC), pier side, focuser temp, airmass, rotator, and, for a light, its median HFR, eccentricity, and SNR. A value the frame doesn't carry is simply left out. The group header above the sheet offers **Reject all**, **Reject flagged (N)** where flagged frames exist, and, once something is rejected, **Restore all** and **Delete rejected** for the whole group (or, when a flat group splits into evening and morning batches, for each batch separately).

In the viewer, the same action lives in the Interaction panel as a **Reject frame** / **Unreject** button. A **Hide rejected** checkbox in the same panel controls whether rejected frames are skipped entirely: with it on, stepping through the filmstrip with the arrow keys or the prev/next controls jumps straight past any rejected frame, landing on the next one that's still passing.

## Related

- [What EigenFrame does with your files](../start/what-eigenframe-does-with-your-files.md)
- [Star detection and frame quality](./star-detection-and-frame-quality.md)
- [Working a night](./review-a-night.md)
- [Your first hour with EigenFrame](../start/first-hour.md)
- [Troubleshooting](../help/troubleshooting.md)
