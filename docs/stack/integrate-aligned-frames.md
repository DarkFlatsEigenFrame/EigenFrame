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

## The stacking lab

The lab stacks one 512 pixel output tile synchronously, so a change to rejection, normalization or weighting repaints the tile within seconds. Use it to see the rejection map, compare two candidate settings against each other, and read the projected relative SNR and per-frame combine weight before you spend the time on a full stack. The lab reads the same settings column the full stack submits, so what you dial in is what you get.

Move the tile selector around the canvas to check the settings somewhere else in the field, a bright core, a dust lane, an empty corner.

The panel also shows a ranked list of every contributing frame with its combine weight, on a Ranking tab beside Settings.

## When some frames lack a valid flat

If the frame set for this filter is mixed, some frames fully calibrated and some missing a valid flat or carrying a suspect one, the panel shows how many of each and defaults to stacking only the fully-calibrated frames. Including the rest is an explicit opt-in: check **Include uncalibrated / suspect-calibrated frames** to add them, or use **Show the affected frames** to jump to the Ranking tab and see exactly which ones are in question first.

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
