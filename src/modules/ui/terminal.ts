import type { GenerateUIWithBaseFn } from "../../type";

const black = "#000000ff";
const white = "#ffffff";
export const generateTerminalColor: GenerateUIWithBaseFn = (baseColor, ui) => ({
  terminalCursor: {
    background: ui.backgroundEditor,
    foreground: ui.foreground,
  },
  terminal: {
    background: ui.background,
    border: ui.panelBorder,
    foreground: ui.foreground,
    ansiBrightBlack: black,
    ansiBrightBlue: baseColor.blue,
    ansiBrightCyan: baseColor.cyan,
    ansiBrightGreen: baseColor.green,
    ansiBrightMagenta: baseColor.purple,
    ansiBrightRed: baseColor.red,
    ansiBrightWhite: white,
    ansiBrightYellow: baseColor.yellow,
    ansiBlack: black,
    ansiBlue: baseColor.blue,
    ansiCyan: baseColor.cyan,
    ansiGreen: baseColor.green,
    ansiMagenta: baseColor.purple,
    ansiRed: baseColor.red,
    ansiWhite: white,
    ansiYellow: baseColor.yellow,
  },
});
