---
title: Where are all my stacks, and can I re-run one?
description: "The Stacks page: Active and History, the filter bar, expanding a row, viewing a result, re-running a stack, and cancelling one in progress."
---

# Where are all my stacks, and can I re-run one?

Open **Stacks** from the library nav for a single list of every stacking run in your catalog, calibration masters and Light masters alike.

> **Screenshot:** The Stacks page with one active run and a history row expanded to show its source frames.

## Active and History

A stack sits in **Active** for as long as it is running: preparing its source tiles, planning, combining, or saving. The card shows its status, subtype, frame count, and a progress readout that updates on its own.

The moment a stack finishes, whether it completed, errored, or was cancelled, it moves into **History**. History rows list newest first and load more as you scroll.

## The filter bar

A segmented control narrows by subtype: **All**, **Bias**, **Dark**, **Flat**. Beside it:

- **Status** narrows to one stage: Queued, Warming, Coordinating, Integrating, Finalizing, Complete, Error, Cancelled.
- **Rig** narrows to one equipment group.
- **Submitted** takes a from and to date, filtering on when the stack was submitted.
- **Session** takes a single date, filtering on the session the source frames came from.
- **Filter** and **Instrument** are free-text, matching a substring of the optical filter name or camera model.

Every filter you set is reflected in the page's URL, so a filtered view is shareable and survives a refresh. **Clear (N)** resets all of them at once; N is however many are currently active. With filters set and nothing matching, the page says so and offers the same clear action.

## Expanding a row

Click a History row to expand it. Underneath, **Rejection**, **Normalization**, and either the bias master used or the calibration summary (for a Light master, since it calibrates per frame) show exactly what the stack ran with. Below that is the full list of source frames, each with its filename, gain, offset, exposure, temperature, and binning, paginated for a large frame count.

An errored stack shows its error message directly on the row, expanded or not.

## Viewing the result

A completed stack's thumbnail opens the result in the viewer, either from the thumbnail itself or the **View** link on its row.

## Re-running a stack

**↻ Re-run** on a completed or errored calibration master (Bias, Dark, or Flat) submits a new stack with the same source frames and the same settings, adding a fresh entry to the queue rather than replacing the one you re-ran. Light masters do not offer re-run here; rebuild one from the target's [Integrate aligned frames](./integrate-aligned-frames.md) panel instead.

## Cancelling a running stack

Cancel a stack in progress from the Activity tray, which tracks every background job across the app regardless of which page you're on. A Light master in progress can also be cancelled from the target's Masters mode, described next.

## Curating Light masters: Masters mode

The Stacks page manages every stack across your whole catalog. To review and curate the Light masters for one target and filter, switch to **Masters mode** on that target's filter tab. It lists every Light master that filter has produced, in progress and finished, with the same viewing behavior as here plus:

- **Reject** marks a master excluded, reversible with **Restore** at any time.
- **Delete**, offered once a master is rejected, removes its file from disk. It is permanent and asks for confirmation.

See [rejecting versus deleting](../inspect/culling-frames.md) for how those two actions differ everywhere else in EigenFrame.

## Related

- [How do I stack?](./integrate-aligned-frames.md)
- [Where did my stacked master go, and how do I control the filename?](./where-stacks-are-saved.md)
- [What do rejection and normalization do?](./rejection-and-normalization.md)
- [What's the difference between rejecting and deleting?](../inspect/culling-frames.md)
- [Where do I see everything at once, and how do I fix files that didn't classify?](../library/artifacts-and-unclassified.md)
- [Glossary](../reference/glossary.md)
