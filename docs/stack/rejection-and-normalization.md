---
title: Which rejection algorithm should I use, and what does Localized normalization do?
description: What Sigma Clipping, Linear Fit Clipping, Min/Max and No Rejection each earn their place for, what Localized normalization actually corrects, and the output pedestal.
---

# Which rejection algorithm should I use, and what does Localized normalization do?

Rejection and normalization are set together, alongside quality settings and the output pedestal, wherever you integrate a stack. See [Integrating aligned frames](./integrate-aligned-frames.md) for how to reach the controls and run the stack itself; this page is about what each option actually does.

## Rejection

Rejection decides, pixel by pixel, which of the samples across your frames get thrown out before the survivors are combined.

**No Rejection.** Every sample counts. Reach for this on a stack of two or three frames, where a statistical cut has too little to work from, or on a set you already know is clean and want combined intact.

**Min/Max Clipping.** Drops the single highest and single lowest sample at each pixel, no matter how far they actually deviate from the rest. It is a fixed, predictable cut rather than a statistical one, useful on a small stack where you know a given pixel has exactly one bad value in it, such as one frame with a trail crossing that spot.

**Sigma Clipping.** The default. Iteratively rejects samples that fall outside **Low σ** / **High σ** of a robust central value for that pixel, refitting on the survivors for up to **Max iter** passes. Shipped defaults are 3.0 low, 3.0 high, 5 iterations. This is where most stacks should stay: it clears satellite and aircraft trails, cosmic ray hits and other transients without needing a large number of frames to do it.

> **Screenshot:** The integration settings column with Sigma Clipping selected and its low, high and iteration fields.

**Linear Fit Clipping.** Fits a line to each pixel's samples, sorted by value, and rejects outliers from their distance to that fit rather than from a single central value. It shares the same **Low σ** / **High σ** / **Max iter** controls as Sigma Clipping. Reach for it on a stack with a heavy, asymmetric outlier population, plane-heavy skies, a dense run of satellite passes, or subs shot under noticeably uneven conditions, where a plain sigma clip's single center gets dragged around by the tail.

## Normalization

Normalization brings every frame to a shared level before combining, so the combine isn't fighting a level difference between frames on top of whatever rejection is doing.

**None.** Frames combine at the levels they already carry. Correct where the set already agrees in background and dispersion.

**Additive.** Adds a constant per frame so each frame's level matches a shared reference, correcting a level shift and leaving each frame's dispersion as it is.

**Multiplicative.** Scales each frame by a constant to match a shared reference level. This is the default for flat masters, where the dispersion across a frame is the vignetting pattern you want preserved.

**Additive with Scaling.** The default for light frames. Adds an offset and scales for dispersion together, so it corrects both a level shift (light pollution creeping in, moonlight) and a difference in depth or transparency between subs.

**Localized.** Models each frame's background and brightness region by region and matches those regions against a shared reference background, added back once the frames are combined. It sits in the same select as the four methods above and supersedes them: pick it and it is the normalization in force.

Reach for it when your background varies across the frame: a light-pollution gradient that slopes corner to corner, moon glow brighter on one side than the other, or vignetting residue left over from your flats. The app describes it the same way in the panel:

> Matches background and brightness across each part of the frame, best for gradients like light pollution, moon, or vignetting.

> **Screenshot:** The Normalization select set to Localized, with its description text about matching background and brightness across each part of the frame.

## Output pedestal (DN)

A baseline added to the stack's output so the stored image stays positive. Normalized, background-subtracted signal dips below zero at individual pixels, and the pedestal lifts the whole frame clear of the floor so those pixels keep their true relative value.

Set per rig on the Equipment page, under **Output pedestal (DN)**. Leaving it blank uses the shipped default of 250 DN.

> **Screenshot:** The Equipment page rig settings showing the Output pedestal (DN) field with its placeholder value.

## Related

- [Integrating aligned frames](./integrate-aligned-frames.md)
- [Running alignment and reading the results](./evaluate-alignment.md)
- [What is the alignment reference and how do I change it?](./choose-an-alignment-reference.md)
- [Culling frames](../inspect/culling-frames.md)
- [How calibration is assigned](../calibration/how-calibration-is-assigned.md)
