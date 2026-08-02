---
title: How do I get the latest version?
description: "How EigenFrame updates itself: automatic background checks and downloads, the Activity tray states, checking on demand from the header, and why one platform's release does not reach another."
---

# How do I get the latest version?

Updates are automatic. EigenFrame checks for a new version at startup and every four hours while it keeps running, downloads it in the background if one is found, and applies it the next time you restart the app. There is nothing to click and no elevated privileges are needed.

## What you see

An update in progress is a row in the [Activity tray](./glossary.md#activity-tray), the same tray that shows scans and stacks. A silent background check that finds nothing new does not add a row. States you may see:

- **Checking for updates** while the check is running.
- **Downloading update** (naming the version once known) while it fetches in the background.
- **Update ready** once the download finishes. This row carries a **Restart to update** button; click it to relaunch immediately, or leave it and the update applies the next time you close and reopen EigenFrame on your own.
- **Up to date** after a check that found nothing newer.
- **Update check failed** if the check itself could not complete, for example with no network connection.

> **Screenshot:** The Activity tray showing Update ready with the Restart to update button.

## Checking on demand

The version number in the app header (`v...`) is a button. Click it to check right away instead of waiting for the next automatic check. The tray opens and shows the same **Checking for updates** row, then whichever result applies.

## No prompts, no privileges

Applying an update needs no administrator or elevated permission on any platform. The one-time operating system warning you saw on first install, described in [installing EigenFrame](../start/install.md), does not come back for updates: the app writes its own new files in place, so Windows SmartScreen and macOS Gatekeeper have nothing new to flag.

## One channel per platform

Windows, macOS, and Linux each poll their own release channel. A version published for one platform reaches only that platform; it does not appear as an update on the others. Each platform catches up on its own schedule as new releases go out for it.

## Why it matters

EigenFrame ships new releases often. Because updates apply themselves in the background, staying current costs you nothing beyond an occasional restart, and it is worth doing: fixes and improvements reach you continuously rather than sitting in a release you have to go find.

## Related

- [How do I install EigenFrame?](../start/install.md)
- [Reporting a problem](../help/reporting-a-problem.md)
- [The screens](./the-screens.md)
- [Settings](./settings.md)
- [Glossary](./glossary.md)
