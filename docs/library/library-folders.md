---
title: How do I control what gets indexed from where?
description: "The Manage Library screen in full: per-folder scope, type override, rig assignment, scan and pause actions, status badges, and what removing a folder does."
---

# How do I control what gets indexed from where?

**Manage Library** is the list of every folder EigenFrame indexes. Open it from the gear menu at the top right. Each folder is a card carrying its own settings, its own status, and its own actions, so a folder of finished masters and a folder of raw subs can be treated completely differently.

[Add your library](../start/add-your-library.md) covers adding the first one. This page is the reference for everything you can do to a folder afterward.

> **Screenshot:** Manage Library with three folder cards, one mid-scan.

## Reading a card

The top line is the folder's path, prefixed with a badge for where it lives: **Local**, **Azure** or **S3**. Beside it is the frame count, or, mid-scan, the indexed-of-total progress. Then a status badge:

- **Not scanned.** Added, but never indexed. Nothing from it is in the catalog yet.
- **Ready.** Indexed and current.
- **Scanning…** A scan is running, with a progress bar under the card.
- **Paused.** You stopped the scan and kept what it had indexed. Resume picks it up.
- **Unreachable.** The drive or share was not available. The catalog for this folder is preserved untouched and reconciles when it returns.
- **Error.** Something went wrong; hover the badge for the message.

Under the card is a one-line summary of the folder's settings: whether it walks subfolders, its intake scope, and any type override, rig assignment or import rules it carries. Defaults are left out of the line, so a short summary means a plainly configured folder.

The `▲` and `▼` controls change the order of the list, which is display order only. It does not affect what gets indexed.

## Settings

Press **Edit** to open a folder's settings. Every change is saved immediately, and none of them scan on their own: a setting takes effect on the next scan of that folder.

**Include subdirectories.** On by default. Off indexes only the files sitting directly in the folder.

**Intake scope.** *Everything*, or *Only specific kinds…* which opens two checkbox rows: Categories (Frames, Masters) and Subtypes (Lights, Flats, Darks, Bias). A file is indexed only if its detected category and its detected subtype are both checked. The obvious use is a folder that should contribute raw frames but not the masters sitting alongside them. At least one box stays checked on each row. Files that cannot be read at all are always indexed regardless of scope, so an unreadable file is never silently skipped.

Scope filters on the class EigenFrame *detected*, so it works from the header, not from where the file sits or what it is named. To act on paths and names, use [import rules](./import-rules.md).

**Override (type).** *None*, *Bias*, *Dark*, *Flat* or *Light*. Labels arriving files as the chosen type even when their header says otherwise. *None* uses the detected type.

**Equipment group.** *Auto-discover*, or a specific rig. Assigns arriving lights and flats to that rig instead of deriving one from the camera and telescope headers. This selector only appears once you have at least one rig; see [rigs and equipment groups](./rigs-and-equipment-groups.md).

**Import rules.** An ordered list of path patterns, each either excluding a file or forcing its type. Rules are matched before the folder's Override, which acts as the fallback. [Import rules](./import-rules.md) covers them in full.

Override, Equipment group and import rules are all forward-only. They label files as they are indexed and leave already-cataloged records exactly as they are. Import rules have an explicit opt-in for re-applying to existing records; the other two do not.

> **Screenshot:** A folder card expanded for editing, with intake scope set to specific kinds.

## Tightening scope and loosening it behave differently

Narrowing a folder's scope drops the now-out-of-scope records from the catalog straight away. You do not need to scan for it to take effect.

Widening it again only brings those files back on the next **Scan** of that folder, because re-adding them means reading them off disk.

So a scope change you make to clean something up is instant, and a scope change you make to bring something in is a scan away. Either way the files themselves are untouched.

## Actions

**Scan**, on a folder that has never been indexed. **Re-index**, the same button on a folder that has: it walks the folder again and applies whatever changed. New files are added, files that have gone missing are removed from the catalog, and files that are unchanged are skipped, which is what makes a repeat scan fast.

**Pause** stops a running scan and keeps everything indexed so far. **Resume** continues it.

**Details** opens the folder's dashboard: live counts while a scan runs, the rigs it has recognized, and the exceptions worth looking at. See [your first scan](../start/first-scan.md).

The `···` menu holds the heavier actions:

- **Stop and clear…** during a scan, or **Clear scan intake…** after you stopped one, removes only what that run added. Frames cataloged before it started are left alone, and the card tells you how many records are involved before you confirm. The offer stays available until you take it, dismiss it, or start the next scan.
- **Re-scan (clear & rebuild)** drops every catalog record for this folder and indexes it again from scratch. Use it when you want a genuinely clean read rather than an incremental one. It runs in the background and reports progress on the activity tray.
- **Remove…** takes the folder out of EigenFrame.

## Removing a folder deletes nothing

Removing a folder drops EigenFrame's catalog records for it. Every file stays exactly where it is on disk, and re-adding the folder and scanning it brings everything back. The confirmation says so, and it holds for **Re-scan (clear & rebuild)** and **Clear scan intake** too. The only action in EigenFrame that removes a file from disk is the explicit [delete](../inspect/culling-frames.md) on a rejected frame.

> **Screenshot:** The remove-folder confirmation showing the path and the files-untouched note.

## When a folder is unreachable

A folder on a drive or share that is not currently available shows **Unreachable** and is skipped rather than swept. Its records are preserved, and the next scan after the drive returns reconciles it normally. If you are taking a folder offline deliberately, pausing it avoids the state entirely. See [troubleshooting](../help/troubleshooting.md#my-nas-was-offline-when-i-opened-the-app).

## Cloud sources

**+ Add Cloud Source** adds an Azure Blob container or an S3 bucket as a read-only library folder. Fill in the connection and credentials, press **Test & preview** to confirm EigenFrame can list the first few objects and classify them, then **Add source**.

A cloud source is scanned by reading file headers only. Pixel data downloads the first time you view a frame and is then cached locally, so size the tile cache in Performance Settings for what you expect to look at. Everything else on this page, scope, override, rules, statuses and removal, works the same way.

## Related

- [Add your library](../start/add-your-library.md)
- [Teach EigenFrame your folder conventions](./import-rules.md)
- [Will EigenFrame read my data?](./supported-file-formats.md)
- [Rigs and equipment groups](./rigs-and-equipment-groups.md)
- [Your first scan](../start/first-scan.md)
- [What EigenFrame does with your files](../start/what-eigenframe-does-with-your-files.md)
