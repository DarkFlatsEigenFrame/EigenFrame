---
title: It says "Boundary candidate" on my flats. What do I do?
description: What each flat verdict badge means (Clean, Flagged frames, Whole batch suspect, Possible dew, Rotation groups, Boundary candidate) and what to do about each one.
---

# It says "Boundary candidate" on my flats. What do I do?

Every night and filter of flats gets a verdict badge, computed automatically as soon as the flats are cataloged. The badge tells you whether that batch is trustworthy on its own, and whether it still matches the flats around it.

## The badges

- **✓ Clean.** This batch is consistent with its siblings. No action needed.
- **⚠ Flagged frames.** One or more individual frames deviate from the rest of the batch.
- **⚠ Whole batch suspect.** The whole batch reads elevated together, so the verdict is about the batch, not about any one frame in it. When the frames move together as a smooth gradient, the likely cause is a passing cloud or a veil sweeping across the field during the run; when they disagree with each other with no stable majority, no single cause fits. Either way every frame in the batch is flagged, and rejecting the batch does not strand that night's lights: a flat master from another night in the same epoch covers them.
- **⚠ Possible dew.** The batch is softer or noisier than the one before it, consistent with dew or haze on the optics. When the rig's tube temperature also shows a real overnight drop, this promotes to **⚠ Dew**.
- **◐ Rotation groups.** The night's flats for this filter were shot at more than one rotator angle, and the groups measure as genuinely different surfaces. No individual frame is flagged: the verdict is about how the batch combines, not about frame quality. The build plan for the night keeps the groups apart, one master per rotation group, unless you choose **Merge anyway**.
- **⚡ Boundary candidate.** This batch shows a localized, persistent difference against the previous night's flats, the signature of a new dust mote or an actual change to the optical train, not a one-off bad frame.

## Why the badge is what it is

A single bad frame and a real optical change can look identical if you only glance at one flat. The distinction is how the disagreement behaves over the run.

An isolated frame that stands out from its neighbors, and nowhere else, is a transient: a flicker, a passing bit of debris, a brief wobble. That's a **Flagged frame**.

A batch that gradually softens or gets noisier as the run continues, especially a morning batch compared to the evening before it, is a progressive trend, and that's what **Possible dew** and **Dew** track.

A difference that shows up in the same place on the sensor and holds steady when compared against the previous night, rather than fading in or out, is a persistent shift. That's what **Boundary candidate** flags: something about the optical path itself has changed since the last time flats were shot.

**Whole batch suspect** sits apart from all three: it's a whole batch reading elevated together, either as a smooth gradient (a cloud sweeping through) or without one, and the conclusion names the batch rather than any frame in it.

**Rotation groups** is the one verdict that is not about quality at all. A night's flats sometimes arrive at more than one rotator angle, one set per target, and that alone is unremarkable: everything downstream of the rotator, dust motes included, turns with the camera, so sets shot at different angles usually measure as the same surface and combine into one deeper master. The night's panel shows the receipt either way: the rotation groups with their angles and frame counts, and the measured difference between their surfaces stated against the threshold that would matter. The batch stays **Clean** when they agree. When the surfaces measure as genuinely different, the cause sits upstream of the rotator, an illumination pattern that is not centered on the sensor and so sweeps around the field as the camera turns. That is what the verdict flags: one merged master would miscorrect the lights at both angles, so the groups are kept apart instead.

## What to do about it

Two actions are offered, and which one applies depends on the badge:

- **Reject N flagged.** Rejects the specific frames the verdict named outright, the same as rejecting them by hand. Flats are never down-weighted, only rejected or kept. This button appears whenever the verdict identified frames worth removing, whether the badge is Flagged frames, Whole batch suspect, or Dew.
- **Mark optical-train change.** Only offered on a **Boundary candidate** verdict. Confirming it records the date as the point your optical train changed, which is what tells EigenFrame the flats before and after this point no longer calibrate the same lights. Read [how long a flat is good for](./flat-epochs.md) for what that boundary actually does.
- **Merge anyway.** Only offered on a **Rotation groups** verdict. The default plan builds one master per rotation group, and [calibration assignment](./how-calibration-is-assigned.md) matches each light to the master nearest its own angle. Merge anyway sets this night to build one combined master instead; **Revert to split** puts the default back. The choice covers the whole night, every filter at once, and it sticks until you change it.

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
