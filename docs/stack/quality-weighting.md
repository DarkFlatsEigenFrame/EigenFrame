---
title: How do I make my good frames count more?
description: How the six importance sliders, the weight floor, and the best-N normalization baseline turn frame quality into stacked SNR, and how to read the projected relative SNR readout.
---

# How do I make my good frames count more?

Every frame in a stack carries a combine weight. A pristine sub can count for more than a marginal one without you having to reject the marginal one outright. The controls for this live in the same settings column as rejection and normalization; see [Integrating aligned frames](./integrate-aligned-frames.md) for where that column is and [Rejection and normalization](./rejection-and-normalization.md) for the rest of it. This page is about the weight itself: what sets it, and what it costs you when you push it around.

## Objective baseline, subjective importance

Each frame's weight starts from an objective signal-to-noise baseline built from that frame's own stars and background: a cleaner, deeper frame already outweighs a noisier one before you touch a single slider. Your six importance sliders sit on top of that baseline and shift it toward what you care about. With every slider at zero the weighting is the objective baseline alone, the mix that maximizes stacked SNR. Push a slider up and frames that score well on that metric count for more, which can trade away some of that theoretical SNR for a stack that better matches your taste, sharper stars, rounder stars, whatever the slider expresses. The **Projected relative SNR** readout, covered below, is how you see that trade as it happens.

## The six importance axes

Each axis is a slider from 0 to 100, one direction fixed by the metric, lower is better for FWHM, HFR, eccentricity and background, higher is better for star count and SNR. You only set how much a metric matters; the app applies the direction.

- **FWHM**, sharpness. Shipped default **15**.
- **HFR**, half-flux radius. Shipped default **0**.
- **Eccentricity**, roundness. Shipped default **5**.
- **Star count**, transparency and depth. Shipped default **20**.
- **SNR**, per-star detection SNR. Shipped default **15**.
- **Background**, sky background level. Shipped default **0**.

Background defaults to zero because a high background usually means bad data to remove with a threshold or a reject, not data to keep and merely down-weight.

> **Screenshot:** The Ranking tab's importance sliders with their shipped default values.

## Weight floor

A floor stops one exceptional frame from swamping the rest and stops a middling frame from vanishing to almost nothing. It reads as a single percentage: the worst kept frame still counts at least that fraction of the best frame's weight. The shipped default is **20%**.

## Normalization reference (best N)

Before frames combine, each one is matched to a shared baseline level. That baseline is built from the top **N** frames of the same filter rather than one arbitrary frame, the median of their stats, so a single mediocre frame never anchors the whole stack. The shipped default is **5** frames. The panel states it plainly: baseline equals the median stats of the top-N frames of this filter.

## Localized quality weighting

Frame quality is not uniform across the field. Corners can be softer than the center, and a meridian flip rotates that pattern relative to the sky. Localized quality weighting weights each region of every frame by its own local sharpness and quality, on top of your importance weights, rather than treating each frame as one flat number. It is on by default; turn it off to weight each frame uniformly across its whole area.

> **Screenshot:** The Localized quality weighting toggle with its helper text about corners, center, and meridian flips.

## The Ranking tab and projected relative SNR

The integrate panel's **Ranking** tab lists every contributing frame in ranked order with its computed combine weight, so you can see the effect of your importance settings on the actual set of frames before you submit. It stays live as you move a slider or change the best-N count.

Above the list sits **Projected relative SNR**: a percentage of the SNR the stack would reach at the fully objective, sliders-neutral weighting. It is the honest feedback loop for the importance sliders. A value near 100% means your taste is nearly free; a lower value means the frames you are favoring are costing you stacked signal-to-noise, and now you can see the size of that cost instead of guessing at it.

> **Screenshot:** The integrate panel's Ranking tab with the projected relative SNR readout.

## Where importance is authored

The six importance sliders are authored in [Cull by metric](../inspect/culling-frames.md#cull-by-metric), not in the integrate panel. There they are live controls with a histogram; here in the integrate panel they show as read-only context, collapsed to a one-line summary by default with a control to expand and see the full set of sliders. Only the weight floor and the best-N count stay editable from the integrate panel itself.

A saved set of importance weights can live at three scopes: a single filter, a whole target, or the rig's default, and the panel shows which scope is currently supplying the values in use.

## Related

- [Integrating aligned frames](./integrate-aligned-frames.md)
- [Rejection and normalization](./rejection-and-normalization.md)
- [Culling frames](../inspect/culling-frames.md)
- [Star detection and frame quality](../inspect/star-detection-and-frame-quality.md)
- [Where stacks are saved](./where-stacks-are-saved.md)
