---
title: EigenFrame documentation
description: How to use EigenFrame, the local astrophotography preprocessing app for monochrome XISF and FITS libraries. Install it, catalog your frames, inspect, calibrate and stack.
---

# EigenFrame documentation

EigenFrame is astrophotography preprocessing for monochrome XISF and FITS libraries. It runs entirely on your workstation, indexes your frames where they already sit, and takes them from raw capture to a linear integrated master.

## What it does

**Inspect every frame at full resolution.** A tile-streamed viewer opens a large frame instantly, zooms to sub-pixel detail, and shows the full header and pixel statistics beside it. An adjustable stretch makes linear data judgeable without touching a pixel.

**Score and cull with evidence.** Star detection measures FWHM, HFR, eccentricity, SNR and star count on every sub, plus a transparency metric that catches haze leaving stars sharp. Order a whole filter by any of them and reject a range. Rejection is reversible.

**Calibrate and verify.** Build bias, dark and flat masters from your own frames, or bring in masters you built elsewhere. Every light carries its own bias, dark and flat assignment, matched on camera signature, exposure, set-temp tolerance and flat epoch. Thumbnails render calibrated wherever masters are assigned, so an over- or under-correcting flat shows up in seconds.

**Judge your flats.** Each night and filter of flats gets a verdict, separating a one-off contaminated frame from dew building through the run from a real change in the optical train.

**Register and stack.** Frames are fitted to one alignment reference per target and rig from the star catalogs alone. Flip any frame against the reference to judge the fit yourself, then accept, lock or reset it. Integration applies calibration inline, with pixel repair, quality weighting, localized normalization and tunable rejection, dialed in against a single-tile stacking lab before you commit the full stack.

**Organize itself.** Rigs, sessions and targets are discovered from your headers. Nothing is moved, copied, renamed or uploaded.

## Get started

- [Install EigenFrame](./start/install.md)
- [Add your library](./start/add-your-library.md)
- [Your first scan](./start/first-scan.md)
- [Your first hour](./start/first-hour.md)
- [What EigenFrame does with your files](./start/what-eigenframe-does-with-your-files.md)

## Your library

- [Library folders](./library/library-folders.md)
- [Import rules](./library/import-rules.md)
- [Supported file formats](./library/supported-file-formats.md)
- [Rigs and equipment groups](./library/rigs-and-equipment-groups.md)
- [Sessions](./library/sessions.md)
- [Targets](./library/targets.md)
- [Artifacts and Unclassified](./library/artifacts-and-unclassified.md)
- [Offline drives and NAS](./library/offline-drives-and-nas.md)

## Inspect and cull

- [The image viewer](./inspect/image-viewer.md)
- [Stretch and histogram](./inspect/stretch-and-histogram.md)
- [Star detection and frame quality](./inspect/star-detection-and-frame-quality.md)
- [Transparency](./inspect/transparency.md)
- [Culling frames](./inspect/culling-frames.md)
- [Review a night](./inspect/review-a-night.md)
- [Review a project](./inspect/review-a-project.md)

## Calibration

- [How calibration is assigned](./calibration/how-calibration-is-assigned.md)
- [Build bias and dark masters](./calibration/build-bias-and-dark-masters.md)
- [Build flat masters](./calibration/build-flat-masters.md)
- [Use masters you built elsewhere](./calibration/use-masters-you-built-elsewhere.md)
- [Flat epochs](./calibration/flat-epochs.md)
- [Flat quality verdicts](./calibration/flat-quality-verdicts.md)
- [When calibration is not applied](./calibration/when-calibration-does-not-bind.md)

## Register and stack

Work these in order. Each step depends on the one before it.

- [Choose an alignment reference](./stack/choose-an-alignment-reference.md)
- [Evaluate alignment](./stack/evaluate-alignment.md)
- [The Alignment Viewer](./stack/alignment-viewer.md)
- [When frames will not align](./stack/when-frames-will-not-align.md)
- [Integrate aligned frames](./stack/integrate-aligned-frames.md)
- [Rejection and normalization](./stack/rejection-and-normalization.md)
- [Quality weighting](./stack/quality-weighting.md)
- [Pixel repair](./stack/pixel-repair.md)
- [Stack presets](./stack/stack-presets.md)
- [Where stacks are saved](./stack/where-stacks-are-saved.md)
- [Find and manage your stacks](./stack/find-and-manage-your-stacks.md)

## Reference

- [The screens](./reference/the-screens.md)
- [Settings](./reference/settings.md)
- [Performance and cache](./reference/performance-and-cache.md)
- [Updates](./reference/updates.md)
- [Diagnostics and telemetry](./reference/diagnostics-and-telemetry.md)
- [Where EigenFrame stores its data](./reference/where-eigenframe-stores-its-data.md)
- [Glossary](./reference/glossary.md)
- [Keyboard shortcuts](./reference/keyboard-shortcuts.md)

## Help

- [Troubleshooting](./help/troubleshooting.md)
- [Reporting a problem](./help/reporting-a-problem.md)
- [FAQ](./help/faq.md)

These pages document the current release. EigenFrame updates itself, so keep the app current and the pages will match what you see.
