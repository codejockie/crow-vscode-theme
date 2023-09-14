import type { BaseColor, TokenColour, UIColor } from "../type";
import { buildUI } from "../util";
import { generateTokenColour } from "./token";
import { generateBaseColor } from "./ui/base";
import { generateEditorColor } from "./ui/editor";
import { generateElementColor } from "./ui/element";
import { generateTerminalColor } from "./ui/terminal";
import { generateViewColor } from "./ui/view";

export function buildTheme(base: BaseColor, token: TokenColour, ui: UIColor) {
  return {
    colors: buildUI({
      ...generateBaseColor(ui),
      ...generateEditorColor(base, ui),
      ...generateElementColor(ui),
      ...generateViewColor(base, ui),
      ...generateTerminalColor(base, ui),
    }),
    ...generateTokenColour(token, ui.foreground),
  };
}
