---
title: Why is my dark or flat not being applied?
description: What each unresolved calibration message means, from a missing bias or dark to a cross-epoch flat, and the specific fix for each one.
---

# Why is my dark or flat not being applied?

Calibration assignment reports exactly what it could not do, next to the frames it affects. This page works through each message and what fixes it. For how matching works in the first place, see [how calibration is assigned](./how-calibration-is-assigned.md).

## No matching bias or dark master found

Beside this message is the criteria line it searched on, for example:

`QHY268M · gain 56 · no readout mode · 1×1 · 720 s @ 0 °C`

Read it as a list of what a master needs to carry. Every term is a field the master you need has to match, in full, including any field that reads as absent. Check whether a candidate master actually has those fields set. An imported master, one integrated outside EigenFrame, often lost gain, offset, readout mode, set temperature and exposure time in the integration process, so it can no longer match a light on any of them. See [will EigenFrame read my data](../library/supported-file-formats.md) for what an imported master keeps and loses, and what to assert by hand when it isn't enough.

> **Screenshot:** Session page, an unresolved dark row showing the criteria it searched on.

## No matching dark master found

A dark carries two extra requirements beyond the shared camera signature: the light's exposure time has to match exactly, and its set temperature has to fall within the rig's tolerance, 7 °C by default and adjustable per rig on the Equipment page. Among the darks inside that tolerance the nearest set temperature is chosen; nothing outside it is ever picked automatically.

Some rigs are legitimately shot without darks at all, a cooled sensor with negligible amp glow calibrated on bias alone. For that case the unresolved row offers **Darks not used on this rig**. Turning it on stops an unassigned dark on that rig from being reported as a gap; a dark that is actually assigned still applies normally, the setting only silences the warning.

A missing dark is shown as advisory, not a hard gap, whenever the light's bias resolved on its own, since the bias still corrects the frame. The real gap is when both the bias and the dark come up unresolved for the same light.

## A criteria entry reads "no readout mode" (or similarly missing)

When a criteria entry names an absent value like "no readout mode" or "no gain", the light itself is missing that field in its own header, not the candidate masters. Absence is compared like any other value, so a light missing a field only matches a master that is equally missing it; it never falls back to matching anything.

The fix is one of two things: find or build a master that is missing the same field, or remove that field from the rig's match signature on the Equipment page so it stops being compared at all. See [how calibration is assigned](./how-calibration-is-assigned.md#a-missing-field-never-widens-the-match) for the underlying rule.

## No flat master for this filter and date

This means EigenFrame searched the rig's flats for this filter and found none inside the light's epoch. The row links straight to building one for that filter and date. If a flat does exist nearby but isn't showing up, check which side of an epoch boundary it falls on, covered next.

## Cross-epoch

A flat message that calls out an optical-train change means a flat exists near the light in time, but the two sit on opposite sides of a marked boundary, so it is never assigned automatically no matter how close the dates are. See [how long is a flat good for](./flat-epochs.md) for what an epoch is and how a boundary gets marked.

Two ways out: shoot fresh flats on the current side of the boundary and build a master from those, or deliberately pick the cross-epoch flat yourself from the viewer's Calibration tab, knowing it will be treated as suspect on that frame.

## No flat close enough to the light's rotator angle

On a rig whose flats depend on rotator angle, a flat is assigned automatically only within the rig's flat rotation tolerance of the light's angle, 5° by default. When no flat for the filter is that close, the row says so, names the rig's setting or what was measured, and offers the nearest flat:

`No G flat within 5° of 247.1° (3 lights). This rig is set to Always for rotator angle`

`Use the nearest G flat (256.9°, 9.9° away) for these 3 lights`

The action assigns that flat to every light in the row as your choice, so it stays put. The other ways out: shoot flats at that rotator angle and build a master from them, widen the rig's **Flat rotation tolerance** if the angles are close enough to share a flat, or, if this rig's flats do not change with rotation, set **Flats depend on rotator angle** to **Never** on the Equipment page. See [flats and rotator angle](./how-calibration-is-assigned.md#flats-and-rotator-angle).

## Flat masters with no capture date

`2 G flat masters have no capture date and cannot be placed against the optical-train changes (3 lights)`

On a rig with a logged optical-train change, a flat master with no capture date cannot be placed in an epoch, so it is not assigned automatically. Choose it yourself from the viewer's Calibration tab if you know it belongs to the light's epoch, where it is listed with *no capture date*.

## A light moved to a different flat

An automatic flat assignment follows the ranking as your library changes, so a light can move to a flat that now matches it better, a few seconds after the change and with no page open. The target's filter tab reports each move under its calibration status line, with the reason and **Restore previous**, which puts the earlier flat back as your choice. The viewer's Calibration tab shows **Previously:** with the flat a light moved from. See [automatic assignments follow your library](./how-calibration-is-assigned.md#automatic-assignments-follow-your-library).

## A flat is assigned, but its statistics are still being prepared

A newly built or newly assigned flat needs its pixel statistics computed before it can actually correct a frame. Until that finishes it shows as still preparing rather than ready, and the viewer and thumbnails show the frame without it. No action is needed, it becomes effective on its own once preparation completes; reopening the frame afterward shows it corrected.

A stack prepares the statistics of every assigned master before it starts, so a flat still preparing when you press **Integrate** applies to its frames in the stack.

## A stack stops with "Some calibration masters cannot be used"

The stack found an assigned master it cannot calibrate with, and names each one with the reason: rejected, missing, unreadable, or no statistics. Unreadable means the master's file is damaged; no statistics means its statistics could not be computed. Rebuild or replace the master, or reject it so automatic assignments move off it. For a master you chose, use **Return N broken choices to automatic** or pick another in the viewer. Then integrate again.

## The assigned master was rejected or is missing

This is the ✗ state: the master a frame points at has since been rejected, its file cannot be read, or the record itself is gone. An automatic assignment moves off such a master on its own, to the best master that still matches, or to unassigned when none does. A master you chose stays until you act: use **Return N broken choices to automatic** on the session page or the target's filter tab. It hands back only the chosen assignments that have gone bad, rejected, deleted, unreadable, or a flat now across an optical-train change, and leaves every other assignment untouched.

## Reset & reassign calibration

This is the blunt instrument. It discards every current bias, dark and flat assignment in scope and re-derives them all from the best available masters, including assignments you set by hand and deliberate "none" choices. It confirms first with the frame count and scope, and it cannot be undone. Reach for **Return N broken choices to automatic** first; use Reset & reassign only when you want to start a scope's calibration over from nothing.

## Seeing one frame's assignment

The viewer's Calibration tab always shows the current bias, dark and flat for the open frame, whether each was assigned automatically or chosen by you, ranked candidates for each, and the same criteria line when nothing matches. It's the place to confirm what's actually assigned to a single frame and to override it without touching anything else in scope.

## Related

- [How does EigenFrame decide which masters calibrate which lights?](./how-calibration-is-assigned.md)
- [How long is a flat good for?](./flat-epochs.md)
- [What the flat verdicts mean](./flat-quality-verdicts.md)
- [Working a night](../inspect/review-a-night.md)
- [Troubleshooting](../help/troubleshooting.md)
