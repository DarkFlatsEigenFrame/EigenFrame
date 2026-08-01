---
title: Will EigenFrame read my data?
description: Which file formats and extensions EigenFrame catalogs today, how color and camera raw files are handled, and which header fields drive rig and calibration matching.
---

# Will EigenFrame read my data?

EigenFrame catalogs two formats today: **monochrome XISF** and **monochrome FITS** (`.xisf`, `.fits`, `.fit`, `.fts`). Extension matching is case-insensitive. The file's actual content, not its extension, decides which reader handles it, so a `.fit` file that is really XISF (or the reverse) still parses correctly.

Two formats fall outside that: one-shot-colour or Bayer-matrix data, and camera raw (CR2, NEF, ARW, DNG and similar vendor formats). In practice, captures straight off an ASIAIR or a DSLR are not served today.

Colour data is caught rather than misread. A FITS file that declares a `BAYERPAT` keyword, or whose `NAXIS3` is greater than 1, is set aside during the scan with the reason attached and shows up as Unclassified, so it is never decoded as luminance. See [troubleshooting](../help/troubleshooting.md) for what to do next.

> **Screenshot:** An Unclassified row showing the color-FITS refusal reason.

## Header fields EigenFrame reads

For FITS and XISF frames, EigenFrame reads a set of header keywords to identify the rig that produced a frame and to drive calibration assignment: camera and instrument identity, telescope, gain, offset, readout mode, binning, exposure time, set-temp, filter, object name, and capture date, along with observer location and a range of secondary fields (focuser position, rotator angle, pier side, airmass, and others). These fields are what let a scan group frames into rigs, sessions, and targets, and what let a calibration assignment find the right master for a given light.

## Imported masters lose most of this

A master built in PixInsight's integration process does not carry the same header a raw frame does. Integration strips gain, offset, readout mode, set-temp, and exposure time from the header, and rescales the pixel data. None of those fields survive into the file.

If you import a master built outside EigenFrame, its filename and the folder it lives in are often the only place those values still exist. When a calibration assignment can't match the master automatically, you may need to assert gain, offset, readout mode, set-temp, or exposure yourself so matching has something to work with.

## Related

- [Add your library](../start/add-your-library.md)
- [First scan](../start/first-scan.md)
- [What EigenFrame does with your files](../start/what-eigenframe-does-with-your-files.md)
- [Reporting a problem](../help/reporting-a-problem.md)
