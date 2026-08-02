---
title: Why do I have two M31 cards, and why didn't my two nights merge?
description: A target is an object name paired with a rig, matched literally with no normalization. Why two rigs on one object make two targets, and how the Targets list works.
---

# Why do I have two M31 cards, and why didn't my two nights merge?

A target is one object name on one rig. Every light with the same object header and the same rig lands on the same target, no matter how many sessions or how many months separate them. See [rigs and equipment groups](./rigs-and-equipment-groups.md) for how a rig is discovered; a target assumes a frame already carries one.

## The object name is read literally

EigenFrame takes the object string straight from the frame's header. It is not normalized, not trimmed to a catalog form, and not fuzzy-matched against anything. Two nights that carry the same object string on the same rig land on one card, whatever the gap between them.

Two spellings of the same object name in your capture software (`M31` versus `M 31`) produce two separate target cards with no way in EigenFrame to merge them, so keep the object field consistent across a target's sessions.

## No object name

A light with no object header at all is grouped under `Unknown Target` rather than left out of the catalog. It still gets a target card, on whichever rig it matched, and behaves like any other target from there.

## Two rigs, two targets

The same object shot on two rigs produces two separate target cards, and this is deliberate. Two rigs mean two focal lengths and, usually, two sensors, so their frames cannot align to a shared framing or combine into one stack. Each rig's data is kept as its own target, with its own alignment reference, its own filters, and its own stacks.

That is the answer to the two M31 cards: one card per rig, each carrying the data that can actually be stacked together.

> **Screenshot:** The Targets list showing two M31 cards, one per rig chip.

## The Targets list

Open **Targets** from the library nav.

The search box filters by object name and by rig name together, matching either.

**Sort** offers four orderings: **Last imaged** (default, newest first), **Integration time**, **Last accessed**, and **Alphabetical**.

A row of rig chips sits above the list, one per rig with at least one target, plus **All rigs** to clear the filter. The chips only appear once you have more than one rig; a single-rig library has nothing to filter.

Each card shows a thumbnail, the object name, the rig it belongs to (or **Unassigned** for frames that matched no rig), a badge per filter with that filter's integration hours, and a proportional bar splitting the total integration across filters. Below that: total integration hours, accepted frame count, rejected count when any frames are rejected, flagged count when any are flagged, session count, and the date the target was last imaged.

A status badge on the right reads one of three states: **Stacked** once the target has a completed master, otherwise **Culled** once any of its frames are rejected, otherwise **Acquiring**.

> **Screenshot:** The Targets list with the rig chips row and one card expanded to show its filter badges and integration bar.

## Opening a target

Click a card to open its target page. The header carries the alignment reference and the status badge; the tabs below it are **Overview**, a per-filter coverage summary for the whole target, then one tab per filter you have data for. Each filter tab is the workbench for that filter's frames and masters, covered in [culling frames](../inspect/culling-frames.md), [choosing an alignment reference](../stack/choose-an-alignment-reference.md) and the stacking pages.

## Related

- [Rigs and equipment groups](./rigs-and-equipment-groups.md)
- [How nights are grouped into sessions](./sessions.md)
- [What is the alignment reference and how do I change it?](../stack/choose-an-alignment-reference.md)
- [Culling frames](../inspect/culling-frames.md)
