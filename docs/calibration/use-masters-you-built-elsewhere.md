---
title: Can I use my existing master darks instead of rebuilding them?
description: Yes. A master registers the same way whether EigenFrame built it or not, and what to do when an integrated master arrives without the fields calibration matching needs.
---

# Can I use my existing master darks instead of rebuilding them?

Yes. Put the file in a [library folder](../library/library-folders.md) and scan it. A master registers exactly the same whether EigenFrame built it or it arrived from somewhere else: it appears on the Artifacts page under Masters, in the subtype it was classified as, and it is available to [calibration assignment](../calibration/how-calibration-is-assigned.md) the same way any master is. There is no separate import step.

## Why it might not match right away

An integrated master does not carry the same header a raw frame does. Gain, offset, readout mode, USB limit, set temperature and exposure time are commonly absent, and the pixel data has usually been rescaled, since integration produces a new image rather than a copy of any one input. That leaves the master short of the fields calibration matching needs, so it can sit unmatched against lights it should otherwise correct.

A master built outside EigenFrame often carries a header type of `LIGHT`, the type of the frames that went into it rather than the type of the result. That has to be fixed before the file is even usable as a master.

> **Screenshot:** The Artifacts page match-field editor filled in for an imported master dark.

## Getting it classified correctly

If the master's header type is wrong, or its type could not be determined at all and it landed in Unclassified, fix it at the folder level so it stays fixed on every future scan:

- The folder's **Override** stamps a type onto everything scanned under it going forward.
- **Import rules** target a specific path (a `MasterDarks` folder, a filename pattern) and force the right subtype onto just those files. See [import rules](../library/import-rules.md).

Both apply to files as they are scanned from that point on. If the master is already cataloged with the wrong subtype, import rules can be re-applied to existing records; see the re-apply step on that page.

## Filling in what the header lost

Once the master is classified correctly, give it the fields it is missing. On the [Artifacts page](../library/artifacts-and-unclassified.md), select the master (or a whole group of them) and use **Edit / reclassify**, or a group's own **Set match fields**, to set instrument, gain, offset, readout mode, binning, set temperature, and exposure by hand.

The filename and the folder the master lives in are often the only place those values still exist, since integration does not carry them into the file itself. Read them off there before you fill in the fields.

Once the fields are set, the master is judged exactly like any other: it either matches a light's camera signature and, for a dark, exposure and set-temperature tolerance, or it does not. See [how calibration is assigned](./how-calibration-is-assigned.md) for what each field does, and [why is my dark or flat not being applied?](./when-calibration-does-not-bind.md) if a light still won't pick it up after the fields are set.

## Lights that are already calibrated

If a light frame carries a calibration marker in its header, from having already been calibrated before it reached EigenFrame, EigenFrame recognizes that marker and does not calibrate the frame again.

## Related

- [How does EigenFrame decide which masters calibrate which lights?](./how-calibration-is-assigned.md)
- [Why is my dark or flat not being applied?](./when-calibration-does-not-bind.md)
- [Where do I see everything at once, and how do I fix files that didn't classify?](../library/artifacts-and-unclassified.md)
- [How do I stop my masters and finished images coming in as lights?](../library/import-rules.md)
- [Will EigenFrame read my data?](../library/supported-file-formats.md)
