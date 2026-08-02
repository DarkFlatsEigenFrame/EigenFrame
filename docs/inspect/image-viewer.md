---
title: How do I look at a frame properly?
description: The EigenFrame viewer streams a tile pyramid so a large frame opens instantly, zooms to full-resolution detail, and puts the header, statistics and stars beside it.
---

# How do I look at a frame properly?

The viewer opens a single frame full screen: the canvas on the left, a collapsible panel on the right, and a filmstrip of the whole set along the bottom. Click any thumbnail to open it, from a session contact sheet, from Cull by metric, from the Artifacts page, or from a target's filter tab. **Escape** closes it.

> **Screenshot:** The viewer open on a light frame, with the filmstrip along the bottom and the Interaction panel open on the right.

A large frame opens immediately. The viewer streams a pyramid of pre-built tiles rather than loading the whole image, so a 9576 by 6388 frame is on screen and pannable in about the time it takes to click it. What you see sharpens as tiles arrive; a small dot at the bottom left of the canvas is lit while tiles are still loading.

## Pan and zoom

- **Drag** to pan.
- **Scroll wheel** zooms in and out around the pointer.
- **Double-click** zooms in on the point you clicked.
- **Pinch** zooms on a touch screen or trackpad.

The **Zoom** block at the top of the Interaction panel has the same moves as buttons: **+**, **1:1** for one screen pixel per image pixel, **fit** to frame the whole image, and **−**.

## Full-resolution detail

**View** in the Interaction panel carries a **Full-resolution detail** toggle. With it on, the viewer fetches native tiles, one image pixel per screen pixel, for whatever part of the frame you are looking at. That is what makes a star's core, a hot pixel, or a hairline trail render as it actually is rather than as a resampled approximation.

It costs more: those tiles are larger, they are fetched on demand as you pan, and they have to be built the first time. Leave it off for browsing and turn it on when you are judging fine detail at high zoom.

## Global stretch

The second **View** toggle, on by default, controls where the display stretch takes its levels from. On, the whole frame uses one tone map, so brightness is consistent corner to corner and two parts of the image are directly comparable. Off, each tile maps its own pixel statistics, which lifts faint local structure but means brightness no longer compares across the frame.

The stretch itself, black clip and stretch factor, lives further down the same panel. See [stretch and histogram](./stretch-and-histogram.md).

## Calibrated or raw

For a light frame with calibration assigned, a **Calibrated** control in the top bar switches between the calibrated render and the raw pixels. It changes what is drawn and nothing else; the assignment itself is what persists.

A frame that arrived already calibrated shows the control disabled, with a note saying why.

## The right-hand panels

A vertical tab strip sits at the far right. Click a tab to open its panel, click the open tab again to collapse it and give the canvas the full width.

**Interaction.** Zoom, the two View toggles, the stretch widget, **Hide rejected**, and **Reject frame** / **Unreject**.

**Properties.** Everything the file declares, in four blocks: Observation (target, dates, session night, exposure, filter, RA, Dec, airmass), Equipment (telescope, instrument, focal length, f/ratio, capture software), Sensor (gain, offset, readout mode, temperatures, camera ID, pier side, rotator, focuser, binning), and Statistics (min, max, mean, median, standard deviation, MAD, each with its percentage of full scale). Above them sits the artifact's own identifier with a copy control, which is the unambiguous way to name one frame in a problem report.

**Calibration.** The three master pickers for this one frame, ranked candidates for each, and the criteria it searched on where nothing matched. An amber dot on the tab means either no masters are assigned or the assigned flat is cross-epoch. See [how calibration is assigned](../calibration/how-calibration-is-assigned.md).

**Stars.** The detected star catalog, the acceptance sliders, and the live medians. See [star detection and frame quality](./star-detection-and-frame-quality.md).

> **Screenshot:** The viewer with the Properties panel open, showing the observation, equipment, sensor and statistics blocks.

## Two more top-bar controls

**Stars** overlays the detected stars on the canvas, once the frame has a catalog.

**Set as reference** appears when you opened the frame from a target, and makes it that target's [alignment reference](../stack/choose-an-alignment-reference.md). The frame that is already the reference shows **✓ Reference** instead.

## Moving through the set

The filmstrip holds every frame in the set you opened from, in the same order. Click a thumbnail to jump to it, or use the arrows at either end and the **←** and **→** keys.

**The field of view is preserved as you move.** Zoom into one corner of a sub, then step to the next frame, and you are looking at the same corner at the same magnification. That is what makes flipping through a night's subs for a trail, a satellite, or a focus drift practical.

A rejected frame draws dimmed with a red ring in the filmstrip. **Hide rejected** in the Interaction panel skips them entirely as you step. Where the camera configuration changes partway through a set, a thin marker in the strip shows where.

**R** rejects or restores the frame on screen, the same action as everywhere else. See [culling frames](./culling-frames.md).

## Related

- [Stretch and histogram](./stretch-and-histogram.md)
- [Star detection and frame quality](./star-detection-and-frame-quality.md)
- [Culling frames](./culling-frames.md)
- [How calibration is assigned](../calibration/how-calibration-is-assigned.md)
- [Keyboard shortcuts](../reference/keyboard-shortcuts.md)
- [Performance and cache](../reference/performance-and-cache.md)
