---
title: My stars are sharp but the frame is dim. What metric catches that?
description: How EigenFrame's Transparency metric measures relative atmospheric transmission from matched-star photometry, where it appears, and why it's sometimes blank.
---

# My stars are sharp but the frame is dim. What metric catches that?

Transparency measures relative atmospheric transmission: how much of a star's light made it through the sky that night compared with the rest of the set. It catches haze and thin cloud that leave FWHM, HFR, eccentricity, and star count all looking normal, because a uniform haze dims every star together without blurring or scattering any one of them enough to move those metrics.

## How it's measured

For each frame, EigenFrame matches its detected stars against the same physical stars in the target's alignment reference, then compares brightness star by star across every match. A frame where the matched stars all read dimmer than their counterparts in the reference gets a low transparency value; a frame where they read brighter gets a high one. Using many matched stars at once keeps the result steady even if a few of them are variable.

The value is relative within the set, never an absolute figure. It's shown as a fraction of the batch's own clearest frames, so about 1.0 means as transparent as the best frames in that filter's set and lower means hazier. Comparing the number across two different targets, filters, or rigs tells you nothing.

## Where it appears

**Transparency** is a tab in Cull by metric, alongside FWHM, HFR, eccentricity, star count, SNR, and the rest. It only appears once at least one frame in the batch has a value; frames are ordered low to high like every other tab, and you set a low cut to reject the hazy end of the set.

> **Screenshot:** Cull by metric, the Transparency tab with a low-transmission run marked for rejection.

## Why it's sometimes blank

Transparency needs matched stars, and matches only exist once a frame has an alignment fit against the target's reference. A frame that's been through star detection but hasn't yet been fitted for alignment shows no transparency value. Running or re-running alignment for the target fills it in for every frame that fits well enough.

The value is read off the star catalog the fit was built on, so a frame carrying an old catalog can stay blank even after it aligns. Re-detect its stars, then run alignment again, and it fills in.

## Using it to cull

Sort the tab low to high and look at the histogram: a cluster of frames sitting well below the rest is a clear sign of haze or thin cloud that passed through partway into the run, even if those same frames looked fine on FWHM. Drag the low-cut boundary up to the point where the drop-off starts and commit the cull the same way as any other metric tab.

Because the axis is relative to the set, don't expect a fixed cutoff that works across targets. Judge it against the shape of that batch's own histogram: a tight cluster near 1.0 with a thin low tail is a good set with a handful of hazy subs, not evidence that the whole night was bad.

## Related

- [Star detection and frame quality](./star-detection-and-frame-quality.md)
- [Culling frames](./culling-frames.md)
- [Choose an alignment reference](../stack/choose-an-alignment-reference.md)
- [Evaluate alignment](../stack/evaluate-alignment.md)
- [Working a night](./review-a-night.md)
