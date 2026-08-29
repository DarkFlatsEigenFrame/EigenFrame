---
title: How do I review a night?
description: A walkthrough of the session page, from picking a night through reading sky conditions, calibration status, and the calibrated contact sheets that catch a bad flat before you stack.
---

# How do I review a night?

The session page is where you work one night's data. This page walks through it top to bottom, in the order you'd use it.

## Find the night

Open Sessions from the library nav to see every night you've cataloged, newest first. A session is one night for one rig, so a night you ran two setups on holds two sessions; the list shows one card per date, tagged with how many setups it covers and broken out per rig inside. Click a date to open it.

The session page shows one rig at a time. If more than one rig shot that night, a selector in the top right switches between them; picking one jumps the date scrubber to that rig's own history, since two rigs rarely observe on exactly the same nights. See [what determines the session date](../help/troubleshooting.md#my-session-date-is-a-day-off) if a night's date looks off by one.

## What the header tells you

The header names the rig and the date, then a line underneath totals the night for that rig: how many targets, how many hours of exposure, how many lights are passing versus their total count, and a rejected count when anything has been culled out.

## Sky conditions

Below the header, a sky conditions bar reports the moon: its phase and illuminated fraction, its altitude across the night (with a peak noted if it transited mid-window), and its angular distance from the target. On a night with more than one target, the separation is broken out per target since each one sits at a different distance from the moon. Any of these lines is skipped if the frames don't carry what it needs to compute, so a partial header still gets you a partial reading rather than a wrong one.

> **Screenshot:** Session page, the sky conditions bar showing moon phase, altitude, and per-target separation.

## The target and filter grid

The grid lists each target shot that night as a row, with a column per filter. Each cell is the exposure time passing culling for that target and filter; click a cell to open its contact sheet. A Flats row along the bottom shows how many flats were shot per filter, independent of which targets used them.

## Calibration status

Beneath the grid, a status block reports what happened when the assignments were checked. Opening the night triggers a fill pass that assigns any bias, dark, or flat that was still unassigned, which is why this block can change a second after the page loads: it starts by reporting how many frames it just assigned, then lists anything it could not resolve, with the reason and a link to fix it.

Two actions sit next to the status: **Autodetect calibration** re-points only the frames whose assignment has gone bad (a rejected or missing master, or a flat that's now on the wrong side of an optical-train change), and **Reset & reassign calibration** discards every assignment in scope, including ones you set by hand, and starts over. See [how EigenFrame decides which masters calibrate which lights](../calibration/how-calibration-is-assigned.md) for how an assignment is chosen and what each status line means.

## The Lights contact sheets

This is the sharpest tool on the page. Under each target, a contact sheet of thumbnails renders for every filter, and wherever a light's bias, dark, and flat are assigned, the thumbnail renders calibrated rather than raw. That turns the sheet into a first-pass check on the calibration itself: a gradient across the frame, a vignette that should have been flattened, or a dust mote that should have been removed all show up in seconds, well before a stack would reveal them.

In a sheet where calibration is applied, a fully calibrated set of tiles carries no badge at all. Only the exception, a tile that's still raw while its siblings are calibrated, carries a small muted marker so it stands out as the one to check. Reassign whatever's wrong in the calibration status block above and the thumbnails update.

Each tile also carries the usual culling controls: reject or restore a frame, or delete a rejected one, right from the sheet. A small **i** control on each tile opens that frame's details, capture time, pier side, focuser temp, airmass and rotator among them, useful for pinning down when in the night conditions turned. See [culling frames](./culling-frames.md).

> **Screenshot:** Session page, the target and filter grid with a calibrated Lights contact sheet open.

## Flats this night

A Flats this night section lists every filter that shot flats on this rig that night, one row per filter, each with its flat count, rejected count, and whether a master has been built from it yet. Flats render raw in their contact sheet. Selecting a row opens a dock with the frames for that filter, that batch's [flat verdict](../calibration/flat-quality-verdicts.md), and the controls to build or manage a master; a link on the section heads to the Flats page for the rig's full history.

> **Screenshot:** Session page, the Flats this night section with one row's dock open.

## Moving between nights

Three ways to move without leaving the page: the newer and older night buttons beside the date in the header, the left and right arrow keys (left steps to a newer night, right to an older one, and both are ignored while the viewer is open or a text field has focus), and, on a wide enough screen, a drag scrubber pinned to the right edge that spans the rig's whole date history. Drag it and the date under your pointer previews live; release to jump there.

## Related

- [How does EigenFrame decide which masters calibrate which lights?](../calibration/how-calibration-is-assigned.md)
- [How long is a flat good for?](../calibration/flat-epochs.md)
- [What the flat verdicts mean](../calibration/flat-quality-verdicts.md)
- [Culling frames](./culling-frames.md)
- [Star detection and frame quality](./star-detection-and-frame-quality.md)
- [Troubleshooting](../help/troubleshooting.md)
- [Your first hour with EigenFrame](../start/first-hour.md)
