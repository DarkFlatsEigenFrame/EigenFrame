---
title: How long is a flat good for?
description: What a flat epoch is, how to mark an optical-train change, and why a flat master only ever calibrates the lights that sit inside its own epoch.
---

# How long is a flat good for?

An epoch is the stretch over which one flat still corrects your lights. It ends whenever the optical response changes, whether you did it on purpose (collimating, cleaning, re-spacing) or found it later (a dust mote arriving, moving, or clearing, a shift in vignetting or illumination). Flats from before the change stop matching lights taken after it.

Routine camera rotation between targets usually does not end an epoch. Mark a boundary only if a rotation visibly shifts the vignetting. Rotation is handled within the night instead: flats shot at rotator angles further apart than the rig's flat rotation tolerance, 5° by default, are measured as [rotation groups](./flat-quality-verdicts.md), combined into one master when their surfaces agree and kept apart when they do not, with no epoch boundary either way.

## Marking a boundary

EigenFrame watches your flats over time and can flag a night as a **Boundary candidate** when its flats look like the optical train shifted rather than like a passing cloud or dew. That flag shows up on the flat verdict banner with a **Mark optical-train change** button next to it.

Marking one is always something you confirm. EigenFrame never creates a boundary on its own, whether it noticed the change itself or you spotted it by eye on the flat timeline. You can also open the rig logbook directly and mark a change between two nights yourself, with your own note describing what happened.

On a rig set to **Always** or **Never** for rotator angle, an optical-train change in the logbook reads `This rig is set to Always for rotator angle. Review it if the change affects illumination.`, with **Change** to open the setting in place. The setting stays as it is until you change it.

> **Screenshot:** Flat verdict banner showing a boundary candidate and the Mark optical-train change button.

## What marking one does

A flat from before the boundary is never assigned to a light from after it, no matter how close the two dates are. The boundary is absolute: date proximity alone never overrides it. Automatic flat assignments on the rig are re-evaluated as soon as the boundary is marked or removed, so lights move to a flat from their own side without a page to open.

## Why this matters day to day

You need one validated flat master per epoch per filter, not one per session. A flat from a nearby night inside the same epoch is a normal, healthy assignment, and [calibration assignment](./how-calibration-is-assigned.md) prefers exactly that. Among the flats inside a light's epoch, a master built across several nights comes first, then the nearest night. On a rig whose flats depend on rotator angle, the angle comes before both: only flats within the rig's flat rotation tolerance of the light's angle, or with no recorded angle, take part, and those with a recorded angle rank first.

## Where epochs show up

The flat timeline for a rig groups nights into epoch bands, with each optical-train change marked between the nights it separates. This is the place to scan a rig's flat history and see when the field actually shifted.

Above the timeline, a line states the rig's **Flats depend on rotator angle** setting beside what has been measured in the current epoch, for example `Rotator angle: Automatic. Changed with rotation on 1 night; gating starts at 2`. **Change** opens the setting in place. The line turns amber when the rig is set to **Never** and its flats have changed with rotation on 2 or more nights.

> **Screenshot:** Flat timeline for a rig with epoch bands and a boundary marker between two nights.

The viewer's Calibration tab shows the same boundary at the level of one light: its ranked list of candidate flats marks any that sit on the far side of an epoch boundary as *cross-epoch*, and the top-ranked flat carries a star.

## Related

- [How does EigenFrame decide which masters calibrate which lights?](./how-calibration-is-assigned.md)
- [What the flat verdicts mean](./flat-quality-verdicts.md)
- [Why is my dark or flat not being applied?](./when-calibration-does-not-bind.md)
- [Troubleshooting](../help/troubleshooting.md)
