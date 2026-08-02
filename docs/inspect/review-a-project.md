---
title: How much Ha do I actually have, and what's still worth shooting?
description: The target Overview tab reads as a per-filter coverage board, hours and stack state side by side, so you know at a glance what's done, what's stale, and what's not started.
---

# How much Ha do I actually have, and what's still worth shooting?

A target's **Overview** tab lists every filter you have data for, one row each, with the hours, the frame count, and whether that filter has been stacked. It is the page to open before a session to decide what to shoot, and after one to see what changed.

Find the target from the [Targets list](../library/targets.md), then stay on **Overview**, the tab a target page opens on.

## The per-filter row

Each row names the filter and gives its totals: hours, frame count, and rejected count, for example `14.0h · 70 frames · 0 rejected`. Beside that, a thumbnail: the latest master once one exists, otherwise the best available sub, so every row shows an actual picture of what that filter looks like rather than a bare number.

Where star detection has run, a line reports coverage: `no quality metrics yet`, or `N of M frames with quality metrics`, or, once every frame carries metrics, the frame count on its own.

> **Screenshot:** A target's Overview tab showing the per-filter coverage board with one filter stacked and one still acquiring.

## Stack state

To the right, each row states where that filter stands:

- **not stacked yet**, no master has been built for this filter.
- **X.Xh stacked, N frames**, the filter has a completed master, with the hours and frame count that went into it.
- **imported, sources unknown**, the filter's master came from outside EigenFrame, so which frames built it is not tracked.

"Stacked" means the frames in the *latest completed master* for that filter, not every frame that has ever contributed to any master on it.

## Restacking adds, it doesn't replace

Building a new master for a filter that already has one does not retire the old one. The earlier master stays on the Stacks page and in that filter's Masters view; Overview's row simply moves to point at the newest. If you want the earlier result gone, reject or delete it yourself, the same as any other master.

## Staleness

A stacked filter can drift out of date with its own source data. Two lines say so, shown together when both apply:

- **N frames newer**, frames accepted for this filter since the latest master was built.
- **N stacked frames now rejected**, frames that went into the latest master but have since been rejected.

Either one is a reason to restack: the master on the row is no longer the best answer for what you currently have culled in.

## The doorway

Each row ends in a button whose label matches its state:

- **Cull and stack** on a filter that has never been stacked.
- **Cull and restack** on a filter that is stale, newer frames, since-rejected frames, or both.
- **Open**, followed by the filter name, on a filter that is stacked and current.

Any of the three lands you on that filter's own tab, the workbench where culling, calibration, alignment, and stacking actually happen. See [culling frames](./culling-frames.md), [how calibration is assigned](../calibration/how-calibration-is-assigned.md), and [choosing an alignment reference](../stack/choose-an-alignment-reference.md).

## Frames and Masters

On a filter's own tab, a **Frames | Masters** toggle sits above the workbench. **Frames** is the readiness pipeline: calibration, quality, alignment, and the contact sheets you cull from. **Masters** lists the light masters that filter has produced, completed, in progress, or queued, with the same curation and flip-through controls as anywhere else stacks are listed. A filter with no stacks yet always opens on Frames; once it has one, your last choice of tab is remembered as you move between filters.

## Why Overview carries no warnings

Nothing on this tab is a warning, an exception, or a flag, and that is deliberate rather than an oversight. Overview shows only what cataloging already knows: hours, frame counts, whether a filter is stacked, whether frames are newer than the last stack. It does not run star detection, does not check calibration assignments, and does not evaluate alignment, so it has nothing to say about frame quality, a broken flat, or a fit that won't converge. Anything that depends on inspection lives on the filter's own tab, not here.

That matters because an empty Overview row past the basics looks identical whether the filter is genuinely fine or simply hasn't been looked at yet. The absence of a warning on this tab is not a clean bill of health. Open the filter tab to find out what inspection actually shows.

## Related

- [The Targets list](../library/targets.md)
- [Culling frames](./culling-frames.md)
- [How EigenFrame decides which masters calibrate which lights](../calibration/how-calibration-is-assigned.md)
- [What is the alignment reference and how do I change it?](../stack/choose-an-alignment-reference.md)
- [Find and manage your stacks](../stack/find-and-manage-your-stacks.md)
- [Reviewing a night](./review-a-night.md)
