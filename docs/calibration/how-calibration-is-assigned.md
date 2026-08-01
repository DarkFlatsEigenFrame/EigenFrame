---
title: How does EigenFrame decide which masters calibrate which lights?
description: Every light carries its own bias, dark and flat assignment, matched on camera signature, exposure, set-temp tolerance and flat epoch, and overridable per frame.
---

# How does EigenFrame decide which masters calibrate which lights?

Calibration in EigenFrame is per frame. Every light carries three independent assignments, one each for bias, dark and flat, and each of them is in one of three states:

- **Unassigned.** No master has been chosen yet. The viewer shows an auto-suggestion marked *suggested* until you confirm one.
- **None.** You decided this light takes no master of that kind. This is a real choice and it sticks.
- **A specific master**, either found automatically or picked by you.

Because the assignments live on the frame, a mixed group resolves per frame. A session with two binnings, or lights that changed exposure halfway through the night, each get the master that matches them.

## The assignments fill themselves

Open a session, or a target's filter tab, and EigenFrame evaluates the lights in view and fills any assignment that is still unassigned. There is no button to press. While it runs you see *Evaluating light frames for automated calibration…*, and when it settles a line reports what it did:

`✓ Assigned calibration for 214 frames.`

Anything it could not match is listed underneath with the reason and a link to the fix. This is why a calibration status block sometimes changes a second after a page loads.

Filling only ever touches assignments that are still unassigned. A master you picked by hand, and a deliberate *none*, are left exactly as they are.

> **Screenshot:** Session page, calibration status line reporting assigned frames with one unresolved row beneath it.

## What each kind matches on

**Bias** matches the camera signature: instrument, gain, offset, readout mode, frame dimensions and binning. Where several masters qualify, the one built from the most frames wins, then the newest.

**Dark** matches the same camera signature, plus the light's own exposure time exactly, plus set temperature within a tolerance. The tolerance is per rig and defaults to 7 °C. Among the darks inside the tolerance, the nearest set temperature wins. Nothing outside it is ever chosen automatically.

**Flat** matches the rig, the frame dimensions and binning, and the filter, and it must sit inside the light's epoch. Among those, EigenFrame prefers a master whose pixel statistics are ready, then the nearest night to the light. A flat on the far side of an optical-train change is never assigned automatically. See [how long a flat is good for](./flat-epochs.md).

Which fields the camera signature contains is itself adjustable per rig, on the Equipment page, so a rig whose capture software never writes a readout mode can drop that field from the signature.

## A missing field never widens the match

Every field in the signature is compared strictly, and absence counts as a value. A light with no readout mode in its header matches only masters that are equally missing a readout mode. It never falls back to "match anything".

That rule is what makes an unmatched assignment honest rather than a silent mis-pairing, and it is why an unresolved row spells out every field it searched on, absences included:

`No matching dark master found (48 frames)`, and beside it the criteria: `QHY268M · gain 56 · no readout mode · 1×1 · 720 s @ 0 °C`

Read that line as a shopping list. Every term in it is something the master you need has to carry. If the term that stands out is one of the *no …* entries, the light itself is missing the field, and the fix is either a master that is missing it too, or dropping that field from the rig's signature.

## Reading the status

Session and target views show one line per light group with a tally for each kind:

- `bias ✓` every frame in the group has a master.
- `dark 8/12` eight frames of twelve are assigned; the rest are still unassigned.
- `flat none` every frame in the group is deliberately set to no flat.
- `✗` the assigned master has since been rejected or is missing, so it cannot apply.
- `⚠` the assigned flat is cross-epoch, or its pixel statistics are still being prepared.

A ✓ means assigned, not verified. To see whether the calibration is actually correcting the frame, look at the calibrated thumbnails on the [session page](../inspect/review-a-night.md).

## Overriding one frame

Open a frame in the viewer and go to its **Calibration** tab. Three pickers, one per kind, list every master that matches, ranked, with the automatic choice at the top. Flats are annotated with their night, how many days from this light, how many sub-flats went into them, their median DN, and a warning where one is cross-epoch. The best in-epoch flat carries a ★.

Choosing a master, or choosing **None**, applies to the open frame and nothing else. The panel says so. Each picker also offers **re-resolve**, which discards your choice for that one kind and hands it back to automatic resolution.

Where no master matches, the picker prints the criteria it searched on, in the same shopping-list form as above, with a link into Artifacts to find or build one.

> **Screenshot:** Viewer Calibration tab with the three master pickers and a ranked flat list showing the best match.

## Reassigning in bulk

Two bulk actions sit on the session page and the target's filter tab.

**Autodetect calibration** appears when frames in view have an assignment that has gone bad: the master was rejected, the master is missing, or a flat is now cross-epoch. It re-points just those frames at the best available master and leaves everything else untouched.

**Reset & reassign calibration** discards every current bias, dark and flat assignment in scope, including ones you set by hand and deliberate *none* choices, and re-derives them all from the best available masters. It confirms first, with the frame count and the scope named, and it cannot be undone. This is the only action that overwrites your own choices, so reach for Autodetect first.

> **Screenshot:** The Reset & reassign confirmation dialog showing the frame count and scope.

## Related

- [How long is a flat good for?](./flat-epochs.md)
- [What the flat verdicts mean](./flat-quality-verdicts.md)
- [Why is my dark or flat not being applied?](./when-calibration-does-not-bind.md)
- [Working a night](../inspect/review-a-night.md)
- [Will EigenFrame read my data?](../library/supported-file-formats.md)
