---
title: Will this reorganize, move, or damage my library?
description: How EigenFrame handles your frames. It reads them where you put them, deletes only on your explicit confirmed request, and writes stacks only where you direct.
---

# Will this reorganize, move, or damage my library?

EigenFrame does three things with files on disk, and only three:

- **Read.** It scans your library folders wherever they are and indexes what it finds. It never imposes a folder layout and never requires you to reorganize anything first.
- **Delete, only on explicit request.** Deletion is a permanent action you trigger yourself, on a specific frame, with a confirmation step. Nothing is deleted as a side effect of scanning, viewing, or any other action.
- **Create stacks where you direct.** When you run a stack, the resulting master is written to the output location you configure. Nothing else on disk is touched by that action.

It never moves a file, never edits a file in place, and never uploads your frames anywhere.

## Removing a library folder deletes nothing on disk

If you remove a library folder from EigenFrame, that only removes it from EigenFrame's records. Every file stays exactly where it is on disk. Re-adding the folder and scanning it brings everything back into the catalog.

## Rejecting a frame deletes nothing

Rejecting a frame flags it as excluded from further use. It's reversible: you can un-reject it at any time, and the file is never touched. Rejection lives entirely inside EigenFrame's records.

## Deleting a frame is permanent

Only the explicit Delete action removes a file from disk. It applies to frames you've already rejected, it asks for confirmation before it runs, and there is no recycle step: once confirmed, the file is gone.

> **Screenshot:** The permanent-delete confirmation dialog.

## Where EigenFrame keeps its own data

EigenFrame's catalog, thumbnails, star catalogs, and tile cache live in its own application-data folder, separate from your library. Removing or resetting that folder never touches your frames.

## Related

- [Adding your library](./add-your-library.md)
- [Your first scan](./first-scan.md)
- [Supported file formats](../library/supported-file-formats.md)
- [Troubleshooting](../help/troubleshooting.md)
- [Reporting a problem](../help/reporting-a-problem.md)
