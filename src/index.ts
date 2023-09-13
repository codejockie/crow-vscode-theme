import { mkdir, writeFile } from "node:fs/promises";
import { buildTheme } from "./modules";
import type { BaseColor, TokenColor, UIColor, Theme, UITheme } from "./type";
import { colors } from "./colors";

const author = "codejockie";

await mkdir("./themes", { recursive: true });
export interface GenerateOption {
  name: string;
  baseColor: BaseColor;
  tokenColor: TokenColor;
  uiColor: UIColor;
  theme: Theme;
}

const base: Record<Theme, UITheme> = {
  dark: "vs-dark",
  light: "vs",
  "hc-dark": "hc-black",
  "hc-light": "hc-light",
};

async function generateTheme({
  name,
  baseColor,
  tokenColor,
  theme,
  uiColor,
}: GenerateOption) {
  await writeFile(
    `./themes/${name.replace(/\s/g, "-").toLowerCase()}-color-theme.json`,
    `${JSON.stringify(
      {
        name,
        author,
        base: base[theme],
        ...buildTheme(baseColor, tokenColor, uiColor),
      },
      null,
      2
    )}\n`
  );
}

const tasks = Object.entries(colors).map(([name, value]) =>
  generateTheme({ name, ...value })
);
Promise.all(tasks).catch(console.error);
