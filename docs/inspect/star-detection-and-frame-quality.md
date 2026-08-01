---
title: Where do my FWHM and HFR numbers come from?
description: How EigenFrame detects stars, the FWHM, HFR, eccentricity, SNR and transparency metrics it reports, when detection runs, and how the acceptance sliders work.
---

# Where do my FWHM and HFR numbers come from?

Every Light frame gets a star catalog: a list of detected stars, each with position, FWHM, HFR, eccentricity, and SNR. From that catalog EigenFrame reports a star count and the median FWHM, HFR, eccentricity, and SNR for the frame. These are the values you rank by in **Cull by metric** and see summarized on a frame's **Stars** tab.

There is also a transparency figure: a relative measure of atmospheric transmission, built from differential photometry across matched stars in the set. It catches haze and thin cloud that leave stars looking sharp while the sky dims. Transparency is relative within a set, never an absolute figure, and it lives on the Transparency tab of Cull by metric. It depends on alignment, not just detection: it only appears once a frame has an alignment fit with enough matched stars against the reference, so a frame that's been detected but not yet evaluated for alignment shows it blank.

## When detection runs

Detection runs the first time a frame needs its full-resolution detail: opening it in the viewer, preparing it for a stack, or a Targets-page metrics pass across a whole session. That first pass reads the raw, uncalibrated pixel data.

It runs again, this time against calibrated pixel data, once you assign or resolve calibration masters for the frame.

It also runs on demand: open a frame whose catalog isn't ready yet and its **Stars** tab shows *Detecting stars…* while detection completes, typically a few seconds.

> **Screenshot:** Viewer Stars tab with the star overlay and the acceptance sliders.

## The star overlay

Every detected star draws as a circle sized to its FWHM. Stars that pass the current acceptance settings draw in accent colour; stars that fail them draw muted, so you can see at a glance what the sliders are excluding without leaving the frame.

## Reading the raw-data note

If a frame's catalog was built before calibration masters were assigned to it, its Stars tab carries an amber note: *Detected on raw (pre-calibration) data.* The FWHM, HFR, and eccentricity you're looking at were measured on the frame as captured, not as calibrated, so treat them as provisional. Assigning calibration masters to the frame triggers a fresh detection pass against the calibrated pixels, and the note disappears once that lands.

## The acceptance sliders

Four sliders on the Stars tab set which detected stars count toward the summary: **min fwhm**, **max fwhm**, **max ecc**, and **snr ≥**. Moving any of them re-filters the catalog immediately, no re-detection involved, and the accepted count and the median FWHM/HFR/eccentricity below update live as you drag.

**Save for rig** persists the current slider values to the frame's equipment group, so every frame on that rig opens with the same acceptance from then on. The app confirms with *Saved. Existing frames refresh on re-detection.*

## Quality thresholds and flagged frames

Flagging is advisory. It marks frames for your attention and leaves every decision to you: a flagged frame stays in the catalog, stays in your stacks, and stays in alignment exactly as it was. What integration and alignment act on is [rejection](./culling-frames.md), which is always something you do yourself.

Quality thresholds live on the Equipment page, per rig: **Max FWHM**, **Max HFR**, **Min stars**, and **Max ecc**. All four are blank by default, so a rig flags nothing until you fill one in. Once a threshold is set, any frame whose stored metric falls the wrong side of it is flagged, and you see it three ways: an amber marker on the frame's tile, an **N flagged** count on the group header, and a **Reject flagged (N)** action on the group. That action is a one-click way to reject exactly those frames, described in [culling frames](./culling-frames.md).

A frame is flagged only once stars have been detected on it, since the thresholds are compared against its measured metrics.

> **Screenshot:** Equipment page, the quality thresholds for a rig with Max FWHM and Min stars filled in.

## Two settings blocks, two behaviours

The Equipment page carries both blocks, and they answer different questions.

**Acceptance settings** (SNR ≥, Min FWHM, Max FWHM, Max ecc) define what counts as a **star**. They shape the measurement itself, so a frame picks up a change the next time it is detected.

**Quality thresholds** (Max FWHM, Max HFR, Min stars, Max ecc) define what counts as a **good frame**. They are compared against metrics already stored, every time the catalog is read, so a change takes effect the moment you save it.

That is why loosening a threshold un-flags frames straight away, while loosening an acceptance slider waits for a re-detection.

Frames you rejected while a threshold was tighter stay rejected when you loosen it. Rejecting is your decision and it stands until you take it back with un-reject.

## Related

- [Culling frames](./culling-frames.md)
- [Working a night](./review-a-night.md)
- [How does EigenFrame decide which masters calibrate which lights?](../calibration/how-calibration-is-assigned.md)
- [Troubleshooting](../help/troubleshooting.md)
