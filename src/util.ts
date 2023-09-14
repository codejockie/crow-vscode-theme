import tinycolor from "tinycolor2";
import type { UI } from "./type";

/**
 * Unify colour string to hex string
 * @param colourString colour string
 * @param alpha colour alpha value (0-1)
 */
export function parseColour(colourString: string, alpha?: number) {
  if (!alpha) {
    return tinycolor(colourString).toHexString();
  }
  alpha = Math.min(alpha, 1);
  const tinycolorInstance = tinycolor(colourString).setAlpha(alpha);
  return tinycolorInstance[alpha === 1 ? "toHexString" : "toHex8String"]();
}

/**
 * Brighten the colour string
 * @param colourString colour string
 * @param amount brighten amount (0-100)
 */
export function brighten(colourString: string, amount: number) {
  return tinycolor(colourString).brighten(amount).toHexString();
}

export function getTextColour(bgColourString: string) {
  const parsedColour = tinycolor(bgColourString);
  return parsedColour.getBrightness() < 60 ? "#fafafa" : "#1d1d1d";
}

export function buildUI(themeUI: UI) {
  const theme = {};

  for (const key in themeUI) {
    const value = themeUI[key];

    if (typeof value === "object") {
      for (const i in value) {
        const e = value[i];
        theme[`${key}.${i}`] = e;
      }
    } else {
      theme[key] = value;
    }
  }

  return theme;
}
