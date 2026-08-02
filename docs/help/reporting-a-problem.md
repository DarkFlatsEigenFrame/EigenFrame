---
title: Something is wrong. How do I report it?
sidebar:
  label: Reporting a problem
description: "How to file an EigenFrame problem report that can be acted on: where it goes, what to check first, and what to include from the app's Diagnostics panel."
---

# Something is wrong. How do I report it?

Problem reports go to the public issue tracker:

**[github.com/DarkFlatsEigenFrame/EigenFrame/issues](https://github.com/DarkFlatsEigenFrame/EigenFrame/issues)**

Before filing, check [troubleshooting](./troubleshooting.md) for common symptoms and fixes. If your issue matches one, you may not need to file at all.

## What to include

1. **Your EigenFrame version.** It's shown as `v...` in the app header. On desktop, clicking it checks for an update.
2. **Your operating system** and version.
3. **What you were doing** when it happened, and what you expected instead.
4. **Diagnostics output.** Open **Diagnostics** from the header icon (the arrow icon near the activity tray). Select the **host** tab (tile pump, cache, catalog, alignment, and stack state) or the **viewer** tab (image stretch and rendering), then press **copy**. Paste the result into the issue.

The diagnostics text is technical by design, and can include local folder paths and target names. Review it before pasting if that matters to you.

A screenshot of the screen in question helps. For a problem tied to one specific frame or night, naming the target, filter, and session date makes it reproducible.
