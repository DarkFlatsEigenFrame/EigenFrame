---
title: How does EigenFrame decide which masters calibrate which lights?
description: Every light carries its own bias, dark and flat assignment, matched on camera signature, exposure, set-temp tolerance and flat epoch, and overridable per frame.
---

# How does EigenFrame decide which masters calibrate which lights?

Calibration in EigenFrame is per frame. Every light carries three independent assignments, one each for bias, dark and flat, and each of them is in one of three states:

- **Unassigned.** No master has been chosen yet. The viewer shows an auto-suggestion marked *suggested* until you confirm one.
- **None.** You decided this light takes no master of that kind. This is a real choice and it sticks.
- **A specific master**, either assigned automatically or chosen by you. The viewer labels which.

Because the assignments live on the frame, a mixed group resolves per frame. A session with two binnings, or lights that changed exposure halfway through the night, each get the master that matches them.

## The assignments fill themselves

Open a session, or a target's filter tab, and EigenFrame evaluates the lights in view, fills any assignment that is still unassigned, and brings automatic ones up to date. There is no button to press. While it runs you see *Evaluating light frames for automated calibration…*, and when it settles a line reports what it did:

`✓ Assigned calibration for 214 frames.`

When some automatic assignments moved to a better master, the line adds how many: `✓ Assigned calibration for 214 frames (12 reassigned).`

Anything it could not match is listed underneath with the reason and a link to the fix. This is why a calibration status block sometimes changes a second after a page loads.

> **Screenshot:** Session page, calibration status line reporting assigned frames with one unresolved row beneath it.

## What each kind matches on

**Bias** matches the camera signature: instrument, gain, offset, readout mode, frame dimensions and binning. Where several masters qualify, the one built from the most frames wins, then the newest.

**Dark** matches the same camera signature, plus the light's own exposure time exactly, plus set temperature within a tolerance. The tolerance is per rig and defaults to 7 °C. Among the darks inside the tolerance, the nearest set temperature wins. Nothing outside it is ever chosen automatically.

**Flat** matches the rig, the frame dimensions and binning, and the filter, and it must sit inside the light's epoch. Among the flats that qualify, EigenFrame prefers, in order:

1. for a light with a recorded angle on a rig whose flats depend on rotator angle, a flat with a recorded angle over one without;
2. a master built across several nights;
3. the nearest night to the light;
4. the rotator angle nearest the light's own;
5. the most frames;
6. the most recently added.

A flat on the far side of an optical-train change is never assigned automatically. On a rig with a logged optical-train change, neither is a flat master with no capture date, since it cannot be placed in an epoch. See [how long a flat is good for](./flat-epochs.md).

Which fields the camera signature contains is itself adjustable per rig, on the Equipment page, so a rig whose capture software never writes a readout mode can drop that field from the signature.

A master whose file EigenFrame cannot read is never assigned, whatever it matches.

### Flats and rotator angle

Each rig has a **Flats depend on rotator angle** setting, on the Equipment page:

- **Automatic**, the default, works as **Never** until flats on the rig have changed with rotation on 2 nights in the current epoch, and as **Always** from then on.
- **Always** never assigns a flat automatically whose rotator angle is further from the light's than the rig's **Flat rotation tolerance**, 5° by default. A master built from flats spanning more than the tolerance is not assigned automatically.
- **Never** leaves rotator angle to break ties between flats from equally near nights.

**Flat rotation tolerance**, beside the setting, is how many degrees apart two rotator angles can be and still count as the same angle. The one value decides both how a night's flats are grouped by angle and how a flat is matched to a light. Changing it measures the rig's flat nights again and re-evaluates its automatic flat assignments.

