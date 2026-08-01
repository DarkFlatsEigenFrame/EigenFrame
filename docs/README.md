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

**Register and stack.** Frames are fitted to one alignment reference per target and rig from the star catalogs alone. A blink comparator lets you judge any fit yourself and accept, lock or reset it. Integration applies calibration inline, with pixel repair, quality weighting, localized normalization and tunable rejection, dialed in against a single-tile stacking lab before you commit the full stack.

**Organize itself.** Rigs, sessions and targets are discovered from your headers. Nothing is moved, copied, renamed or uploaded.

## Get started

- [Install EigenFrame](./start/install.md)
- [Add your library](./start/add-your-library.md)
- [Your first scan](./start/first-scan.md)
- [Your first hour](./start/first-hour.md)
- [What EigenFrame does with your files](./start/what-eigenframe-does-with-your-files.md)

## Your library

- [Supported file formats](./library/supported-file-formats.md)

## Help

- [Troubleshooting](./help/troubleshooting.md)
- [Reporting a problem](./help/reporting-a-problem.md)

These pages document the current release. EigenFrame updates itself, so keep the app current and the pages will match what you see.
