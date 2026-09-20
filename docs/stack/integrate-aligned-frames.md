---
title: How do I stack?
description: Opening the stacking lab, dialing settings against a single-tile preview, the mixed-flat opt-in, watching progress, and where the finished Light master lands.
---

# How do I stack?

Stacking runs from the target's filter tab, once [alignment](./evaluate-alignment.md) has produced a reference plus at least one Accepted or Aligned frame. Until then the control is disabled and says why:

`⋯ Integrate unlocks once frames are aligned (reference + at least one aligned frame).`

With that gate cleared, press **▶ Integrate aligned frames, open stacking lab**. It opens a large **Integrate aligned frames** panel over the page: settings on the left, the single-tile stacking lab on the right, and a queue strip below listing every stack already run for this target and filter. Escape closes it.

> **Screenshot:** The integrate panel with the settings column, the single-tile stacking lab, and the queue strip.

## The settings column

Normalization, rejection method and its sigma parameters, output pedestal, quality weighting (importance, floor, best-N, localized normalization) and pixel repair all live here. [Rejection and normalization](./rejection-and-normalization.md) covers what each of these settings does.

A stack warps each frame by whatever [distortion correction](./alignment-viewer.md#distortion-correction) that frame carries, and stacks a frame with none on its plain fit.

## The stacking lab

The lab stacks one 512 pixel output tile synchronously, so a change to rejection, normalization or weighting repaints the tile within seconds. Use it to see the rejection map, compare two settings against each other, and read the projected relative SNR and per-frame combine weight before you spend the time on a full stack. The lab reads the same settings column the full stack submits, so what you dial in is what you get.

It reads top to bottom in three bands. The tile preview holds one size whatever the settings under it are doing, so a tuning change shows as a change in the pixels and never as the image moving. Under it sit the controls: the overlay buttons, the stretch histogram, the compare row, and the tile selector with your candidates. Under those, the measurements for whatever is on screen.

> **Screenshot:** The stacking lab with the preview, the control band, and the measurement lines below it.

**Overlays.** **rejection** tints each pixel by how many samples got clipped there, so a satellite trail reads as a red streak that shrinks as you tighten high sigma. **repair** tints hot repairs red and cold repairs blue, so a sensor defect reads as a tight cluster and a star being eaten reads as repairs sitting on bright cores. **norm** paints the localized normalization's correction across the tile, warm where it adds flux and cool where it removes it. **off** leaves the tile plain.

**Stretch.** The histogram under the preview is a display stretch for the lab, shared by every slot you compare, so two settings are always judged through the same transfer. Drag it up and down: the feet set the black and white points, the curve lifts the faint end. It changes nothing about what gets stacked.

**Tile selector.** The grid over your reference frame picks which output tile is stacked. Move it around the field to check the settings somewhere else, a bright core, a dust lane, an empty corner. A number in a cell counts the settings already stacked there, so you can tell at a glance which tiles are cheap to revisit.

**Mosaic.** **mosaic** replaces the single tile with every tile stacked so far at its true position in the field, so the seams between independently stacked tiles are directly visible. Drag to pan, scroll to switch between full-resolution detail and a wider view. Nothing is stacked from inside the mosaic, it only shows what is already there; picking a tile in the selector while mosaic is on stacks that tile and its eight neighbours.

**Measurements.** Below the controls: how many frames contributed and the min, median and max number covering any pixel; where the tile's compute went, phase by phase, with a projection of what the full stack will cost in time and memory; how many rounds the rejection needed and whether it hit the iteration cap; which frames the normalization used as its reference and how large a correction the localized field applies; and, with pixel repair on, how many hot and cold pixels it repaired. A center tile projects well, a corner tile does not.

The panel also shows a ranked list of every contributing frame with its combine weight, on a Ranking tab beside Settings.

## Comparing two settings

Every distinct combination of settings you stack becomes a **candidate**, a thumbnail beside the tile selector labelled with what you changed to reach it. Click one to jump back to it, which restores its settings into the column and repaints instantly from cache. **×** discards it.

Pin one candidate as **A** and another as **B**, then use the compare row: **live** is what the settings column currently says, **A** and **B** are the two pins, and **A−B** paints their signed difference, red where A is brighter and blue where B is. The slots stay disabled until both pins have been stacked on the tile you are looking at; move to a tile they share and they light up.

Click a slot to switch to it, or **hold** it to flip to it and release to flip back. Holding is the one to reach for: you keep your eyes on the pixel you care about instead of tracking your cursor between two buttons, and the eye catches a difference in a flip far faster than in two static images. A and B paint through one shared stretch, so a difference you see is a difference in the data.

Mosaic stays available while comparing, so you can flip A against B across the whole field rather than one tile. Each pin shows the tiles it has stacked. The signed **A−B** view is per-tile only.

## When some frames lack a valid flat

If the frame set for this filter is mixed, some frames fully calibrated and some missing a valid flat or carrying a suspect one, the panel shows how many of each and defaults to stacking only the fully-calibrated frames. Including the rest is an explicit opt-in: check **Include uncalibrated / suspect-calibrated frames** to add them, or use **Show the affected frames** to jump to the Ranking tab and see exactly which ones are in question first.

## Stacking one side of the meridian

Where the frames for this filter come from both sides of the meridian, a **Mount side** selector appears in the settings column with a count on each option: **Both sides**, **East**, **West**. It is absent when every frame sits on one side, since there is nothing to choose.

Picking a side stacks that side alone. The counts are the frames that would actually go in, so the number on the button is the number **Integrate N frames** commits to. The lab tile restacks against the chosen side too, and the choice is recalled with the rest of the settings and saved into a preset like any other.

Reach for this when a filter's corners drift in opposite directions on either side of a flip: two masters, one per side, keep two different corner patterns out of one average. See [the center is sharp but the corners drift](./when-frames-will-not-align.md#the-center-is-sharp-but-the-corners-drift).

The alignment reference stays the output canvas whichever side you stack, so both masters land on the same geometry. Its own pixels are combined in only when it sits on the side you picked.

A stack whose frames all share one side names itself with that side where the output template carries the `{.PierSide?}` token. See [where stacks are saved](./where-stacks-are-saved.md).

## Committing the stack

**Integrate N frames** at the bottom of the panel submits the stack, where N is the frame count actually going in, the fully-calibrated set alone unless you opted the rest in. The panel stays open after you submit, so you can watch it or start dialing in the next filter.

Progress moves through four phases, shown on the stack itself and mirrored in the queue strip: **Preparing frames**, **Planning**, **Combining**, and **Saving**. **Cancel** is available the whole time. If you navigate away from the target page, the **Activity** tray keeps tracking the run and lets you cancel from there too.

## Where it lands

A finished stack is a Light master, sitting in your library as an artifact you can open in the viewer right away. See [Where stacks are saved](./where-stacks-are-saved.md) for output paths and naming.

The output canvas is the alignment reference frame's own dimensions. Each contributing frame is warped into that canvas and clipped to it.

## Related

- [How do I register my subs, and what do the results mean?](./evaluate-alignment.md)
- [What is the alignment reference and how do I change it?](./choose-an-alignment-reference.md)
- [What do rejection and normalization do?](./rejection-and-normalization.md)
- [Where stacks are saved](./where-stacks-are-saved.md)
- [How calibration is assigned](../calibration/how-calibration-is-assigned.md)
- [Culling frames](../inspect/culling-frames.md)
- [Troubleshooting](../help/troubleshooting.md)
