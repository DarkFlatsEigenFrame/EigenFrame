---
title: My NAS was offline when I opened the app. Did I lose my catalog?
description: What happens when a library folder is unreachable at launch, how to take a drive offline deliberately, and what read-only cloud library sources cost in bandwidth and cache.
---

# My NAS was offline when I opened the app. Did I lose my catalog?

No. An unreachable folder is skipped, not swept.

When EigenFrame can't reach a library folder, on launch or on a scan, it shows the folder as **Unreachable** and leaves its catalog exactly as it was. No records are removed, no frames drop out of their sessions or targets, and nothing you've rejected, assigned to a rig, or otherwise decided about those frames is touched. The next scan after the drive or share comes back reconciles the folder normally, the same as any other re-index.

> **Screenshot:** A library folder card showing the Unreachable badge with its frame count intact.

This matters because a scan can't tell "the drive is off" from "every file on it was deleted." If EigenFrame treated a missing mount point the same way it treats missing files, one NAS reboot or one VPN that hasn't connected yet would look identical to you deleting your entire library, and the catalog would empty out to match. Instead, an unreachable folder is left alone until it proves it's actually gone by coming back with something different.

## Taking a drive offline on purpose

If you know a drive is about to go away, whether you're shutting down a NAS, ejecting external storage, or working disconnected for a while, pause the folder first from **Manage Library**. A paused folder is skipped entirely rather than marked Unreachable, and its live-scan watching stops cleanly. Resume it once the drive is back. See [library folders](./library-folders.md) for the full set of per-folder actions, including Pause and Resume.

## Read-only cloud sources

Azure Blob containers and S3 buckets can be added as library sources alongside local folders, from **+ Add Cloud Source** on the Manage Library screen. Fill in the connection and credentials, run **Test & preview** to confirm EigenFrame can list and classify the first few objects, then **Add source**. A cloud source is read-only: EigenFrame never writes to it.

Scanning a cloud source reads file headers only, so a scan stays cheap regardless of how many gigabytes sit in the bucket. Pixel data downloads the first time you view a frame and is then cached locally, so every later view of that frame costs nothing further. Because the first view of each frame is a real download, size your local tile cache for what you actually expect to look at. See [performance and cache](../reference/performance-and-cache.md) for the cache-size settings.

## Network-mounted folders on Linux

Library folders on network-mounted storage (NFS, SMB) on Linux have produced a stall report where background tile and detection work appeared to hang. The causes behind that report have been diagnosed and mitigated. If you're on Linux with a library folder on a network mount and see background work stop progressing, update to the latest version first.

## Related

- [Library folders](./library-folders.md)
- [Performance and cache](../reference/performance-and-cache.md)
- [Troubleshooting](../help/troubleshooting.md)
- [What EigenFrame does with your files](../start/what-eigenframe-does-with-your-files.md)
