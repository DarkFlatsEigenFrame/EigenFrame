---
title: Troubleshooting
description: "Fixes for common EigenFrame problems: blank windows, failed scans, misclassified frames, unapplied flats, stalled stacks, cache pressure, and performance tuning."
---

# Troubleshooting

Find the symptom below.

## The window is blank on Windows

EigenFrame renders through the WebView2 runtime. Windows 11 and recent Windows 10 updates ship it already; an older or locked-down Windows install may not have it, and the window stays blank on launch. Install the free Evergreen bootstrapper from `https://developer.microsoft.com/microsoft-edge/webview2/` and relaunch. See [Installing EigenFrame](../start/install.md).

## macOS will not open it

The installer isn't signed with an Apple Developer certificate, so Gatekeeper blocks a plain double-click. Right-click (or Control-click) the installer, choose Open, and confirm once. You only need to do this the first time. See [Installing EigenFrame](../start/install.md).

## The scan found nothing

Work through these in order:

- **File extensions.** EigenFrame catalogs `.xisf`, `.fits`, `.fit`, and `.fts`. Anything else in the folder is invisible to the scan. See [Supported file formats](../library/supported-file-formats.md).
- **Intake scope.** A library folder can be scoped to specific frame types. If the scope excludes the type you added, those files are skipped on purpose.
- **Include subdirectories.** If your files sit in nested session folders, confirm the folder was added with subdirectories included.
- **Added versus scanned.** Adding a folder registers it; scanning is what actually walks it. Check that a scan has run since the folder was added.

See [Adding your library](../start/add-your-library.md).

## Everything came in as Unclassified

A file lands in Unclassified when EigenFrame can't read a usable header, or the header is missing the fields needed to tell Bias/Dark/Flat/Light apart. On the Artifacts page, open the Unclassified view: each row shows a Reindex control that forces a fresh read of that one file, and a bulk "Reclassify all errored" button re-reads every file stuck in a read error at once. Files that already decode fine but simply lack classifying keywords stay Unclassified until you set the type yourself.

## My masters came in as light frames

An integrated master built outside EigenFrame (PixInsight, WBPP) often carries `IMAGETYP=LIGHT` in its header, because the stacking tool that produced it wrote the type of the frames it stacked, not the type of the result. EigenFrame reads that header value literally unless told otherwise.

Fix it with the library folder's Override setting: pick a type there and every file scanned under that folder from then on uses it instead of the header. For finer control, a folder also accepts ordered import rules, pattern-matched and first-match-wins, where a rule's action can be Exclude or a type hint. Both the Override and the rules are forward-only: they affect files as they're scanned, not files already cataloged. To fix records that already came in wrong, use "Re-apply to existing records" next to the rules editor. It is record-only, never rewrites files on disk, and never flips a frame into a master or back.

## My session date is a day off

A session is one night for one rig. EigenFrame assigns the session date by taking the local capture time, subtracting twelve hours, and using the resulting date. A frame shot at 1 a.m. therefore belongs to the previous evening's session, and the date shown is always the evening the session started.

## Thumbnails are black

Linear data renders black until it is stretched. Adjust the black clip and stretch factor in the viewer, and save the result to the rig so every frame on it opens the same way. The stretch is a display transform only, so it changes what you see and never the stored pixel values. If a frame is still black after the data has loaded and the stretch has settled, check that it isn't genuinely blank.

## A flat is not being applied

The calibration assignment step looks for a flat master matching the light's filter, rig, and epoch, and reports why one couldn't be found. Common reasons:

- **No flat master exists yet** for that filter and date on this rig.
- **The light and the available flats sit on opposite sides of an epoch boundary.** An epoch is the stretch over which one flat still corrects your lights, and it ends when the optical response changes. A flat from before an optical-train change does not calibrate a light from after it, or the reverse.
- **The match fields don't line up.** Camera signature, binning, or gain differ between the light and the candidate flat.

The session and target pages show the specific unresolved reason next to the affected frames, along with a link to build a flat for that filter and date when one is missing.

## Alignment fails on many frames

Work through the likely causes:

- **Reference quality.** A poor alignment reference (odd rotation, out-of-focus, low star count) drags down every fit against it. Re-evaluate against a better reference.
- **Stale detection.** If stars were detected before a recalibration or a significant change to the frame, the detection is out of date and refitting won't help until it's redone.
- **Rig tolerance too tight.** A legitimate field rotation between sessions can exceed the rig's configured rotation or scale tolerance and land as Out of band even though the fit itself is fine. The tolerances are on the Equipment page.
- **Genuinely hard fields.** Sparse star fields, dense star fields, and large rotations between frames are harder to match and fail more often regardless of tuning.

A frame marked **Out of band** did produce a self-consistent fit, but its scale or rotation falls outside the rig's tolerance. It is advisory, and you can accept the fit yourself if you know the rotation is real. **Won't align** means no match was found at all. Nothing is culled automatically in either case.

For the full decision tree, see [when frames will not align](../stack/when-frames-will-not-align.md).

## A stack failed or was cancelled

A stack fails when one of its source frames couldn't be prepared, usually a decode failure on that specific file. The failure names the artifact involved, so you can go straight to it instead of guessing. Reject that source and rerun the stack, or investigate the named file (corrupt download, unsupported variant, damaged on disk) if it's unexpected.

## The app is slow, or it is using all my RAM

Performance Settings has the levers:

- **Read Concurrency**, how many whole-frame reads run in parallel for tile and thumbnail builds. Lower it for a library on a spinning disk or a network share.
- **Compute Concurrency**, tile build threads. Defaults to your CPU count, capped at 16.
- **In-Flight Memory Budget**, the ceiling on memory held by reads in progress. Reads back off once this fills rather than piling up.

Lower these on a memory-constrained machine and raise them on a workstation with headroom to spare. Both Read and Compute Concurrency at 2 or below noticeably slows everything down, and the settings page warns you if you land there. Changes apply immediately with no restart.

## My cache drive filled up

The tile cache is fully disposable. Every tile rebuilds on demand from your source frames, so nothing is lost if it is emptied. Performance Settings controls its footprint:

- **Cache Size Cap**, the overall disk ceiling for cached tiles.
- **Drive Free-Space Reserve**, keeps at least this much free on the cache drive regardless of the cap.
- **Drive Eviction Target**, how much to reclaim in one pass once the reserve is breached, so eviction doesn't thrash right at the edge.

If the cache is on the wrong drive entirely, changing the Cache Location field opens a guided relocation: move the existing cache to the new location, start fresh with an empty one, or switch and clean up the old files yourself later.

## My NAS was offline when I opened the app

An unreachable library folder is skipped during startup, not swept for missing files. It shows as Unreachable rather than losing its catalog: nothing is deleted, and once the drive or share comes back, the next scan reconciles it normally. If you're deliberately taking a folder offline for a while, pausing it avoids the Unreachable state entirely.

Network-mounted library folders on Linux have separately produced a stall report where background work appeared to hang. The underlying causes have been diagnosed and mitigated; if you're on Linux with a library folder on a network mount and see stalled progress, update to the latest version first.

## Still stuck

See [Reporting a problem](./reporting-a-problem.md).
