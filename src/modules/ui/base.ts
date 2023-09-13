import type { GenerateUIFn } from "../../type";

export const generateBaseColor: GenerateUIFn = (ui) => ({
  focusBorder: ui.borderActive,
  foreground: ui.foreground,
  activityBarBadge: {
    background: "#383b3d",
  },
  editor: {
    background: "#1E1E1E",
  },
  editorIndentGuide: {
    activeBackground: "#707070",
  },
  // draggable widget split line
  sash: {
    hoverBorder: ui.primary,
  },
  // selection in workbench
  selection: {
    background: ui.selection,
  },
  settings: {
    textInputBackground: "#292929",
    numberInputBackground: "#292929",
  },
  widget: {},
});
