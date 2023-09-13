import type { BaseColor, TokenColor, UIColor, Theme } from "../type";
import dark from "./dark";
import hcDark from "./hc-dark";

export type Colors = {
  baseColor: BaseColor;
  tokenColor: TokenColor;
  uiColor: UIColor;
  theme: Theme;
};

type ColorMap = Record<string, Colors>;

export const colors: ColorMap = {
  "Crow Dark": dark,
  "Crow Dark High Contrast": hcDark,
};
