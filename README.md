# EigenFrame

Astrophotography preprocessing for monochrome XISF and FITS libraries.

Inspect every frame at full resolution, cull the ones that don't belong, verify your calibration
masters, then register your subs and stack them into an integrated master. Everything runs on
your own workstation. No account, no upload.

**[Download EigenFrame, free](https://eigenframe.darkflats.com/download)**

Early Access Beta. Windows 10 or later (x64), Linux (x64, AppImage), macOS (Apple Silicon).
The installers are unsigned, so your OS warns you once on first launch.

## What it does

- **Full-resolution viewing.** Inspect any frame at native 1:1 detail. Judge sharpness,
  trailing, and gradients before you spend time stacking bad data.
- **Frame quality and star detection.** Every sub scored on FWHM, HFR, eccentricity, SNR, and
  star count, so culling rests on measurements.
- **Calibration you can verify.** Build bias, dark, and flat masters, or use ones you built
  elsewhere. EigenFrame assigns them per frame and shows calibrated thumbnails, so an over- or
  under-correcting flat is visible in seconds.
- **Flat epochs.** Track how long a flat stays valid, and what ends its validity.
- **Registration you can judge.** Fit every sub to a reference, then flip between the two and
  judge the result yourself.
- **Integration.** Rejection, normalization, quality weighting, and pixel repair, producing a
  linear integrated master.

## Reporting a problem

[Open an issue](https://github.com/DarkFlatsEigenFrame/EigenFrame/issues). Include your
EigenFrame version (shown in the app header), your operating system, what you were doing, and
the diagnostics text. To get that, click the Diagnostics icon beside the activity tray in the app
header, then press **copy**.

## Documentation

The user guide lives in this repository and will be published at `eigenframe.darkflats.com/docs`.
