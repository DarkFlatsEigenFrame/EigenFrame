---
title: It's scanning. What is it doing, and can I stop it?
description: What EigenFrame's first library scan does, how to watch its progress on the folder dashboard, and the difference between Stop and Stop and clear.
---

# It's scanning. What is it doing, and can I stop it?

When you add a library folder, EigenFrame walks every file in it, reads enough of each to classify it, and catalogs what it finds. For a library with years of frames, that first pass takes a while. This page explains what to watch while it runs and how to stop safely if you need to.

## Watch the folder's Details dashboard

Open the folder from Manage Library and its Details dashboard shows the run live, updating every few seconds:

- **Indexed / total** counts, plus how many files this run has added so far.
- A progress bar.
- Class-count chips once files start landing: frame and master counts by type, and an Unclassified count if anything couldn't be identified.
- **Targets** and **Sessions** counts, so you can see structure emerging as frames are cataloged.
- **Rigs so far**, the equipment groups EigenFrame has recognized from the frames it has read. A rig is one camera and telescope pairing. This is where you confirm it understood your hardware correctly, before the run finishes.
- A **things to look at** block listing exceptions: files it couldn't classify, files it couldn't read, or frames that landed without an equipment group. Each entry shows sample paths and a link to the page that handles it.

> **Screenshot:** A library folder's Details dashboard mid-scan, with live counts and the Rigs so far panel.

If a rig in "Rigs so far" looks wrong, for example two entries for the same gear after a capture-tool rename, the Equipment page is where you review, rename, and merge them.

## Stopping a scan

Two buttons appear while a scan is running, and they do different things:

- **Stop** ends the run and keeps everything indexed so far. Nothing is undone.
- **Stop and clear** ends the run and removes only what *this run* added. Frames cataloged before you started the scan are left alone.

Either way, files on disk are never touched. Stopping a scan only affects what's in the catalog, not what's in your library folder.

If you use Stop and clear, a confirmation shows exactly how many files will be removed from the catalog before you commit.

## The end-of-run digest

When a scan finishes, the dashboard prints a one-line digest: how many files were walked, how many were added, how many were restored if any had gone missing and reappeared, how many missing files were removed, and how many were already current and skipped. Reopen the folder's dashboard any time to see this line for the last completed run.

## This is a one-time cost

A first scan of a large library is slow because it has to read every file. Once it completes, later scans only look at what changed: new files, moved files, deletions. Day-to-day scans are fast.

## Where to go next

Once the scan finishes, head to [your first hour](./first-hour.md) to see what to do with a freshly cataloged library. If files landed in the wrong place or didn't get picked up at all, check [supported file formats](../library/supported-file-formats.md). For what EigenFrame guarantees about your original files, see [what EigenFrame does with your files](./what-eigenframe-does-with-your-files.md). If something looks wrong and this page didn't explain it, see [troubleshooting](../help/troubleshooting.md).
