---
title: How do I stack a master bias or master dark?
description: Selecting a signature group on Artifacts, the normalization and rejection defaults for a calibration stack, watching it run, and where the result registers.
---

# How do I stack a master bias or master dark?

Master bias and master dark builds start from **Artifacts › Frames**, on the **Bias** or **Dark** pill. See [artifacts and Unclassified](../library/artifacts-and-unclassified.md) for the page in full; this page picks up at the point of selecting a group and stacking it.

## Grouping and selection

Under Frames × Bias or Frames × Dark, matching frames collapse into a group by full camera signature: instrument, gain, offset, readout mode, and binning. A dark group also carries exposure time and set temperature. A mixed folder sorts itself: drop in a folder of darks shot at several exposures or several cooling setpoints and it separates into one group per exposure/temperature combination, each stackable on its own.

Check a group's own checkbox to select the whole group, or expand it and check individual frames. Selection persists as you expand other groups, so a hand-picked set spanning more than one group is possible, though the group checkbox is the fast path for the common case of stacking everything that matched together.

Checking anything opens a bottom bar with **Stack →**.

> **Screenshot:** The Artifacts page, Frames / Dark, with one signature group selected and the Stack action in the bottom bar.

## The stack panel

**Stack →** opens a right-side panel titled with the count and subtype, for example `Stack 47 bias frames`. Selecting a whole group is called out as a full group, with the frame count that will go in.

The panel offers **Normalization** and **Rejection**, the same controls documented in [rejection and normalization](../stack/rejection-and-normalization.md). A calibration stack defaults to **Multiplicative** normalization and **Sigma Clipping** at low 3.0, high 3.0, 5 iterations, the same defaults a flat master build starts from. This differs from an integrated light, which defaults to Additive with Scaling. Switching to Sigma Clipping or Linear Fit Clipping reveals the Low σ / High σ / Max iter fields; the other rejection methods take no parameters. Whatever you set is remembered per subtype for the next bias or dark stack.

The output is written as Float32; there is no format choice on this panel.

If the frames you selected would land outside every library folder, the panel walks you through covering that location before it will submit. See [where stacks are saved](../stack/where-stacks-are-saved.md).

## Submitting and watching it run

**Submit stack request** transitions the panel in place, no navigation away. The job moves through:

- **Warming**, the source frames being prepared for combining, with a per-frame progress count while any are still pending.
- **Coordinating**, the tile work being laid out.
- **Integrating**, with a progress bar tracking completed tiles against the total.
- **Finalizing**, the result file being assembled.
- **Complete**, with a link to view the result in Masters.

Closing the panel or navigating away does not stop the job. Reopening Artifacts, or checking the Activity tray, shows it still running or already finished. You can select another group and start a second stack while the first is still going; several calibration stacks run at once.

> **Screenshot:** The stack panel mid-run, showing the Integrating phase with its tile progress bar.

## Where the result lands

A finished stack registers in the catalog as a master in its own right, the same subtype (Bias or Dark) as its sources, with no separate confirmation step. It appears under **Artifacts › Masters** immediately, and it is available from that moment to [calibration assignment](./how-calibration-is-assigned.md) for any light that matches its camera signature, exposure, and set temperature.

## Related

- [Artifacts and Unclassified](../library/artifacts-and-unclassified.md)
- [How calibration is assigned](./how-calibration-is-assigned.md)
- [Rejection and normalization](../stack/rejection-and-normalization.md)
- [Where stacks are saved](../stack/where-stacks-are-saved.md)
- [Build flat masters](./build-flat-masters.md)
- [Glossary](../reference/glossary.md)