Angles are compared around the full circle, so a camera turned 180° is as far from its own flats as it can be. A light with no recorded angle can take any flat, and a flat with no recorded angle stays a candidate. See [rigs and equipment groups](../library/rigs-and-equipment-groups.md#per-rig-settings) for when to choose **Always**.

Where a rig is on Automatic, nothing has been measured yet, and one filter's flat masters sit at several rotator angles, the calibration status line on the session page and the target's filter tab says so, for example `This rig's G flat masters are at 4 rotator angles, and EigenFrame has not measured whether its flats change with rotation. If they do, set this rig to Always.`, with **Set to Always** and **Dismiss**.

## A missing field never widens the match

Every field in the signature is compared strictly, and absence counts as a value. A light with no readout mode in its header matches only masters that are equally missing a readout mode. It never falls back to "match anything".

That rule is what makes an unmatched assignment honest rather than a silent mis-pairing, and it is why an unresolved row spells out every field it searched on, absences included:

`No matching dark master found (48 frames)`, and beside it the criteria: `QHY268M · gain 56 · no readout mode · 1×1 · 720 s @ 0 °C`

Read that line as a shopping list. Every term in it is something the master you need has to carry. If the term that stands out is one of the *no …* entries, the light itself is missing the field, and the fix is either a master that is missing it too, or dropping that field from the rig's signature.

## Automatic assignments follow your library

A master you picked by hand, and a deliberate *none*, stay exactly as they are. Automatic assignments are kept current instead, with no page to open. A few seconds after a change, EigenFrame re-evaluates the lights it affects: a flat or dark master added; any master rejected, restored, edited or deleted; an optical-train change logged or removed; a night's flats measured as changing with rotation, or set to **Merge anyway**; a change to a rig's flat rotation settings. It also re-evaluates when it starts, when you open a session or a target's filter tab, and when you press **Integrate**. A newly scanned light is assigned when you open its session or target.

An automatic flat moves only for a reason that changes the calibration:

- the assigned flat was rejected or deleted, or its file cannot be read;
- it now sits across an optical-train change, or outside the rig's flat rotation tolerance;
- another flat ranks ahead of it on rotator angle, on being built across several nights, or on night.

A flat that differs only in frame count or in when it was added never moves a light.

An automatic bias stays on its master while that master still matches and can be used. An automatic dark does the same, and also moves to a dark whose set temperature is strictly nearer the light's, such as one you have just built. A dark at an equal distance never moves a light.

On a large rig the re-evaluation runs in the background, as **Re-evaluating flat assignments** on the Activity tray, with **Stop**.

When assignments move, the target's filter tab says so under its calibration status line, for example `45 G lights were reassigned to a closer-matching flat`. **Show** lists each change, from the earlier flat to the new one, with its light count and reason, and **Restore previous** puts that group back on its earlier flat as your choice. **Dismiss** hides the line until the next change. Where finished masters include moved lights, the line counts them (`2 masters include these lights`), and each such master's row on the target's filter tab and the Stacks page reads, for example, `11 of 45 lights were reassigned a different flat after this master was built`.

A stack already submitted keeps the assignments it was submitted with. See [which flats the stack applies](../stack/integrate-aligned-frames.md#which-flats-the-stack-applies).

## Reading the status

Session and target views show one line per light group with a tally for each kind:

- `bias ✓` every frame in the group has a master.
- `dark 8/12` eight frames of twelve are assigned; the rest are still unassigned.
- `flat none` every frame in the group is deliberately set to no flat.
- `✗` the assigned master has since been rejected, is missing, or cannot be read, so it cannot apply.
- `⚠` the assigned flat is cross-epoch, or its pixel statistics are still being prepared.

A ✓ means assigned, not verified. To see whether the calibration is actually correcting the frame, look at the calibrated thumbnails on the [session page](../inspect/review-a-night.md).

## Overriding one frame

Open a frame in the viewer and go to its **Calibration** tab. Three pickers, one per kind, list every master that matches, ranked, with the automatic choice at the top. Flats are annotated with their night, how many days from this light, how many sub-flats went into them, their median DN, and their rotator angle with the Δ from this light's own angle. The top flat carries a ★ and the reason it ranks first, such as *nearest night* or *within 5° of this light's angle*. Flats that cannot be assigned automatically follow the ranked ones, each with its reason: *cross-epoch*, *no capture date*, *outside the rotation tolerance*, or *spans several rotator angles*.

Beneath the flat picker, an automatic flat shows its reason, and a flat that has moved shows **Previously:** with the flat it replaced. With a flat assigned, a line states the light's rotator angle, the assigned flat's, and the Δ between them, so you can always see which angle is calibrating which.

Choosing a master, or choosing **None**, applies to the open frame and nothing else. The panel says so. Beside each kind's label, an assigned master reads **Automatic** when EigenFrame assigned it and **Chosen by you** when you picked it. A chosen master, or a **None**, carries **Return to automatic**, which discards your choice for that one kind and has EigenFrame assign the frame again straight away.

Where no master matches, the picker prints the criteria it searched on, in the same shopping-list form as above, with a link into Artifacts to find or build one.

> **Screenshot:** Viewer Calibration tab with the three master pickers and a ranked flat list showing the best match.

## Reassigning in bulk

Two bulk actions sit on the session page and the target's filter tab.

**Return N broken choices to automatic** appears when masters you chose for frames in view have gone bad: the master was rejected or deleted, its file cannot be read, or a chosen flat now sits across an optical-train change. It hands just those assignments back to EigenFrame, which assigns each frame's best available master as **Automatic**, and leaves every other assignment untouched. Automatic assignments move off a bad master on their own.

**Reset & reassign calibration** discards every current bias, dark and flat assignment in scope, including ones you set by hand and deliberate *none* choices, and re-derives them all from the best available masters, so every assignment it makes reads **Automatic**. It confirms first, with the frame count and the scope named, and it cannot be undone. It is the one bulk action that replaces your own choices with automatic ones, so reach for **Return N broken choices to automatic** first.

> **Screenshot:** The Reset & reassign confirmation dialog showing the frame count and scope.

## Related

- [How long is a flat good for?](./flat-epochs.md)
- [What the flat verdicts mean](./flat-quality-verdicts.md)
- [Why is my dark or flat not being applied?](./when-calibration-does-not-bind.md)
- [Working a night](../inspect/review-a-night.md)
- [Will EigenFrame read my data?](../library/supported-file-formats.md)
