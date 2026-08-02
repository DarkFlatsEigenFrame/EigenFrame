---
title: Why did my settings come back, and how do I reuse them on another target?
description: "Settings recall: why the integrate panel reopens with what you used last, and how named presets carry your settings across every target on a rig."
---

# Why did my settings come back, and how do I reuse them on another target?

Open the integrate panel on a target and filter you have stacked before, and the settings column is not blank. EigenFrame remembers what you last used for that exact rig, object, and filter, and loads it back in. Change rig, object, or filter and the recall changes with it; the last-used settings for one target's Ha do not follow you to its OIII, or to a different object on the same rig.

Above the settings column sits a preset control, showing what is currently applied:

`Preset: Last used ▾`

The label reads **Last used**, **Shipped defaults**, or the name of a preset, depending on what was loaded. A `•` appears next to the label the moment you change any setting after applying it, so you can tell at a glance whether what you are looking at still matches something saved.

> **Screenshot:** The preset controls at the top of the integrate panel with one preset applied and the edited marker showing.

## Presets

A preset is a named set of settings saved on the rig, not on any one target. Save one from the preset menu with **Save as preset…**, and it is available from every target's integrate panel on that rig, for every object and filter shot on it.

One preset per rig can be marked the rig's default with **Set as rig default**. The menu marks it with a `· default` suffix next to its name.

Opening the preset menu also gives you **Update "name"…** to overwrite a preset with the settings currently dialed in, and **Delete preset…** to remove one. Applying a preset only changes what is loaded in the panel; nothing is saved until you choose to save it, and a stack you submit does not alter the preset it started from.

## The seed order

When the panel opens with nothing yet applied, it seeds itself in this order:

1. Your last-used settings for this rig, object, and filter, if any exist.
2. The rig's default preset, if one is set.
3. The shipped defaults.

The first one that exists wins. A new target on a rig with a default preset opens dialed in to that preset; a target you have already stacked opens exactly where you left it, regardless of any preset.

## Managing presets

Create a preset from a target's integrate panel, where you can see your settings against real data before saving them. Everything else about a preset, renaming, editing its settings directly, setting or clearing the rig default, and deleting it, lives on the **Equipment** page under the rig's **Integration presets** section.

## Related

- [Integrating aligned frames](./integrate-aligned-frames.md)
- [Which rejection algorithm should I use, and what does Localized normalization do?](./rejection-and-normalization.md)
- [What is a rig, and why did my data split into two?](../library/rigs-and-equipment-groups.md)
- [How objects are grouped into targets](../library/targets.md)
- [Where stacks are saved](./where-stacks-are-saved.md)
