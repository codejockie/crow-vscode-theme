import type { GenerateUIWithBaseFn } from "../../type";

export const generateViewColor: GenerateUIWithBaseFn = (base, ui) => ({
  activityBar: {
    background: ui.background,
    border: ui.border,
    foreground: ui.activityBarForeground,
    activeBorder: ui.activityBarForeground,
    inactiveForeground: ui.activityBarInactiveForeground,
  },
  activityBarBadge: {
    foreground: ui.badgeForeground,
    background: ui.badgeBackground,
  },
  panel: {
    background: ui.background,
    border: ui.panelBorder,
  },
  panelTitle: {
    activeBorder: ui.panelBorder,
    activeForeground: ui.foreground,
  },
  sideBar: {
    foreground: ui.foreground,
    background: ui.background,
    border: ui.border,
  },
  sideBarSectionHeader: {
    // background: "#58111A", // Chocolate Cosmos Red
    // background: "#4E1609", // French Puce Red
    background: "#000033",
    border: "#000033",
  },
  sideBarTitle: {
    foreground: "#b9b9ff",
  },
  statusBar: {
    background: ui.background,
    foreground: "#dddddd",
    debuggingForeground: ui.foreground,
    debuggingBackground: ui.secondary,
  },
  statusBarItem: {
    prominentBackground: ui.secondary,
    prominentForeground: ui.background,
    remoteBackground: ui.activityBarForeground,
    remoteForeground: ui.background,
    errorBackground: base.red,
    errorForeground: ui.background,
    warningBackground: base.yellow,
    warningForeground: ui.background,
  },
  titleBar: {
    activeBackground: ui.background,
    activeForeground: "#45daff",
  },
});
