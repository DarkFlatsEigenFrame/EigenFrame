---
title: Glossary
description: What EigenFrame means by artifact, rig, session, target, epoch, alignment reference, fit, rough alignment, full-resolution detail, and the rest of its vocabulary.
---

# Glossary

Terms as the app uses them. Craft vocabulary (FWHM, HFR, sigma clipping, bias, dark, flat) is used with its ordinary meaning and is not repeated here.

## Accepted

A [fit](#fit) you confirmed by eye in the Alignment Viewer. An accepted fit is locked: no automatic re-evaluation overwrites it until you reset it.

## Activity tray

The running list of background work: scans, re-index passes, star detection, alignment runs, stacks, and update downloads. Open it to watch progress or cancel a job after navigating away from the page that started it.

## Aligned

A stored [fit](#fit) that sits inside the rig's expected rotation and scale. The ordinary good outcome of an alignment run.

## Alignment reference

The one frame per [target](#target) that every other frame on that target is fitted to. It defines the framing the whole target co-registers on, across all filters, and it defines the canvas a [stack](#stack) is written into. See [choose an alignment reference](../stack/choose-an-alignment-reference.md).

## Artifact

The umbrella term for anything in the catalog: a raw frame, a [master](#master), or a [stack](#stack). Used where a statement covers all three; elsewhere the specific kind is named.

## Calibration assignment

Which bias, dark, and flat [master](#master) applies to a given light. Every light carries three independent assignments, each either unassigned, deliberately none, or a specific master. See [how calibration is assigned](../calibration/how-calibration-is-assigned.md).

## Corners grid

Nine fixed cells in the Alignment Viewer, the four corners of the field, the four edge midpoints and the center, all drawn side by side at 1:1. **G** toggles it. It is where a fit that holds in the middle and drifts at the edges becomes visible. See [judging a fit yourself](../stack/alignment-viewer.md).

## Delete

Removal of a file from disk. Permanent, confirmed, with no recycle step. The only action in EigenFrame that changes your files. Contrast [reject](#reject--un-reject).

## Distortion correction

A warp field a fit carries alongside its rotation, scale and translation, describing the part of the field a plain transform cannot express. A **rig correction** is fitted once for the whole rig from every frame of a target; a per-frame correction is fitted for one frame from its own stars. A correction is applied only if it passes a check on how far it moves pixels, whether it folds the image, and whether it improves the corners. See [judging a fit yourself](../stack/alignment-viewer.md#distortion-correction).

## Epoch

The stretch over which one flat still corrects your lights. It ends whenever the optical response changes, whether you did it on purpose (collimating, cleaning, re-spacing) or found it later (a dust mote arriving, moving, or clearing, a shift in vignetting or illumination). A flat from before a boundary never calibrates a light from after it. See [how long is a flat good for](../calibration/flat-epochs.md).

## Equipment group

See [rig](#rig).

## Fit

The rotation, scale, and translation that maps one frame onto the [alignment reference](#alignment-reference). Computed from the two frames' star catalogs and stored on the frame.

## Flat verdict

The badge on a night and filter of flats: **Clean**, **Flagged frames**, **Whole batch suspect**, **Possible dew**, **Rotation groups**, or **Boundary candidate**. It says whether that batch is trustworthy on its own and whether it still matches the flats around it. See [flat quality verdicts](../calibration/flat-quality-verdicts.md).

## Flip

Holding a control to swap the canvas between the current frame and the [alignment reference](#alignment-reference), then releasing to swap back. The eye catches a misalignment in a flip far faster than in a static comparison. *Flip through* also describes stepping frame by frame through a set to judge them quickly.

## Full-resolution detail

Native tiles, one image pixel per screen pixel, fetched on demand. A toggle in the viewer's Interaction panel. With it off the viewer draws from the streamed pyramid, which is faster and softer at high zoom.

## Import rule

An ordered path pattern on a [library folder](#library-folder) that either excludes matching files from the scan or forces a type onto them. See [import rules](../library/import-rules.md).

## Intake scope

The per-folder filter over which detected kinds of file a [library folder](#library-folder) contributes: categories (Frames, Masters) and subtypes (Lights, Flats, Darks, Bias).

## Library folder

A folder you have pointed EigenFrame at. It indexes the files where they sit; nothing is moved, copied, or renamed. See [library folders](../library/library-folders.md).

## Master

A combined calibration or integrated frame: a master bias, dark, or flat, or a stacked Light master. A master registers the same way whether EigenFrame built it or you brought it in.

## Mount side

Which side of the meridian a frame was shot on, East or West, read from the frame header. A flip turns the camera 180° in the field, so the two sides can carry different corner distortion; the integrate panel can stack one side at a time. See [how do I stack](../stack/integrate-aligned-frames.md#stacking-one-side-of-the-meridian).

## Optical-train change

A boundary you mark on a rig's history, recording the date the optical response changed. It ends one [epoch](#epoch) and starts the next. Always confirmed by you; EigenFrame never creates one on its own.

## Out of band

A [fit](#fit) that is self-consistent but whose scale or rotation falls outside the rig's configured tolerance. Advisory: nothing is culled and nothing is blocked.

## Preset

A named set of stacking settings saved on a [rig](#rig) and reusable across every target on it. One preset can be the rig's default.

## Reject and un-reject

Reject excludes a frame from EigenFrame's stacks. It is a record inside EigenFrame, the file on disk is untouched, and un-reject restores it at any time. Contrast [delete](#delete).

## Re-index

Walking a [library folder](#library-folder) again and applying what changed: new files added, missing files dropped from the catalog, unchanged files skipped. The same button as **Scan** on a folder that has already been indexed.

## Rig

One camera paired with one telescope, discovered from your frame headers as they are scanned. The Equipment page calls it an **equipment group**; the two words mean the same thing. A [session](#session) is one night on one rig, a [target](#target) is one object on one rig, and a flat master is built for one rig, one night, one filter. See [rigs and equipment groups](../library/rigs-and-equipment-groups.md).

## Rotation group

The flats from one night and filter that share one rotator angle. A night shot at more than one angle holds several rotation groups; their surfaces are measured against each other, combined into one master when they agree and built separately when they do not. In build labels and file names a group is named by its position angle (the recorded rotator angle) padded to three digits: `pa074` is the 74° group, and `noang` collects frames with no recorded rotator angle. See [flat quality verdicts](../calibration/flat-quality-verdicts.md).

## Rough alignment

An instant, approximate [fit](#fit) the Alignment Viewer computes on the spot, so you have something to compare against while the precise fit is still working. It steps aside the moment the precise fit lands.

## Scan

Walking a [library folder](#library-folder) and cataloging what it holds. A folder is added unscanned; nothing is indexed until you scan it.

## Session

One night on one [rig](#rig). The night boundary is local capture time shifted back twelve hours, so frames from 21:00 and 02:00 fall on the same session and the date shown is the evening the night started. See [sessions](../library/sessions.md).

## Stack

A combining run and the [master](#master) it produces. Restacking adds a new master rather than replacing the previous one.

## Target

One object name on one [rig](#rig). The object string is read literally from the header, with no normalization and no fuzzy matching, so the same object on two rigs is two targets. See [targets](../library/targets.md).

## Unclassified

The bucket for a file whose header could not be read, or whose header read fine but lacks the keywords that distinguish bias, dark, flat, and light. See [artifacts and Unclassified](../library/artifacts-and-unclassified.md).

## Related

- [The screens](./the-screens.md)
- [Settings](./settings.md)
- [Keyboard shortcuts](./keyboard-shortcuts.md)
