import type { GenerateUIFn } from "../../type";
import { parseColor } from "../../util";

export const generateElementColor: GenerateUIFn = (ui) => ({
  badge: {
    background: ui.badgeBackground,
    foreground: ui.badgeForeground,
  },
  breadcrumb: {
    activeSelectionForeground: ui.backgroundAlt,
    background: ui.background,
    focusForeground: "#00ff00",
    foreground: ui.borderNormal,
  },
  breadcrumbPicker: {
    background: ui.listItem,
  },
  button: {
    background: ui.buttonBackground,
    hoverBackground: ui.buttonHoverBackground,
  },
  debugToolBar: {
    background: ui.toolbarBackground,
    border: ui.toolbarBorder,
  },
  dropdown: {
    background: ui.background,
    border: ui.elementBorder,
  },
  input: {
    border: ui.elementBorder,
    background: ui.background,
  },
  list: {
    activeSelectionBackground: ui.listItem,
    activeSelectionForeground: ui.listItemForeground,
    hoverBackground: ui.listItemHoverBackground,
  },
  menu: {
    foreground: "#81fa68",
    background: ui.background,
  },
  menubar: {
    selectionBackground: ui.listItem,
  },
  panel: {
    background: ui.background,
    border: ui.panelBorder,
  },
  panelTitle: {
    activeBorder: ui.panelBorder,
    activeForeground: ui.foreground,
  },
  progressBar: {
    background: "#ff5500",
  },
  scrollbarSlider: {
    background: parseColor(ui.scrollbar, 0.2),
    hoverBackground: parseColor(ui.scrollbar, 0.3),
    activeBackground: parseColor(ui.scrollbar, 0.5),
  },
  tab: {
    activeBackground: ui.background,
    activeBorder: ui.borderActive,
    activeForeground: ui.activeForeground,
    inactiveBackground: ui.inactiveBackground,
    inactiveForeground: ui.inactiveForeground,
    border: ui.background,
    hoverBackground: ui.hoverBackground,
    inactiveModifiedBorder: ui.activityBarForeground,
  },
  textBlockQuote: {
    border: ui.borderNormal,
  },
  textCodeBlock: {
    background: ui.background,
  },
  textLink: {
    foreground: ui.activityBarForeground,
    activeForeground: "#ffff00",
  },
  toolbar: {
    hoverBackground: ui.background,
  },
  tree: {
    indentGuidesStroke: ui.activityBarForeground,
  },
  welcomePage: {
    background: "#222222",
  },
});
