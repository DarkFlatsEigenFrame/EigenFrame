---
title: Everything's black. How do I see it?
description: The stretch widget in the viewer's Interaction panel, its black clip and stretch factor handles, and how a look gets saved to a rig and reset.
---

# Everything's black. How do I see it?

A linear frame is almost all near-black pixels with faint signal buried close to the floor. Every frame the viewer opens is already stretched for display, using a built-in default for its subtype, so you are never looking at raw linear values on screen. The Stretch block in the Interaction panel is where you adjust that look and, for lights, save it.

> **Screenshot:** The Stretch widget in the viewer's Interaction panel with the black point dragged in.

## The widget

The widget draws the frame's histogram with the current transfer curve over it. Two handles sit on that curve, and both drag vertically.

- **Black point** (the foot at the bottom of the curve). Drag up to clip more of the shadow away; drag down to lift the noise floor into view. Reads as *black* in MAD units below the median.
- **Stretch factor** (the dot on the curve, over the median). Drag up to brighten faint signal further; drag down to pull it back. Reads as *stretch*, a target background level.

Both are relative to the frame's own median and MAD, so the same knob values look right across frames of different exposure and background level without re-anchoring by hand.

## Save to rig, and Reset

Three tiers, in priority order:

1. **Live edit.** Dragging either handle changes what you see immediately. It applies only to the frame open in the viewer and is not saved anywhere yet.
2. **Save to rig.** Persists the current black point and stretch factor to the frame's rig, so every light frame on that rig opens with this look from then on, until it is saved over again.
3. **Built-in default.** The per-subtype starting point every rig uses until something is saved over it.

**Reset** discards a live edit and returns to whatever is saved on the rig, or the built-in default if nothing has been saved.

Saving is a display preference, not a per-frame setting: it applies to the whole rig, not just the one frame you were looking at when you saved it.

## What it does and does not touch

The stretch is a display transform. It changes what is drawn on screen and nothing else. Stored pixels, calibration, alignment, and the stack all read the same linear data whatever the stretch is set to.

A rig's saved stretch is not confined to the open viewer. It also renders the thumbnails and filmstrips shown for that rig, so a look you save carries into the session contact sheet, Cull by metric, and every filmstrip you flip through afterward.

## Calibration frames

Open a bias, dark, or flat frame and the widget is there to drag, with Reset, but there is no Save to rig control. A calibration frame is a diagnostic surface, not the rig's presentation, so it always opens on its own built-in linear default and inspecting one can never change what the rig's lights look like.

## Related

- [How do I look at a frame properly?](./image-viewer.md)
- [Star detection and frame quality](./star-detection-and-frame-quality.md)
- [Culling frames](./culling-frames.md)
- [Glossary](../reference/glossary.md)
