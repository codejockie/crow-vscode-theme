import type { GenerateUIWithBaseFn } from "../../type";

export const generateEditorColor: GenerateUIWithBaseFn = (base, ui) => ({
  editor: {
    foreground: ui.foreground,
    background: ui.backgroundEditor,
    // selection
    selectionBackground: ui.selection,
    selectionForeground: ui.foregroundAlt,
    inactiveSelectionBackground: "#3a3d41",
    selectionHighlightBackground: ui.highlightBg,
    selectionHighlightBorder: ui.borderNormal,
    // word auto highlight on cursor
    wordHighlightBackground: ui.wordHighlight,
    // document search
    findRangeHighlightBorder: ui.rangeBorder,
    findMatchBackground: "#ff802bcc",
    findMatchBorder: "#ff802b",
    findMatchHighlightBackground: "#ff444437",
    findMatchHighlightBorder: "#ff4444aa",
    // current line
    lineHighlightBackground: ui.lineHighlight,
    // range highlight
    rangeHighlightBackground: ui.rangeBackground,
    rangeHighlightBorder: ui.rangeBorder,
    findRangeHighlightBackground: ui.rangeBackground,
  },
  editorBracketMatch: {
    background: ui.backgroundAlt,
  },
  editorCursor: {
    foreground: ui.foreground,
    background: ui.cursor,
  },
  editorGroup: {
    border: ui.borderAlt,
    dropBackground: ui.dropBackground,
  },
  editorGroupHeader: {
    tabsBackground: ui.background,
  },
  editorGutter: {
    background: "#050505",
    addedBackground: "#014601",
    commentRangeForeground: "#f1ff28",
  },
  editorWhitespace: {
    foreground: "#ffffff40",
  },
  editorWidget: {
    background: ui.background,
    border: ui.foreground,
  },
  peekView: {
    border: ui.borderNormal,
  },
  peekViewEditor: {
    background: "#000033",
  },
  peekViewEditorGutter: {
    background: "#00074b",
  },
  peekViewResult: {
    background: "#090b13",
    fileForeground: "#7998fd",
  },
  peekViewTitle: {
    background: "#000099",
  },
});
