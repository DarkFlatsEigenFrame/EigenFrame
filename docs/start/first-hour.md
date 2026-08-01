---
title: Your first hour with EigenFrame
description: A nine-step walkthrough from a fresh install to a stacked master, honest about how long each step takes and where the value lands well before the stack.
---

# Your first hour with EigenFrame

## 1. Install and open it

Follow [Install EigenFrame](./install.md). On first launch you will click past an unsigned-app warning; that is expected. A few minutes, once.

## 2. Add one library folder, not the whole library

Don't point EigenFrame at your entire archive on day one. Pick one target, or one month, and add just that folder. See [Add your library](./add-your-library.md) for the intake options and how a folder is added.

## 3. Scan it and watch the dashboard

Kick off the scan and watch it work. Depending on how much you added, this takes anywhere from a couple of minutes to a couple of hours, and it's one-time per folder: after the first pass, EigenFrame only re-indexes what changed. See [Your first scan](./first-scan.md) for what's happening and how to tell it's done.

## 4. Look at a night

Open a session. This is the first real payoff: one screen showing the target and filter grid for that night, with the calibrated Lights laid out as a contact sheet you can scan in seconds. Frame counts, exposure totals and rig assignment are all there without opening a single file.

> **Screenshot:** A session page with the target and filter grid and the calibrated Lights contact sheet.

## 5. Flip through the lights and cull the obvious

Open the contact sheet for a filter and step through the subs in the viewer. Reject anything obviously bad: a passing cloud, a trailed sub, a bump. Rejection is reversible, so be aggressive. You can un-reject anything later, and nothing is deleted at this stage.

## 6. Read the quality metrics and cull with evidence

Open **Cull by metric** for a filter. It orders every sub in the set by FWHM, HFR, eccentricity, quality or transparency, lets you mark a range for rejection, and tells you how many frames you are about to reject before you commit. This is the second payoff: your eye from step 5 gets a number next to it, and the borderline subs get an answer.

## 7. Check your calibration is actually being applied

This is the sharpest payoff of the hour. Session thumbnails render calibrated wherever masters are assigned, so if your flat is over- or under-correcting, or a dark is mismatched, it shows up in the contact sheet in seconds rather than after a stack finishes. Check the calibration assignment panel for the session: confirm the right bias, dark and flat masters are assigned for the rig (one camera and telescope pairing, shown on the Equipment page as an equipment group) and filter, and look at the thumbnails themselves for gradients or vignetting the calibration should have removed. Reassign whatever's wrong and watch the thumbnails update.

**You can stop here and still have won.** A cleaner, verified library makes whatever stacker you already use produce a better result, with no workflow switch required. Everything past this point is EigenFrame doing the stacking for you.

## 8. Pick an alignment reference and evaluate alignment for one filter

Open the target page and its Overview tab. If no alignment reference is set yet, EigenFrame will auto-select one once stars are detected, or you can set one yourself from the viewer or from Cull by metric. Then run Evaluate alignment for one filter. This is the first genuinely long-running step, since it's fitting every frame against the reference; leave it running and come back. Each frame settles into one of five states: Accepted, Aligned, Out of band, Won't align, or Not yet screened. Anything short of Accepted or Aligned is worth a look before you stack; you can re-anchor to a different reference if the fit quality across the set looks better from another frame.

## 9. Integrate, and find the result

On the target's filter tab, **Integrate aligned frames** opens a panel: settings on the left, a single-tile stacking lab on the right, and a queue strip below showing every stack for that target and filter. The lab stacks one representative tile as you change settings, so you can dial in normalization, rejection and weighting against immediate feedback before committing. Then press **Integrate N frames**. Progress moves through Preparing frames, Planning, Combining and Saving, and you can cancel at any point. If you navigate away, the Activity tray keeps tracking it. When it finishes, the result is a Light master, sitting alongside its inputs as an artifact you can open in the viewer immediately.

Nothing in steps 1 through 8 writes to your library; they read, measure and annotate. Step 9 is the one step that produces something new.

## Where to go next

- [What EigenFrame does with your files](./what-eigenframe-does-with-your-files.md)
- [Supported file formats](../library/supported-file-formats.md)
- [Troubleshooting](../help/troubleshooting.md)
- [Reporting a problem](../help/reporting-a-problem.md)
