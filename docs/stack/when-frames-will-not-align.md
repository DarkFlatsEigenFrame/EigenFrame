---
title: Alignment failed on half my subs. Now what?
description: A symptom-first walkthrough for Out of band and Won't align results, covering the reference, stale detection, rig tolerances, hard fields, and when to accept or reject.
---

# Alignment failed on half my subs. Now what?

[Evaluate alignment](./evaluate-alignment.md) leaves every frame in one of five states: **Accepted**, **Aligned**, **Out of band**, **Won't align**, or **Not yet screened**. When a run comes back with a pile of the last three, work through the causes below in order. Most of the time the fit is telling you something specific, and looking at it in the [Alignment Viewer](./alignment-viewer.md) is the fastest way to find out what.

## Is the reference itself the problem?

Every frame is fitted against one reference, so a weak reference drags every fit down with it: low star count, poor focus, an odd crop, or a rotation far from the rest of your set. If most of a filter is failing while a handful of frames near the reference's own framing succeed, suspect the reference before anything else.

Open the reference frame and judge it on its own merits, then pick a better one from the viewer or from Cull by metric. See [what is the alignment reference and how do I change it](./choose-an-alignment-reference.md).

A reference can also be a rejected frame. Its stars still drive every fit even though it never enters a stack, and the target page flags this directly with a re-anchor link. See [if your reference gets rejected](./choose-an-alignment-reference.md#if-your-reference-gets-rejected).

## Is the star detection stale?

A fit works from each frame's star catalog. If that catalog was built before you assigned or changed calibration, it describes the frame as it was captured rather than as it calibrates, and re-running the fit reuses the same stale catalog.

Use **Force re-detect + evaluate** under **Advanced** on the Alignment panel. It re-detects every frame on its currently calibrated pixels and re-fits from there. Reach for this right after assigning masters, or whenever you suspect a detection ran before calibration was in place. Accepted fits are kept.

If you're not sure whether calibration or the matcher is at fault, **Re-detect (no calibration)** gives you a raw-pixel baseline to compare star counts against. A calibrated run that finds far fewer stars than the raw one points at the calibration, not the fit.

## Is the rig tolerance too tight for a real field rotation?

A target shot across many nights accumulates field rotation, and a target near the pole accumulates it fast. If your rotation tolerance is narrower than what actually happened between sessions, otherwise good fits land as Out of band instead of Aligned.

Widen **Rotation ± deg** or **Scale ± %** on the Equipment page, under **Alignment tolerances**, for that rig. The shipped defaults are 5.0° of rotation and about 2% of scale. If your subs span a meridian flip, leave **Allow 180° flip** on so a flip fits normally instead of reading as a mismatch.

> **Screenshot:** Equipment page, the alignment tolerances for a rig with a widened rotation window.

A tolerance change applies to fits made after it. Re-evaluate the filter to reclassify the existing frames under the new band.

## Is it a genuinely hard field?

Some fields are harder to match regardless of tuning:

- **Very sparse fields.** Too few stars leaves the matcher without enough points to lock a confident geometry.
- **Very dense fields.** A crowded field, or a wide field of view, gives the matcher many plausible-looking correspondences to choose between, and it can settle on the wrong one.
- **Cross-filter frames.** Narrowband filters produce a different, usually sparser, star field than broadband ones. A filter with markedly fewer detected stars than the rest of the target is more likely to struggle, since the reference framing was set from whichever filter won the original score, not necessarily this one.
- **Large rotations between frames.** The bigger the angular gap between a frame and the reference, the more the star pattern has to be recognized under distortion, and the more likely the fit fails outright rather than landing out of band.

Re-running the same evaluation on these produces the same answer. Judge the frame in the viewer instead: where the star field genuinely doesn't support a fit, move on.

## The center is sharp but the corners drift

The fits all read Aligned, the middle of the field is tight, and the stars at the edges sit one to a few pixels off. Stacked, that shows up as soft or doubled corners over a sharp core. The [Alignment Viewer](./alignment-viewer.md) marks these frames with a `corners drift ~N px` line and groups them on the target page as **Aligned, corners drift**; press **G** in the viewer for the corners grid to see it directly, and **[** and **]** to hop between the frames it applies to.

Nothing here is a bad match. A rotation, a scale and a translation describe the whole field with one number for size, so a field that is stretched more along one direction than another has no way to fit everywhere at once. Two ordinary causes produce exactly that:

- **Refraction low in the sky.** The atmosphere compresses the field along the altitude axis, more the lower you shoot, and the amount changes through the night as the target climbs or sets. Frames taken near the horizon drift most.
- **A meridian flip.** The flip turns the camera 180° in the field, so whatever pattern the optics impose on the corners turns with it. Frames from the two sides of the meridian then carry that pattern in opposite directions, and one fit cannot suit both.

Two things are worth doing, and they combine:

**Fit a rig correction.** Open one of the drifting frames in the viewer, choose **Rig** under [Distortion correction](./alignment-viewer.md#distortion-correction), and press **Apply to set**. That saves the choice, re-fits the filter, and fits one correction for the whole rig from every frame of this target. The pattern is fixed to the sensor, so frames from both sides of the meridian describe it from opposite directions and make it easier to pin down, which is why a set that spans a flip fits the best correction. Each frame then carries that warp field alongside its rotation, scale and translation, every stack built on it warps the pixels to match, and the frames the correction helps leave the **Aligned, corners drift** group. What stays in the group is what the correction could not describe.

For two or three frames rather than a filter, **Per-frame (advanced)** fits each one from its own stars; re-fit in the viewer and **Accept this fit**. Either way the diagnostics panel's residual field block says whether it helped: compare `outer third` against `post-rbf`, and a clear drop means the correction is describing something real.

A correction that would move pixels too far, fold the image, or leave the corners no better than the plain fit is refused, and those frames stay on their plain fit and stay in the group.

**Stack one side of the meridian at a time.** Where the drift follows the flip, the **Mount side** selector in the integrate panel stacks East or West alone. See [how do I stack](./integrate-aligned-frames.md#stacking-one-side-of-the-meridian). Two masters, one per side, keep two different corner patterns from being averaged into one.

## What Out of band is actually telling you

Out of band describes the geometry, not the quality of the match. The matcher found a self-consistent rotation, scale and translation, and that geometry falls outside what this rig is configured to expect. The fit and the tolerance are two separate things, and either one can be the one that's off.

If you know the rotation is real, for example a target you deliberately picked up again on a later night, the fit is correct and the tolerance is what needs adjusting. If the rotation looks wrong for what you actually shot, the fit itself is suspect even though it is internally consistent, and it's worth opening in the viewer before trusting it.

## When to accept manually, and when to reject

Open a flagged frame in the [Alignment Viewer](./alignment-viewer.md) and flip between it and the reference to judge the framing directly.

**Accept** it when the geometry looks right to your eye, whether or not it falls inside the tolerance band. Accepting locks the fit: it's excluded from any future automatic re-fit, and it holds until you reset it. An Out of band fit asks for confirmation before it locks, since you're knowingly overriding the tolerance; an Aligned fit accepts straight away.

**Reject** the frame instead when the framing is actually wrong, when the field is too sparse or too crowded to trust, or when the frame shouldn't be in the stack for reasons that have nothing to do with alignment, like trailing or cloud. A rejected frame drops out of the stack entirely and stops asking for attention.

Both actions are yours to take. The [Needs attention panel](./evaluate-alignment.md#the-needs-attention-panel) exists so you look at each flagged frame before deciding.

## Related

- [Running alignment and reading the results](./evaluate-alignment.md)
- [What is the alignment reference and how do I change it?](./choose-an-alignment-reference.md)
- [Judging a fit yourself](./alignment-viewer.md)
- [Integrating aligned frames](./integrate-aligned-frames.md)
- [Where do my FWHM and HFR numbers come from?](../inspect/star-detection-and-frame-quality.md)
- [Culling frames](../inspect/culling-frames.md)
- [Troubleshooting](../help/troubleshooting.md)
