---
title: Add your library
description: Point EigenFrame at the folder where your captures already live, set the four intake options on it, and start your first scan. Nothing is moved or copied.
---

# Add your library

When EigenFrame launches, it opens on **Targets**, empty. The empty state's call to action is **Manage Library**, also reachable any time from the gear menu at the top right.

> **Screenshot:** Targets page empty state with the Manage Library button.

Click **Manage Library**, then **+ Add Folder**. Choose a directory with the native folder picker.

> **Screenshot:** Manage Library, Add Folder form with all four options visible.

EigenFrame indexes XISF and FITS files where they are. Nothing is moved, copied, renamed, or uploaded.

Start with one representative folder, a single target or a single month, rather than your whole library. A first scan tells you how EigenFrame classified your files and grouped your rigs before you commit the rest.

## The four options

**Include subdirectories.** On by default. Walks every folder beneath the one you chose. Turn it off to index only the files directly inside it.

**Intake scope.** Choose *Everything*, or *Only specific kinds…* to filter by Categories (Frames, Masters) and Subtypes (Lights, Flats, Darks, Bias). Unchecking a box excludes that detected kind from this folder. Unreadable files are always indexed regardless of scope. Tightening the scope later drops already-cataloged out-of-scope records; loosening it re-adds them on the next scan.

**Override (type).** None, Bias, Dark, Flat, or Light. Forces newly arriving files in this folder to the chosen type even when their header disagrees. Leave it at None to use the detected type. This only labels files as they're indexed; it never touches files already cataloged.

**Equipment group.** Auto-discover, or a specific rig. Assigns newly arriving lights and flats in this folder to the chosen rig instead of letting EigenFrame auto-discover it from camera and telescope headers. Like Override, this applies only to newly indexed files.

## The folder is added unscanned

Clicking **Add to library** creates the folder card but indexes nothing. Review the card, then press **Scan**. Nothing happens until you do.

> **Screenshot:** Folder card showing Not scanned status with the Scan button.

For what a scan actually does, see [First scan](./first-scan.md). For the full read, delete, and create guarantees around your files, see [What EigenFrame does with your files](./what-eigenframe-does-with-your-files.md). For which formats are picked up, see [Supported file formats](../library/supported-file-formats.md).
