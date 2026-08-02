---
title: Frequently asked questions
description: Quick answers on cost, privacy, colour support, uninstalling, and file safety, each linking to the page that covers it in full.
---

# Frequently asked questions

## Is EigenFrame free?

Yes. EigenFrame is free to download and use, with no license key to enter and no paid tier. See [installing EigenFrame](../start/install.md).

## Does it need an account or an internet connection?

No account and no sign-in. Once installed, EigenFrame works with no internet connection at all. See [installing EigenFrame](../start/install.md).

## Will it modify, move, or reorganize my files?

No. EigenFrame reads your library where it already sits, deletes a file only on your own explicit confirmed request, and writes a new stack only to the output location you configure. See [will this reorganize, move, or damage my library?](../start/what-eigenframe-does-with-your-files.md)

## Does it support colour cameras?

No. EigenFrame reads monochrome XISF and monochrome FITS today. One-shot-colour or Bayer-matrix data and camera raw formats (CR2, NEF, ARW, DNG and similar) are not read. See [will EigenFrame read my data?](../library/supported-file-formats.md)

## Can I use masters I built elsewhere?

Yes. Put the file in a library folder and scan it; it registers exactly the way a master EigenFrame built itself would, and calibration assignment can use it right away. See [can I use my existing master darks instead of rebuilding them?](../calibration/use-masters-you-built-elsewhere.md)

## Where do my stacked masters get saved?

To a path built from a template you control, one each for Bias, Dark, Flat, and Light, editable from the Stack Outputs settings screen. The stack is cataloged automatically once that path lands inside a library folder. See [where did my stacked master go?](../stack/where-stacks-are-saved.md)

## Is my data uploaded anywhere?

Your frames never leave your machine, under any setting. Diagnostics, operational events only, are off by default and stay off until you turn them on yourself. See [does EigenFrame send my data anywhere?](../reference/diagnostics-and-telemetry.md)

## What are the system requirements?

Windows 10 or later on x64, x64 Linux as an AppImage, or an Apple Silicon Mac (there is no Intel build). There is no published minimum spec: more RAM and an SSD at the cache location make a large library noticeably more responsive. See [installing EigenFrame](../start/install.md).

## How do I uninstall it?

On Windows, uninstall EigenFrame the normal way, from Windows Settings or Apps & Features, the same as any installed application. On Linux, there is nothing to uninstall beyond deleting the downloaded AppImage file, since running it never installed anything. On macOS, drag the app from Applications to the Trash. On every platform, EigenFrame's own catalog and cache sit in a separate application-data folder and are untouched by removing the app; see [where EigenFrame stores its data](../reference/where-eigenframe-stores-its-data.md). See [installing EigenFrame](../start/install.md).

## Why is my OS warning me about the installer?

The installer is unsigned on every platform, which is expected rather than a sign of a corrupted download. Windows shows a SmartScreen warning and macOS Gatekeeper blocks a plain double-click; both are one-time, first-install steps. See [installing EigenFrame](../start/install.md).

## Related

- [Installing EigenFrame](../start/install.md)
- [Will this reorganize, move, or damage my library?](../start/what-eigenframe-does-with-your-files.md)
- [Will EigenFrame read my data?](../library/supported-file-formats.md)
- [Does EigenFrame send my data anywhere?](../reference/diagnostics-and-telemetry.md)
- [Troubleshooting](./troubleshooting.md)
- [Reporting a problem](./reporting-a-problem.md)
