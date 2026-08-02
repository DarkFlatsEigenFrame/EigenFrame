---
title: How do I install EigenFrame?
description: Download and install EigenFrame on Windows, Linux, or Apple Silicon Mac, including why your OS flags the installer and how to get past it.
---

# How do I install EigenFrame?

EigenFrame runs as a desktop application on Windows, Linux, and Apple Silicon Macs. Downloads come from `https://downloads.eigenframe.darkflats.com`. There is no account to create and no license key to enter, and once the app is installed it works with no internet connection.

The installer is unsigned on every platform. That is expected, not a sign of a corrupted download. Your operating system will warn you on first run; the sections below show exactly what to click.

## Windows

Windows 10 or later, x64.

Download: [https://downloads.eigenframe.darkflats.com/win/EigenFrame.Desktop-Setup.exe](https://downloads.eigenframe.darkflats.com/win/EigenFrame.Desktop-Setup.exe)

Run the installer. Windows SmartScreen will show a blue "Windows protected your PC" screen because the app is unsigned.

> **Screenshot:** Windows SmartScreen warning with More info expanded.

Click **More info**, then **Run anyway**. This is a one-time step for the initial install; future updates apply automatically and do not trigger SmartScreen again.

EigenFrame's viewer runs inside the WebView2 runtime, which ships with Windows 11 and most recent Windows 10 installs. If the app window opens blank, your machine is missing it. Install the free Evergreen bootstrapper from [https://developer.microsoft.com/microsoft-edge/webview2/](https://developer.microsoft.com/microsoft-edge/webview2/) and relaunch EigenFrame.

## Linux

x64, distributed as an AppImage. No installation step.

Download: [https://downloads.eigenframe.darkflats.com/linux/EigenFrame.Desktop-Setup.AppImage](https://downloads.eigenframe.darkflats.com/linux/EigenFrame.Desktop-Setup.AppImage)

Mark the file executable and run it:

```
chmod +x EigenFrame.Desktop-Setup.AppImage
./EigenFrame.Desktop-Setup.AppImage
```

No package manager, no elevated privileges, no browser warning to click through.

## macOS

Apple Silicon (arm64) only. There is no Intel build.

Download: [https://downloads.eigenframe.darkflats.com/osx/EigenFrame.Desktop-Setup.pkg](https://downloads.eigenframe.darkflats.com/osx/EigenFrame.Desktop-Setup.pkg)

The installer is unsigned, so Gatekeeper blocks a normal double-click on first run.

> **Screenshot:** macOS Gatekeeper dialog after right-clicking the .pkg and choosing Open.

Right-click the downloaded `.pkg` and choose **Open**, then confirm in the dialog that appears. This is required once. After that, EigenFrame updates itself in place and the new files never carry the browser's quarantine flag, so Gatekeeper does not prompt again on subsequent updates.

## Updates

EigenFrame checks for updates at launch and periodically while running, downloads new versions in the background, and applies them the next time you restart the app. Updates require no elevated privileges. The SmartScreen and Gatekeeper warnings above are first-install only and do not appear again.

## Hardware

There is no published minimum spec. RAM and disk headroom for the tile cache scale with your frame size and library size, so a large mono or high-resolution library benefits from more of both. A modern multi-core CPU and an SSD at the cache location will make browsing and stacking noticeably more responsive than a spinning disk or an older CPU.

## Next

Once EigenFrame is installed, point it at your library: [add your library](./add-your-library.md). For a walkthrough of the first session, see [your first hour with EigenFrame](./first-hour.md).

If installation itself is failing, see [troubleshooting](../help/troubleshooting.md).
