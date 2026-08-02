---
title: Does EigenFrame send my data anywhere?
description: Diagnostics are off by default and one toggle is the only thing that enables them. What each event carries, what is never sent, and how to point them at your own resource.
---

# Does EigenFrame send my data anywhere?

Not unless you turn diagnostics on. The **Send diagnostics** toggle in Performance Settings is off by default and is the only thing that enables sending. With it off, nothing leaves your machine: no events, no counters, no heartbeat.

Your frames never leave your machine either way. Diagnostics carry operational events about what the app did, never image data.

> **Screenshot:** Performance Settings, the Diagnostics section with the Send diagnostics toggle off.

## The toggle

Open **Performance Settings** from the gear menu and scroll to **Diagnostics**. One switch, off by default. Turn it on to send, turn it off to stop.

Changing the destination below it also switches sending back off, so a new destination always needs a fresh, deliberate opt-in.

Turning the toggle off stops new events immediately. Anything already queued may still finish sending.

## What is sent when it is on

- **Build identity.** App version, .NET runtime description, operating system description, once per launch.
- **Request timings.** The internal route, duration, and status code of each request the app makes to itself while you use it.
- **Tile and thumbnail builds.** Outcome, image size level, per-phase timings, tiles written.
- **Library scans.** The folder path scanned, what triggered it, whether the drive is local or network, file and index counts, elapsed seconds, concurrency.
- **Catalog exceptions.** The path of a file that could not be read or classified, and the reason, plus its size.
- **Star detection.** The frame, whether the pass ran on raw or calibrated data, candidate and accepted star counts, and the thresholds in effect.
- **Alignment runs.** The object name, the filter, the outcome, the algorithm, counts of fitted and failed frames, and timings.
- **Stacks.** The object name, the filter, the rejection and normalization settings, per-phase timings, and value-distribution figures for the result.
- **Cache eviction.** What triggered it, how much was freed, and the cache fill level.
- **Update events.** Which update phase was reached, the version moved from and to, and a reason on failure.

The connection also carries what any Application Insights client attaches on its own: a session identifier, the SDK version, and your IP address, from which the service derives an approximate location.

## Some events include paths and target names

Worth knowing before you turn it on. Scan events carry the **library folder path** they walked, and catalog-exception events carry the **full path of the file** involved. Alignment and stack events carry the **object name** you gave the target. Together those can reveal your library layout, your local username if it appears in a path, and what you image.

## Never sent

- Credentials of any kind, including cloud-source connection details.
- Pixel data, thumbnails, or tiles.
- FITS or XISF header contents.
- Catalog rows: your frame list, your rejections, your calibration assignments, your notes.

## Sending to your own resource

Leave the **Connection String** field blank and diagnostics go to the EigenFrame team, to investigate issues. Paste your own Application Insights connection string instead and they go to your resource and nowhere else, which is the option to take if you want the operational data for yourself without sharing it.

The field is masked as you type. Changing it turns sending off until you re-enable it.

## The Diagnostics panel is a different thing

The **Diagnostics** panel in the app header is local only. It prints the current internal state, host or viewer, for you to read or copy into a problem report. It sends nothing anywhere and works with the Send diagnostics toggle off. See [reporting a problem](../help/reporting-a-problem.md).

## Related

- [Performance and cache](./performance-and-cache.md)
- [Where EigenFrame stores its data](./where-eigenframe-stores-its-data.md)
- [What EigenFrame does with your files](../start/what-eigenframe-does-with-your-files.md)
- [Reporting a problem](../help/reporting-a-problem.md)
