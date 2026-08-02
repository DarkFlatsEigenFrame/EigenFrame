---
title: How do I build a flat master for a night?
description: Building one or more flat masters from a night's flats, from the session page or the rig's flat timeline, including the bias picker and the evening/morning split.
---

# How do I build a flat master for a night?

## Where you start

Open a session and scroll to **Flats this night**. Click a filter's row to open a dock beside the strip, scoped to that one night. The same dock opens from the rig's flat timeline: click any night on the strip and it opens identically, with tabs for every filter that shot flats.

The dock's tabs switch filters without leaving the dock. A green checkmark on a tab means a master already exists for that filter this night; a pulsing dot means a build is running.

## Building one filter

Inside a filter's tab, click **Build flat master**. This opens the build panel, scoped to that filter's flats for that config. If evening and morning flats were both shot, the panel offers **All**, **Evening**, and **Morning** as separate checkboxes, each showing its frame count. Check one, two, or all three to queue that many masters.

## Building every filter at once

Click **Build All** at the top of the dock to open the same panel scoped to every filter shot that night. It checks off every filter and sky-batch combination that does not already have a master, so one click catches up a night you have not touched yet. Combinations that already have a master start unchecked, so a repeat click does not duplicate work.

> **Screenshot:** Flat night dock with filter tabs and the Build All button, one tab showing a completed master and another showing a build in progress.

## The evening/morning split

A night's flats are shown as one evening batch and one morning batch whenever a large enough gap in capture time separates them. A single unbroken run gives you only the **All** option. Where a split exists, building **All** combines both batches into one master; building **Evening** or **Morning** separately keeps them apart. Flats shot hours apart under a changing sky do not always blend cleanly into one master, so the split lets you build whichever grouping matches what you actually shot.

## Culling before you build

Flats render raw in their contact sheet, and the batch's [flat verdict](./flat-quality-verdicts.md) sits above it. If the verdict flagged frames, reject them before building, either with the verdict's own **Reject N flagged** action or by hand in the contact sheet. Frames already surface-flagged as suspect (dew, cloud, flicker) are excluded from the build by default; a checkbox in the panel's footer opts them back in if you disagree with the flag.

> **Screenshot:** Flat verdict banner above a night's flat contact sheet, with one frame rejected by hand.

## The bias picker

Below the frame selection, the panel lists every bias master that matches this flat's camera configuration: instrument, gain, offset, readout mode, binning, and sensor dimensions. The most recently built matching bias master is pre-selected and marked **best match**. Pick a different one from the list, or choose **No bias correction**.

Choose a matching bias master when one exists: subtracting it removes the sensor's bias pedestal before the flat frames combine. Choose **No bias correction** only when nothing in the list matches your camera configuration, which the panel tells you outright, or when you deliberately want an uncorrected flat.

If no bias master matches at all, **No bias correction** is the only usable option, and the panel explains which fields did not match your flats' camera signature so you know whether you need a new bias master or a signature adjustment.

> **Screenshot:** The flat master builder with the bias picker open and the evening batch selected.

## Running the build

Click the build button and a pre-flight check runs first: it verifies the source flats are ready and, if you picked a bias master, that it is ready too and its geometry matches. A clean pre-flight submits immediately. A pre-flight with only warnings, such as an unusually small or large frame count, asks for one more click before it submits; anything blocking, such as a bias master whose geometry does not match, keeps that unit from submitting until you fix it or drop the bias.

Once submitted, the panel switches to a live progress view, one row per master queued: preparing source frames, splitting into tiles, combining, then saving the finished master as XISF. A completed row links straight to the Stacks page; a failed one tells you to check there for details.

> **Screenshot:** Build panel showing live progress bars for two masters, one preparing and one combining.

## The result

A flat master is built for one rig, one camera configuration, one filter, and the sky-batch you built it for (all, evening, or morning). It registers in your library the same way any master does, with no separate step: it appears immediately under Masters and on the dock's tab as a green checkmark. From there, [how calibration is assigned](./how-calibration-is-assigned.md) covers how EigenFrame decides which lights it applies to.

## Related

- [What the flat verdicts mean](./flat-quality-verdicts.md)
- [How long is a flat good for?](./flat-epochs.md)
- [How does EigenFrame decide which masters calibrate which lights?](./how-calibration-is-assigned.md)
- [Building bias and dark masters](./build-bias-and-dark-masters.md)
- [Working a night](../inspect/review-a-night.md)
- [Culling frames](../inspect/culling-frames.md)
