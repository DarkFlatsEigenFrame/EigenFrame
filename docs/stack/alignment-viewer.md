---
title: How do I judge whether a fit is actually right?
description: The Alignment Viewer flips a frame against the reference, overlays matched stars, and lets you accept, reject, or tune a fit, bad ones shown honestly too.
---

# How do I judge whether a fit is actually right?

The Alignment Viewer is where you look at a fit rather than trust a badge. It draws the current frame exactly as [Evaluate alignment](./evaluate-alignment.md) computed it, transform and all, against the reference it was measured against. A bad fit is drawn too, marked as such, so you can see what went wrong. Every decision here is yours to take.

Open it from the **Needs attention** panel's **Review N**, or by clicking into any frame from a filter's contact sheet. It opens on the frame you chose and steps through the rest of that filter in the same order as the contact sheet.

> **Screenshot:** Alignment Viewer open on a frame, canvas on the left, controls and diagnostics on the right, filmstrip along the bottom.

## Comparing against the reference

Hold **Space**, or hold the **A/B reference** button, to flip the canvas to the reference frame; release either to flip back. This is the fastest way to see whether two star fields actually line up, since the eye catches a mismatch in a flip far faster than in a static side-by-side.

The bottom filmstrip and the scrubber above it move you between frames. The left/right arrow keys do the same. Reject rings on the filmstrip thumbnails carry over from the rest of the app.

## Seeing where the fit agrees

Press **M**, or the **matches** toolbar button, to overlay the matched-pair vectors: a short line from each reference star to where the fit places the corresponding star in the current frame. A good fit draws mostly dots with no visible vectors. A bad one fans out or scatters, and that shape is often the fastest way to tell a real problem from a fine one.

> **Screenshot:** The matched-pair overlay on a frame, showing matched and unmatched stars.

## Reading the badge

The top-left badge states the verdict for what's on screen, in the same language as the filter's [per-frame states](./evaluate-alignment.md#the-five-per-frame-states):

- **Accepted** or **Aligned** draws in green: the fit is on screen and trustworthy.
- **Out of band** draws the fit anyway, marked plainly that the framing looks wrong, with the scale or rotation reason next to it.
- **Won't align** shows the frame at its raw framing, since there's no fit to draw, and says clearly that what you're looking at isn't aligned to the reference. A note pinned to the corner repeats this so it's never mistaken for the reference itself; hold Space to check.
- **Not yet screened** shows the same raw framing, labelled as not yet evaluated.

A second line under the verdict says where the transform came from: a stored fit, or a live preview from the tuning sliders that hasn't been saved anywhere yet.

**≈ rough alignment** is its own badge, distinct from the five states above. It's an instant, approximate fit the viewer computes on the spot so you have something to compare against while the precise fit is still working. It draws with an amber ring when it's a confident, in-range approximation, and steps aside for the precise fit the moment that lands. When even the rough fit looks unreliable, the viewer says so and shows it anyway, ringed in red, purely so you have something to look at while you diagnose.

A thin colored ring around the canvas echoes the same read at a glance: green for trustworthy, amber for an approximate-but-plausible rough alignment, red for anything on screen mainly for diagnosis, and no ring when nothing has been computed yet.

## Confirming or discarding a fit

**Accept this fit** locks the current frame's fit. Once accepted, no automatic re-evaluation touches it, whether that's a plain re-run or a force re-detect, until you deliberately undo it. Accepting a fit that reads Out of band asks you to confirm first, since you're overriding the rig's expected range on purpose; a fit that already reads Aligned accepts immediately.

**Reset** discards this one frame's stored fit, accepted or not, and returns it to unaligned.

## Rejecting from here

**R**, or the **Reject** toolbar button, rejects or unrejects the frame on screen, using the same reject action as everywhere else in the app. Rejected frames drop out of the filmstrip by default, since they're out of the alignment set; tick **include rejected** to bring them back into view. Opening the viewer directly on a rejected frame shows it regardless, so an investigate-this-frame click always lands where you aimed it.

## Tuning the fit live

The controls panel carries the same matching parameters Evaluate alignment uses: the algorithm (Expanding or Triangle), matching settings like ratio tolerance, minimum votes, anchor star count and spread, and a cap on how many stars go into the match. Moving any of them re-fits the current frame after a short pause, and the canvas, badge and border update to show the result.

A banner above the sliders reports the honest outcome of that live fit as you tune: whether it landed, how many stars matched and how many of those the fit trusted, and how tightly they agree. If the tuned fit fails or reads as an out-of-range framing, the banner says so plainly and reminds you that the canvas is still showing the raw or rough fallback, not the fit you just produced.

Distortion correction options sit below the matching settings: a kernel choice, a support factor, and a regularization amount. Turning one on previews a locally warped version of the current frame at preview resolution, which is where you judge whether field distortion is worth correcting for.

**Save for this filter** stores the current slider values against the filter; frames don't re-fit until you also **Apply to set**, which saves and then re-evaluates every frame in the filter with those settings, or until you next run [Evaluate alignment](./evaluate-alignment.md).

## The diagnostics panel

Below the controls sits a diagnostics panel: deliberately technical, deliberately dense, and meant to be copied rather than read as prose. It names the frame and reference by id, states the verdict, lists the matching parameters in effect, and gives the fitted transform as scale, rotation and translation. Underneath that it reports the match statistics behind the fit, matched star pairs, inlier ratio, residual RMS, and, for a fit flagged as out of range, exactly which axis failed the rig's expected transform and by how much. When distortion correction is active it adds the distortion residuals too.

**Copy** puts the whole block on the clipboard. This is what to paste into a problem report or into a conversation about a fit that isn't behaving: it carries everything needed to reproduce the read, no screenshot required.

## Related

- [Running alignment and reading the results](./evaluate-alignment.md)
- [What is the alignment reference and how do I change it?](./choose-an-alignment-reference.md)
- [When frames will not align](./when-frames-will-not-align.md)
- [Culling frames](../inspect/culling-frames.md)
- [Where do my FWHM and HFR numbers come from?](../inspect/star-detection-and-frame-quality.md)
