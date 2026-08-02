---
title: What is a rig, and why did my data split into two?
description: How EigenFrame discovers a rig from your camera and telescope headers, what is scoped to a rig and what is not, and how to merge a duplicate rig.
---

# What is a rig, and why did my data split into two?

A rig is one camera paired with one telescope. EigenFrame discovers rigs from your frame headers as it scans, and almost everything else in the catalog hangs off them: a session is one night on one rig, a target is one object on one rig, and a flat master is built for one rig, one night, one filter.

The Equipment page calls a rig an **equipment group**, and the two words mean the same thing.

## Rigs are discovered, not declared

While a scan indexes a light or a flat, EigenFrame reads its instrument and telescope headers and looks for a rig whose rules match. If exactly one matches, the frame joins it. If none match and both the instrument and the telescope are present, EigenFrame creates a rig on the spot, named for the pair, and puts the frame in it. The name is the two header values joined by a middle dot, for example `QHY268M · TS 130 f/7`.

A frame missing either header, or one that matches more than one rig, is left unassigned rather than guessed at.

This is why a folder convention cannot stand in for a rig. One folder named after a scope legitimately holds work from two cameras, and those two cameras have different sensors, different flats, and different darks. EigenFrame splits them because they genuinely are two rigs. The same thing happens in reverse: one camera moved between two scopes produces two rigs from one folder, correctly, because the flats differ.

> **Screenshot:** Equipment page listing two auto-discovered rigs with their rules.

## What is scoped to a rig, and what is not

Only lights and flats carry a rig. Bias and dark frames do not, and this asymmetry is deliberate.

**Bias and darks belong to the sensor.** They record what the camera does with no light reaching it, so they are matched on the camera signature alone: instrument, gain, offset, readout mode and binning, plus exposure and set temperature for a dark. Nothing about the telescope enters that match. A dark library shot on one camera serves every scope you ever mount it on, and moving the camera does not invalidate it.

**Flats and lights belong to the rig.** A flat records the optical train: the scope, the spacing, the filter in the beam, the dust sitting on the sensor window. Change any of it and the flat stops describing the light path. So a flat matches on the rig, the frame geometry and the filter, and it must sit inside the light's [epoch](../calibration/flat-epochs.md).

The practical consequence: build your bias and dark library once per camera, and think about flats per rig. [How calibration is assigned](../calibration/how-calibration-is-assigned.md) covers the matching in full.

## The Equipment page

Open **Equipment** from the library nav. Each rig is a card showing its name, its rules, and a priority number.

Priority is the list order, and it decides ties. Rules are evaluated top to bottom and the first matching rig wins, so a narrow rig should sit above a broad one. The `▲` and `▼` controls on a card move it.

Each card also carries two shortcuts into that rig's data: **Sessions →** opens its most recent night, and **Flats →** opens its flat history by filter.

## Rules

Press **Edit** on a card to open its editor. The rules are at the top, and a frame must match every one of them to join the rig.

Each rule picks an attribute and a value:

- **Instrument** and **Telescope** match the header string, ignoring case.
- **Gain**, **Offset**, **Binning** and **Focal Length** match a number exactly, or, switched to *in range*, anywhere inside an inclusive minimum and maximum.

A range is the tool for a rig you shoot at several gains, or a zoom or reducer that lands the focal length in a band rather than on a value. A rig with no rules never matches anything.

An auto-discovered rig starts with two rules, its instrument and its telescope. Renaming it changes nothing about matching; the rules do that work.

> **Screenshot:** The rig editor with an instrument rule and a focal-length range rule.

## Merging a duplicate rig

Capture software that renames a scope, or a driver update that changes an instrument string, produces a second rig for hardware you never changed. Everything shot afterward lands in the new one, and your target and session history splits down the middle.

**Merge** on the card is the fix. Pick the rig to merge into, and every frame moves to it; the source rig is then deleted. Nothing on disk is touched.

Afterward, add the old string as a rule on the surviving rig so any straggler that still carries it lands in the right place instead of creating the duplicate again.

> **Screenshot:** The merge panel with a source rig selected and the target picker open.

**Delete** removes a rig without moving its frames, which leaves them unassigned. Merge is what you want when the hardware is the same.

## Per-rig settings

The rig editor is also where the settings that vary by hardware live. Each one is described where it is used; this is the map.

**Calibration match fields.** A checklist, separately for bias and for dark, of which fields a master must match on. The bias default is instrument, gain, offset, readout, X binning and Y binning; the dark default adds exposure and set temp. The full vocabulary also offers camera ID, ISO, USB limit, width and height. Unchecking a field stops it blocking a match, which is what you want for a camera that never records it. **Reset to default** restores the shipped set.

**Dark frames** and **Flat frames**, each **Required** or **Not used for this rig**. A rig that calibrates with bias only, or without flats, sets the relevant one to *Not used* and stops seeing an unassigned dark or flat reported as missing calibration. A master you do assign still applies normally either way.

**Dark set-temp tolerance**, in °C, default 7. A dark is chosen automatically only within this many degrees of the light's set temperature.

**Star detection**, in three blocks: candidate bounds, acceptance settings, and quality thresholds. See [star detection and frame quality](../inspect/star-detection-and-frame-quality.md), which covers what each block changes and when the change takes effect.

**Alignment tolerances**: **Rotation ± deg** (default 5.0), **Scale ± %** (default about 2), and **Allow 180° flip**. These define the geometry a fit must land inside to be treated as plausible. A target near the pole, or one shot across many nights, accumulates field rotation and wants a wider rotation window. See [when frames will not align](../stack/when-frames-will-not-align.md).

**Output pedestal (DN)**, default 250. The baseline added to a stacked master so the stored image stays positive.

**Stack output paths**, one template per frame type, blank to inherit the library default. See [where stacks are saved](../stack/where-stacks-are-saved.md).

**Integration presets**, the saved stacking settings for this rig. They are created from a target's integrate panel and managed here: rename, edit, set one as the rig's default, or delete.

> **Screenshot:** The rig editor scrolled to the calibration match fields and dark set-temp tolerance.

## Where rigs show up elsewhere

There is no single global rig switch. Each page filters by rig in the way that suits it:

- **Targets** carries a row of rig chips above the list, with **All rigs** to clear the filter.
- **Sessions** shows one rig's night at a time; a selector in the session header switches rigs, and moves the date scrubber to that rig's own history.
- **Stacks** has a rig dropdown in its filter bar.
- **Flats** is opened for one rig, from its Equipment card or from a session.

## Related

- [How nights are grouped into sessions](./sessions.md)
- [How objects are grouped into targets](./targets.md)
- [Library folders](./library-folders.md)
- [How does EigenFrame decide which masters calibrate which lights?](../calibration/how-calibration-is-assigned.md)
- [How long is a flat good for?](../calibration/flat-epochs.md)
- [Star detection and frame quality](../inspect/star-detection-and-frame-quality.md)
