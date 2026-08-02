---
title: What screen am I looking at?
description: "A one-paragraph lookup for every screen in EigenFrame: what it is, how you get to it, and which task page covers it."
---

# What screen am I looking at?

The rest of this site is organized by task. This page is the opposite: pick the screen you are staring at and find out what it does and where to read more.

The nav bar runs Targets, Sessions, Artifacts, Stacks, and Equipment, in that order. Everything else is either an overlay opened from one of those screens, or a settings screen reached from the gear menu next to the version number in the header, not from the nav bar.

## Targets

The landing page of the library: one card per object per rig, sorted by when you last shot it. Each card totals its hours and shows a strip of thumbnails per filter. Click a card to open the target detail page, which adds an Overview tab and one tab per filter; a filter tab is where you inspect frames, evaluate alignment, and integrate a stack. See [targets](../library/targets.md), [review a project](../inspect/review-a-project.md), and [choose an alignment reference](../stack/choose-an-alignment-reference.md).

## Sessions

A list of every night you have cataloged, newest first, one card per date. Click a date to open the session page: one rig's night at a time, with sky conditions, calibration status, and calibrated contact sheets for catching a bad flat before you stack. See [sessions](../library/sessions.md) and [review a night](../inspect/review-a-night.md).

## Artifacts

A single table of everything in the catalog: three tabs for Frames, Masters, and Unclassified, four subtype pills under Frames and Masters, and a filter bar for narrowing by camera signature. This is where you fix files that came in wrong and manage frames in bulk rather than inspect one night. See [artifacts and Unclassified](../library/artifacts-and-unclassified.md).

## Stacks

A list of every stacking run, with status, settings, and source frames for each. Filter by status or subtype to find a run you started earlier. See [find and manage your stacks](../stack/find-and-manage-your-stacks.md).

## Equipment

One card per rig, discovered from your frame headers. From here you rename a rig, edit its grouping rule, jump to its most recent session, mark an optical-train change, or open its Flats page. See [rigs and equipment groups](../library/rigs-and-equipment-groups.md) and [how long is a flat good for](../calibration/flat-epochs.md).

> **Screenshot:** The library nav bar with the gear menu open.

## Flats

One rig's flat history: a session timeline broken into epochs, with a dock per night and filter for reviewing frames, reading that batch's flat verdict, and building or managing a master. Flats has no nav-bar entry of its own; open it for one rig at a time from that rig's card on Equipment, or from the Flats this night section on a session page. See [how long is a flat good for](../calibration/flat-epochs.md) and [what the flat verdicts mean](../calibration/flat-quality-verdicts.md).

## The image viewer

A full-screen overlay for one frame: canvas on the left, a collapsible panel of tabs on the right, a filmstrip along the bottom. Opens from a session contact sheet, from Cull by metric, from the Artifacts page, or from a target's filter tab; Escape closes it. See [how do I look at a frame properly](../inspect/image-viewer.md).

## The Alignment Viewer

The frame-by-frame fit review for one target and filter: flip between a frame and the alignment reference, read the fit numbers, and accept, reject, or reset a frame's alignment. Opens from the Needs attention panel's Review action, or by clicking into any frame from a filter's contact sheet. See [evaluate alignment](../stack/evaluate-alignment.md) and [judging a fit yourself](../stack/alignment-viewer.md).

## The integrate panel and stacking lab

A large panel over a target's filter tab, opened with **Integrate aligned frames**: settings on the left, the single-tile stacking lab on the right, and a queue strip below. Tune rejection, normalization, quality weighting and pixel repair against the lab tile before committing the full stack. See [integrate aligned frames](../stack/integrate-aligned-frames.md), [rejection and normalization](../stack/rejection-and-normalization.md), and [stack presets](../stack/stack-presets.md).

## The Activity tray

A running list of background work, opened from an icon in the header on every screen: scans, re-index passes, star detection, alignment runs, stacks, and update downloads. Open it to watch progress or cancel a job after navigating away from the page that started it.

## Manage Library

Reached from the gear menu. Add, scan, pause, or remove library folders, edit a folder's intake scope, type override and import rules, and add a read-only cloud source. See [library folders](../library/library-folders.md) and [import rules](../library/import-rules.md).

## Stack Outputs

Reached from the gear menu. Set the filename templates EigenFrame uses when it saves a stacked master, with a live preview and the folder coverage each template resolves into. See [where stacks are saved](../stack/where-stacks-are-saved.md).

## Performance Settings

Reached from the gear menu. Tune read, compute, and scan concurrency, the in-flight memory budget, the tile cache size and location, and cache migration between drives. See [performance and cache](./performance-and-cache.md).

## Diagnostics

A floating, draggable, text-only overlay opened from its own header icon beside the Activity tray. It prints live counters for tile builds, cache state, and background work, and copies them to the clipboard for a problem report. See [reporting a problem](../help/reporting-a-problem.md) and [diagnostics and telemetry](./diagnostics-and-telemetry.md).

## Related

- [Glossary](./glossary.md)
- [Settings](./settings.md)
- [Review a night](../inspect/review-a-night.md)
- [Review a project](../inspect/review-a-project.md)
- [Keyboard shortcuts](./keyboard-shortcuts.md)
