---
title: How do I register my subs, and what do the results mean?
description: Running Evaluate alignment on a filter, reading the Accepted, Aligned, Out of band and Won't align states, and using the Needs attention panel and the Advanced actions.
---

# How do I register my subs, and what do the results mean?

Alignment runs per filter, from the target's filter tab. Open a target, pick a filter, and find the **Alignment** panel. It needs an [alignment reference](./choose-an-alignment-reference.md) and star catalogs on your frames; if no reference is set yet the panel says so and points you at the two places to choose one.

Press **Evaluate alignment**. Each frame in that filter is fitted to the reference, producing a rotation, a scale and a translation, and the result is stored on the frame.

## What the fit reads

The fit works from star catalogs, matching each frame's detected star field against the reference's. It reads no pixels to do the matching, which is why a filter of several hundred subs fits far faster than anything that has to open the images.

Pixels come in only where a frame's catalog is out of date against its current calibration assignment. That frame is re-detected on calibrated data first, then fitted. So the first evaluation after you assign masters costs more than the ones after it.

Evaluation is per filter. Start Ha, move to the OIII tab, start that too, and both run at once.

## Watching it run

While a run is active the panel header reports live progress, and keeps reporting it if you navigate away and come back:

`● evaluating alignment… 148/312 · on Ha · 141 fit`

**⏹ Stop** ends the run. Frames already fitted keep their fits; the rest are skipped, and running Evaluate again picks them up. When the run finishes the header settles into a standing tally for the filter:

`312/312 evaluated · 298 fit · 14 failed`

> **Screenshot:** Target filter tab, the Alignment panel mid-run with the live progress counter and the Stop control.

## The five per-frame states

Every frame carries one of five states, shown as a badge on its thumbnail here and in the [Alignment Viewer](./alignment-viewer.md).

**✓ Accepted.** You looked at this fit and confirmed it. It is locked, and no automatic re-fit will overwrite it.

**✓ Aligned.** A stored fit that sits inside this rig's expected geometry. This is the ordinary good outcome and the state most of your frames should reach.

**△ Out of band.** A fit was found and it is self-consistent, but its scale or rotation falls outside the rig's tolerance. Often this is a real field rotation across nights, in which case the fit is fine and the tolerance is what needs widening. It is advisory: nothing is culled and nothing is blocked.

**! Won't align.** No match was found against the reference. Also advisory.

**… Not yet screened.** No fit has been attempted on this frame yet.

Integration draws on the frames in the first two states. The Integrate control below the panel stays closed until there are enough of them, and says so:

`⋯ Integrate unlocks once frames are aligned (reference + at least one aligned frame).`

## The Needs attention panel

Where a run leaves frames that were evaluated but did not settle into a fit, a **Needs attention** panel appears above the controls with those frames as a contact sheet and a count, `N to look at`. Its own copy states the principle:

> These frames were evaluated but didn't lock, a failed match or an out-of-band fit. Click one to investigate and refine in the viewer. Nothing is culled automatically.

**Review N** opens the [Alignment Viewer](./alignment-viewer.md) on the first of them and steps through the rest. Each tile is clickable on its own, and carries the same reject control as any other contact sheet, so a frame that plainly isn't the target can be culled on the spot. **Reject all** rejects the whole set behind a confirmation that shows you the exact frames first.

Looking is the intended first move. A frame here has told you something, and the viewer is where you find out what.

> **Screenshot:** The Needs attention panel with its flagged thumbnails and the Review action.

## Rig tolerances

What counts as out of band is per rig, on the Equipment page, under **Alignment tolerances**:

- **Rotation ± deg**, 5.0 by default.
- **Scale ± %**, about 2 by default.
- **Allow 180° flip**, on by default, so a meridian flip fits normally.

Widen the rotation window for a target near the pole or one shot across many nights, since field rotation accumulates. Scale outside the band usually means a focal length change, a different reducer, or a frame from a different optical configuration than you expected.

Leaving a field blank keeps the shipped default.

## The Advanced actions

Two actions sit behind **Advanced**, for when a plain re-evaluation is not enough.

**Force re-detect + evaluate** re-detects every frame on calibrated data and re-fits, skipping the fast path that trusts an existing catalog. Reach for this after changing calibration, or when you suspect a detection was made against the wrong masters. Fits you accepted are kept.

**Re-detect (no calibration)** re-detects on raw pixels with no masters applied and evaluates from that. It is a diagnostic: compare the star count it produces against the calibrated run, and a large gap points at the calibration rather than the matcher.

## Starting over

**Reset** discards every stored fit for this filter under the current reference, including accepted ones, and returns the frames to unaligned. It confirms first, naming how many accepted and how many total fits it is about to discard, and offers a checkbox to reset the saved tuning to defaults as well. It rejects nothing and deletes nothing.

## Related

- [What is the alignment reference and how do I change it?](./choose-an-alignment-reference.md)
- [Judging a fit yourself](./alignment-viewer.md)
- [When frames will not align](./when-frames-will-not-align.md)
- [Integrating aligned frames](./integrate-aligned-frames.md)
- [Where do my FWHM and HFR numbers come from?](../inspect/star-detection-and-frame-quality.md)
