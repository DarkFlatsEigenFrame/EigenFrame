---
title: What is Pixel Repair and should I leave it on?
description: "Pixel Repair: what the hot, cold and dark-guided passes clean, why it runs before rejection gets involved, and the Hot/Cold/Guided sigma thresholds."
---

# What is Pixel Repair and should I leave it on?

Leave it on. Pixel Repair ships enabled for both hot and cold on every stack.

## What it does

Pixel Repair cleans stationary sensor defects, hot pixels and cold pixels, in each frame individually. It runs after calibration and before warping, so a defect is fixed in the frame's own geometry rather than smeared across the output canvas by the warp.

A statistical pass finds a pixel that sits far above (hot) or below (cold) its immediate neighbors, judged against the local MAD. A star core is not mistaken for a hot defect: an isolation guard checks the pixel against its second-highest or second-lowest neighbor too, and a real star's point-spread function lifts the neighbors along with the core, so the margin never clears. A defect stands alone; a star does not.

Whenever a frame has a dark master assigned, a second pass runs alongside the statistical one: it checks the sites the dark itself flags as defective and adjudicates each one against the light, using a more sensitive threshold since it already has independent evidence the site is bad. This guided pass only touches frames with a dark master; a frame with no dark relies on the statistical pass alone.

> **Screenshot:** The Pixel Repair block in the integrate panel with hot and cold enabled.

## Why it runs before rejection, not instead of it

Sigma clipping and Linear Fit Clipping (see [rejection and normalization](./rejection-and-normalization.md)) reject outlier samples pixel by pixel across the stack, but their budget of iterations and tolerance is finite. A stationary defect sits at the same coordinate in every frame, so rejection cannot vote it out the way it votes out a trail or a transient that only touches one or two frames. Cleaning defects before the combine means rejection spends its passes on the things only rejection can fix: trails, cosmic ray hits, and other one-off transients.

## The thresholds

Three MAD-sigma controls sit under the two toggles, all shipped at defaults tuned for typical sensor noise:

- **Hot σ**, the statistical hot-pixel threshold. Default 6.
- **Cold σ**, the statistical cold-pixel threshold. Default 6.
- **Guided σ**, the dark-guided pass's threshold at dark-flagged sites. Default 2.75, tighter than the statistical passes because the dark master already supplies independent evidence.

Raise Hot σ or Cold σ if repair is eating real signal, a dense star field losing tight cores despite the isolation guard, or a nebula's brightest knot reading as a defect. Lower them if a rig runs unusually thermally stable and known bad pixels are slipping through at the default margin. Guided σ rarely needs touching: it only matters on frames with a dark master, and loosening it starts trusting sites the dark flagged but the light doesn't clearly corroborate.

## Where the controls live

The **Pixel Repair** block sits in the settings column of the [integrate panel](./integrate-aligned-frames.md), alongside rejection, normalization and quality weighting. Settings there are per stacking session; use [stack presets](./stack-presets.md) to carry a tuned set of thresholds across targets on the same rig.

## Related

- [Rejection and normalization](./rejection-and-normalization.md)
- [Integrating aligned frames](./integrate-aligned-frames.md)
- [How calibration is assigned](../calibration/how-calibration-is-assigned.md)
- [Quality weighting](./quality-weighting.md)
- [Stack presets](./stack-presets.md)
