---
title: Keyboard shortcuts
description: "Every keyboard shortcut in EigenFrame: session navigation, the image viewer, the Alignment Viewer, the stacking lab, delete confirmation, and modal dismissal."
---

# Keyboard shortcuts

## Session page

Works while the page has focus and no text field is focused. Both keys are ignored while the [image viewer](../inspect/image-viewer.md) is open over the page.

| Key | Action |
|---|---|
| **←** or **↑** | Go to the newer night |
| **→** or **↓** | Go to the older night |

See [review a night](../inspect/review-a-night.md).

## Image viewer

Suppressed while a text field has focus.

| Key | Action |
|---|---|
| **←** | Previous frame in the filmstrip |
| **→** | Next frame in the filmstrip |
| **R** | Reject or restore the frame on screen |
| **Escape** | Close the viewer |

With **Hide rejected** on, stepping with **←** / **→** skips past rejected frames. See [the image viewer](../inspect/image-viewer.md).

## Alignment Viewer

Suppressed while a text field has focus.

| Key | Action |
|---|---|
| **←** | Previous frame |
| **→** | Next frame |
| **Space** (hold) | Flip to the reference frame; release to flip back |
| **M** | Toggle the matched-pair vector overlay |
| **G** | Toggle the corners grid |
| **]** | Jump to the next frame whose corners drift |
| **[** | Jump back to the previous frame whose corners drift |
| **P** | Start or stop flipping through the frames |
| **R** | Reject or restore the frame on screen |
| **Escape** | Close the viewer |

Pan and zoom are off while the corners grid is on. The drift hops skip rejected frames and the reference, and do nothing when there is no further drifting frame in that direction. Flipping through runs at about four frames a second and stops on any other input. See [the Alignment Viewer](../stack/alignment-viewer.md).

## Stacking lab

Works while the **Integrate aligned frames** panel has keyboard focus.

| Key | Action |
|---|---|
| **[** or **←** | Previous candidate settings |
| **]** or **→** | Next candidate settings |
| **Escape** | Close the panel |

Holding a compare slot flips the preview to it and releasing flips back, the same gesture the Alignment Viewer uses for the reference frame.

See [integrate aligned frames](../stack/integrate-aligned-frames.md).

## Permanent-delete confirmation

The single-item and same-session delete dialog (opened from the culling controls, or **Delete rejected** on a contact sheet) responds to the keyboard. All keys are ignored while the delete is in flight.

| Key | Action |
|---|---|
| **D** | Confirm the delete |
| **Escape** | Cancel |
| **←** | Page the preview filmstrip back |
| **→** | Page the preview filmstrip forward |

Enter does nothing here on purpose: focus defaults to Cancel, so the reflexive keystroke never confirms a delete. Shift-click the delete control on a single frame to skip this dialog entirely.

The larger cross-session purge dialog, which requires typing the exact frame count to unlock, has no keyboard accelerator and no shift-click skip. Only **Escape** closes it, and only while nothing is in flight. See [culling frames](../inspect/culling-frames.md).

## Modal dismissal generally

**Escape** closes whatever is on top: the app menu, the activity tray, and edit dialogs such as the equipment group editor, calibration match-rule editors, and the rig logbook note field. Where a dialog is layered over something else, such as a frame viewer opened from inside a panel, Escape closes the topmost layer first and leaves the rest open.

Escape is suppressed in any dialog while its own save or delete request is in flight.

## Related

- [The screens](./the-screens.md)
- [Glossary](./glossary.md)
- [How do I look at a frame properly?](../inspect/image-viewer.md)
- [How do I judge whether a fit is actually right?](../stack/alignment-viewer.md)
- [How do I review a night?](../inspect/review-a-night.md)
- [What's the difference between rejecting and deleting?](../inspect/culling-frames.md)
