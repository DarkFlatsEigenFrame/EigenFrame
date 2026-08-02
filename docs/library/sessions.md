---
title: Why is my session date a day off, and why did one night split in two?
description: How EigenFrame turns capture timestamps into a session date, why one night on two rigs is two sessions, and how an unassigned frame gets resolved.
---

# Why is my session date a day off, and why did one night split in two?

A session is one night on one rig. See [rigs and equipment groups](./rigs-and-equipment-groups.md) for how a rig is discovered; everything below assumes a frame already carries one.

## The night boundary

EigenFrame takes a frame's local capture time, shifts it back twelve hours, and truncates the result to a date. That shifted date is the session. A frame at 21:00 and a frame at 02:00 the same calendar night both land twelve hours earlier than their clock time, so they fall on the same date, and that date is the evening the night started, not the morning it ended.

This is also the answer when a session's date looks off by a day: a frame shot right after local midnight belongs to the previous evening's session by design, not by error.

## Two rigs, two sessions

The night boundary is computed per rig. If two rigs both shot on the same calendar night, each produces its own session for that date, scoped to its own frames, its own calibration, and its own totals. A session never mixes frames from two rigs.

## Frames with no local timestamp

An integrated master built outside EigenFrame typically carries only a UTC capture time, with no local timestamp. EigenFrame estimates local time from that UTC instant and the observation site's longitude, then applies the same twelve-hour night rule. If the site's longitude isn't known either, there's nothing to place the frame on a local night, and it doesn't get a session date at all, so it won't appear on the Sessions page.

## Frames whose rig couldn't be identified

A frame that matched no rig, or matched more than one, still gets a session date but no rig. Its session card carries an **unassigned** tag, and an expandable panel below the card lists each unmatched setup by instrument and telescope, with a picker to assign it to a rig by hand. Assigning it moves the frame in immediately; add a matching rule to the rig afterward so future frames from that setup land there on their own. The session page itself shows the same bucket as an **Unassigned** entry in its rig selector, with a banner explaining why the frames are there and a link to the equipment rules.

> **Screenshot:** A session card's unassigned panel open, with one setup picked and a rig selected in the picker.

## The sessions list

Open **Sessions** from the library nav to see every night you've cataloged, newest first. Each card is one date, with a line under the header giving how many targets, how many hours, and how many lights are passing versus their total count for that night. A night with more than one rig carries a "N setups" tag, and the card lists a scoped grid for each rig below it. Click a date, or a rig's row within a multi-rig card, to open that rig's session page.

> **Screenshot:** The sessions list showing two rigs on the same night.

From there, [reviewing a night](../inspect/review-a-night.md) covers the page itself: sky conditions, the target and filter grid, calibration status, and the calibrated contact sheets. Calibration matching against a session's flats and darks is covered in [how calibration is assigned](../calibration/how-calibration-is-assigned.md).

## Related

- [Rigs and equipment groups](./rigs-and-equipment-groups.md)
- [How do I review a night?](../inspect/review-a-night.md)
- [How does EigenFrame decide which masters calibrate which lights?](../calibration/how-calibration-is-assigned.md)
- [Troubleshooting](../help/troubleshooting.md)
