---
title: Where did my stacked master go, and how do I control the filename?
description: The Stack Outputs settings screen, the four path templates and their variables, per-rig overrides, and why an output must sit inside a library folder to be cataloged.
---

# Where did my stacked master go, and how do I control the filename?

Every stack, calibration master or integrated light, is written to a path built from a template. Open **Stack Outputs** from the ⚙ menu to see and edit them.

> **Screenshot:** The Stack Outputs settings screen with the light template and its live filename preview.

## The four templates

There is one template per frame type: Bias, Dark, Flat, and Light. Each is a path, not just a filename: literal text, separators, and variable tokens that together describe the whole directory structure and name EigenFrame writes into. The `.xisf` extension is appended for you.

A template is written and stored with `/` separators, which is what keeps one portable between machines. The preview under the field, and the greyed-out placeholder in an empty field, render the separator your own platform writes, so a Windows machine shows `\` there. Pasting a path that uses `\` into a template field works: it is accepted and kept in the `/` form.

The default Light template, used for integrated lights, is:

```
EigenFrame/Integrations/{Object}/{Object}_{Filter}_{SessionDate}
```

The page shows a live preview beneath each field as you type, filled with sample values so you can see the exact path a real stack would produce before you save anything.

## Variables

A required token like `{Gain}` expands to that value, or to `(none)` in the preview when the value is empty, which flags a gap in the template. An optional token, written `{.Gain?}`, expands to a separator plus the value when the value is present, and collapses to nothing, separator included, when it isn't. Use the optional form for anything that doesn't apply to every stack, so you don't end up with a stray dot or dash in the filename.

| Variable | Meaning |
|---|---|
| `{Object}` | Target name, for integrated lights |
| `{SessionDate}` | Most recent session date |
| `{EarliestSessionDate}` | Earliest session date |
| `{StackDate}` | Date the stack ran |
| `{Subtype}` | Frame type |
| `{Instrument}` | Camera model |
| `{Gain}` | Gain |
| `{Offset}` | Offset |
| `{.ReadoutMode?}` | Readout mode |
| `{.UsbLimit?}` | USB traffic limit |
| `{ExposureTime}` | Exposure, in seconds |
| `{.SetTemp?}` | Camera target temperature |
| `{.SensorTemp?}` | Average sensor temperature |
| `{.Filter?}` | Filter name |
| `{.SkyBatch?}` | Flat batch label: evening, morning, or a rotation group's position angle (`pa074` is the 74° group; `noang` means no recorded rotator angle; a night split both ways gives `evening-pa074`) |
| `{NCombine}` | Number of source frames combined |
| `{XBinning}` | X binning |
| `{YBinning}` | Y binning |
| `{EquipmentGroup}` | Rig name |
| `{BiasName}` | Bias master filename, where one was used |

Any variable can be used in any template. An unrecognized token stays in the path as literal text.

## Per-rig overrides

Each rig can override any of the four templates on its own Equipment page entry. Leave a field blank to inherit the library default shown on the Stack Outputs page; fill it in and that rig's stacks use it instead. A blank field offers **Start from library default** to seed it with the current default as a starting point, and a filled field offers **Clear** to drop back to inheriting.

## Getting cataloged

A stack appears in your catalog when its output path lands inside a library folder. Each template field on the Stack Outputs page, and each per-rig override, carries its own readiness signal beneath it:

- **✓ covered by `<folder>` and its subfolders**, in green, when the path already resolves inside a library folder.
- **⚠ not in any library**, in amber, when the stack would land outside every library folder and therefore outside the catalog.
- An amber note when a covering folder exists but its Override would label new files as the wrong type, with **Fix the folder's label** and **Choose another location** beside it.

The same signal appears on a target's Library coverage section, and on the first-stack card when you submit a stack whose output has yet to be covered.

The fix for the uncovered case is **Create a folder here**. It adds the template's path as a library folder, subfolders included, and scans it, so the new stack is cataloged as soon as it is written and every earlier stack already sitting there is picked up too. It tells you how many files that first scan will index before you commit. Pointing the template at a location already covered works just as well. See [adding your library](../start/add-your-library.md) for what adding a folder does.

## Related

- [Integrating aligned frames](./integrate-aligned-frames.md)
- [What is the alignment reference and how do I change it?](./choose-an-alignment-reference.md)
- [Will this reorganize, move, or damage my library?](../start/what-eigenframe-does-with-your-files.md)
- [Adding your library](../start/add-your-library.md)
- [Supported file formats](../library/supported-file-formats.md)
- [Troubleshooting](../help/troubleshooting.md)
