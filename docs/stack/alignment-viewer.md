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

The bottom filmstrip and the scrubber above it move you between frames. The left/right arrow keys do the same. Reject rings on the filmstrip thumbnails carry over from the rest of the app, and an amber ring marks every frame whose corners drift.

**▶ flip through**, or **P**, walks the filter on its own at about four frames a second, skipping rejected frames and stopping at the last one. The button reads **❚❚ stop** while it runs, and any input stops it: another key, the wheel, the scrubber, a click. A frame that jumps, trails or drifts announces itself at that rate far more readily than one at a time.

**‹ drift** and **drift ›**, either side of the scrubber, or **[** and **]**, hop straight to the previous or next frame whose corners drift, skipping rejected frames and the reference. They grey out when there is nothing further to hop to, so a filter with no drift in it leaves both inert.

## Seeing where the fit agrees

Press **M**, or the **matches** toolbar button, to overlay the matched-pair vectors: a short line from each reference star to where the fit places the corresponding star in the current frame. A good fit draws mostly dots with no visible vectors. A bad one fans out or scatters, and that shape is often the fastest way to tell a real problem from a fine one.

> **Screenshot:** The matched-pair overlay on a frame, showing matched and unmatched stars.

## Looking at the corners

Press **G**, or the **corners** toolbar button, to swap the single canvas for a grid of nine cells: the four corners of the field, the four edge midpoints, and the center, all side by side at 1:1. A field that is sharp in the middle and drifting at the edges reads at a glance here, which is the thing a single framed view hides.

The nine cells are fixed windows onto the reference canvas, so pan and zoom are off while the grid is on, and a label on the canvas says so. Leaving the grid returns you to the framing you had.

Every cell draws at full resolution as soon as that frame is prepared, so stepping or flipping through a filter in the grid moves as quickly as the filmstrip does. Opening the grid starts preparing the whole filter, working outward from the frame you are on, so the frames you have not reached yet are ready by the time you get to them. A frame that is still preparing shows the grid at low resolution in the same framing, and sharpens in place.

Everything else keeps working: hold **Space** to flip all nine cells to the reference at once, scrub or arrow through frames, press **R** to reject, and **Accept this fit** and **Reset** act on the frame on screen as they always do. The matched-pair overlay draws per cell.

> **Screenshot:** The corners grid on a frame whose center is tight and whose corners are offset.

### corners drift

Under the verdict, a frame whose stars sit tight in the middle and a couple of pixels off near the edges carries an extra amber line:

`corners drift ~2.4 px`

This is advisory and nothing else. The frame is aligned, it stays aligned, it stays in the stack, and the verdict above it is unchanged. It is there because a plain rotation, scale and translation cannot express a field that is stretched more along one axis than the other, which is what refraction low in the sky and optics turned by a meridian flip both produce.

Under the line, the viewer names the way through it: choose **Rig** under Distortion correction in the panel on the right, then **Apply to set**. The frames it helps leave the drift group, and the **drift** hops walk whatever is left. [When frames will not align](./when-frames-will-not-align.md#the-center-is-sharp-but-the-corners-drift) covers the whole of it.

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

**Save for this filter** stores the current slider values against the filter; frames don't re-fit until you also **Apply to set**, which saves and then re-evaluates every frame in the filter with those settings, or until you next run [Evaluate alignment](./evaluate-alignment.md).

## Distortion correction

Below the matching settings, **Distortion correction** sets how much more than a rotation, scale and translation a fit may carry. A correction is a warp field alongside the plain transform, and it is what straightens a field the plain fit cannot express. Three choices:

**None** keeps every fit to the plain transform.

**Rig** fits one correction for the whole rig, from every frame of this target at once. It works best when the set includes frames from both sides of the meridian, since the two sides show the same pattern from opposite directions and together pin it down. **Apply to set** saves the choice, re-fits the filter, and fits that rig correction from the result.

**Per-frame (advanced)** fits a separate correction for each frame from that frame's own matched stars, and reveals the kernel choice, support factor and regularization amount. The support factor is how far each control point's influence reaches, and higher is smoother. Regularization pulls the warp back toward the plain fit on a 0 to 1 scale relative to the kernel's own reach; 0.1 is a sensible starting point, and higher is gentler.

A line under the chooser reports the correction on the frame in front of you: where it came from, its **max shift**, the furthest any pixel moves from where the plain fit alone would put it, and its **corner error**, what the stars near the edges still miss by once it is applied.

### When a correction is refused

A correction is applied only if it passes a check first. One that would move pixels too far, fold the image over itself, or leave the corners no better than the plain fit is refused, and those frames stay on their plain fit. The line under the chooser says which of the three it was, and the frame carries a **correction not applied** badge in the top right of the canvas with the same reason in its tooltip.

After **Apply to set** with **Rig** chosen, a line below the button reports how many frames the correction was fitted from along with its max shift and corner error, or says it was refused and why.

### Accepting a per-frame correction

While you are still tuning a per-frame correction it is not saved anywhere, so the canvas draws the plain part of the fit only and says so:

`Distortion correction not shown until this fit is accepted`

**Accept this fit** to save it. From then on the viewer draws that frame already warped into the reference's own canvas, corners included, and every stack built on it applies the same warp to the pixels it combines. The residual field block in the diagnostics panel is how you judge whether the correction is worth having before you accept.

## The diagnostics panel

Below the controls sits a diagnostics panel: deliberately technical, deliberately dense, and meant to be copied rather than read as prose. It names the frame and reference by id, states the verdict, lists the matching parameters in effect, and gives the fitted transform as scale, rotation and translation. Underneath that it reports the match statistics behind the fit, matched star pairs, inlier ratio, residual RMS, and, for a fit flagged as out of range, exactly which axis failed the rig's expected transform and by how much. It also names the distortion correction in effect and, where a frame carries one, its source, max shift and corner error.

A **residual field** block says where in the frame the error sits, and how much of it a linear model accounts for:

```
residual field (stored):
  center third    0.412 px rms
  outer third     2.640 px rms
  anisotropy      x 0.981% · y -0.204%
  affine residual 0.508 px rms
  post-rbf        0.372 px rms
```

The two thirds are the residual RMS inside the central third of the field against the outer third, so an outer figure several times the center is the corner drift stated as a number. The anisotropy is the per-axis scale a least-squares affine fits to the residuals, and a figure well away from zero on one axis alone is the signature of a field compressed along one direction. The affine residual is what that linear model leaves behind, and `post-rbf` is the residual left after distortion correction, so a figure well under the outer third says the warp is earning its place. The block reads from the live fit while you are tuning and from the stored fit otherwise, and says which.

**Copy** puts the whole block on the clipboard. This is what to paste into a problem report or into a conversation about a fit that isn't behaving: it carries everything needed to reproduce the read, no screenshot required.

## Related

- [Running alignment and reading the results](./evaluate-alignment.md)
- [What is the alignment reference and how do I change it?](./choose-an-alignment-reference.md)
- [When frames will not align](./when-frames-will-not-align.md)
- [Culling frames](../inspect/culling-frames.md)
- [Where do my FWHM and HFR numbers come from?](../inspect/star-detection-and-frame-quality.md)
