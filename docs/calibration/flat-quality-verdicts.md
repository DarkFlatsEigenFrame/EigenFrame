---
title: It says "Boundary candidate" on my flats. What do I do?
description: What each flat verdict badge means (Clean, Flagged frames, Cloud/veil, Possible dew, Boundary candidate) and when to reject frames versus mark an optical-train change.
---

# It says "Boundary candidate" on my flats. What do I do?

Every night and filter of flats gets a verdict badge, computed automatically as soon as the flats are cataloged. The badge tells you whether that batch is trustworthy on its own, and whether it still matches the flats around it.

## The badges

- **✓ Clean.** This batch is consistent with its siblings. No action needed.
- **⚠ Flagged frames.** One or more individual frames deviate from the rest of the batch.
- **⚠ Cloud / veil.** The whole batch reads elevated together, consistent with a passing cloud or a veil sweeping across the field during the run. If the frames don't move together as a smooth gradient, the same badge instead reads **⚠ Unstable batch**: the frames disagree with each other in a way that doesn't fit a single sweeping cause.
- **⚠ Possible dew.** The batch is softer or noisier than the one before it, consistent with dew or haze on the optics. When the rig's tube temperature also shows a real overnight drop, this promotes to **⚠ Dew**.
- **⚡ Boundary candidate.** This batch shows a localized, persistent difference against the previous night's flats, the signature of a new dust mote or an actual change to the optical train, not a one-off bad frame.

## Why the badge is what it is

A single bad frame and a real optical change can look identical if you only glance at one flat. The distinction is how the disagreement behaves over the run.

An isolated frame that stands out from its neighbors, and nowhere else, is a transient: a flicker, a passing bit of debris, a brief wobble. That's a **Flagged frame**.

A batch that gradually softens or gets noisier as the run continues, especially a morning batch compared to the evening before it, is a progressive trend, and that's what **Possible dew** and **Dew** track.

A difference that shows up in the same place on the sensor and holds steady when compared against the previous night, rather than fading in or out, is a persistent shift. That's what **Boundary candidate** flags: something about the optical path itself has changed since the last time flats were shot.

**Cloud / veil** sits apart from all three: it's a whole batch reading elevated together, either as a smooth gradient (a cloud sweeping through) or without one (an unstable batch).

## What to do about it

Two actions are offered, and which one applies depends on the badge:

- **Reject N flagged.** Rejects the specific frames the verdict named outright, the same as rejecting them by hand. Flats are never down-weighted, only rejected or kept. This button appears whenever the verdict identified frames worth removing, whether the badge is Flagged frames, Cloud / veil, or Dew.
- **Mark optical-train change.** Only offered on a **Boundary candidate** verdict. Confirming it records the date as the point your optical train changed, which is what tells EigenFrame the flats before and after this point no longer calibrate the same lights. Read [how long a flat is good for](./flat-epochs.md) for what that boundary actually does.

Nothing is ever auto-rejected, and no boundary is ever created without you confirming it. A Boundary candidate badge is only ever a proposal until you click **Mark optical-train change**.

A related cross-filter banner can appear above a night's flats when a morning batch across multiple filters dewed together, with the same two-tier reject: the frames the dew actually touched, or, more aggressively, every filter's entire morning batch at once.

> **Screenshot:** Session page, flat verdict banner showing Boundary candidate.

## Where verdicts appear

Verdict badges sit on the flat thumbnails wherever a night's flats are shown: the per-night panel you open from a session or from the equipment group's flat timeline. Each evening and morning batch for a filter carries its own badge.

While a verdict is still being computed, the badge area shows a progress readout instead, counting how many sub-batches are ready. Once a verdict exists but is being recomputed, for example right after you reject a frame, the badge dims and pulses until the fresh verdict lands.

> **Screenshot:** Flat night panel with one batch's badge dimmed and pulsing during a recompute.

## Related

- [How does EigenFrame decide which masters calibrate which lights?](./how-calibration-is-assigned.md)
- [How long is a flat good for?](./flat-epochs.md)
- [Why is my dark or flat not being applied?](./when-calibration-does-not-bind.md)
- [Working a night](../inspect/review-a-night.md)
- [Culling frames](../inspect/culling-frames.md)
