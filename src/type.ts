import type { UI } from "./type.d";

export type { UI };

export type BaseColor = {
  gray: string;
  red: string;
  orange: string;
  lightOrange: string;
  yellow: string;
  lightYellow: string;
  lightGreen: string;
  green: string;
  greenCyan: string;
  greenShade: string;
  cyan: string;
  cyanBlue: string;
  lightCyan: string;
  lightCyanBlue: string;
  sky: string;
  blue: string;
  purple: string;
  pink: string;
  desaturatedOrange: string;
  lavenderMagenta: string;
  void: string;
  crow: string;
};

export type TokenColour = {
  htmlTag: string;
  comment: string;
  string: string;
  keyword: string;
  keywordAlt: string;
  number: string;
  boolean: string;
  operator: string;
  function: string;
  import: string;
  property: {
    normal: string;
    declaration: string;
    defaultLib: string;
  };
  parameter: string;
  variable: {
    local: string;
    defaultLib: string;
  };
  constant: string;
  enum: string;
  class: string;
  interface: {
    normal: string;
    defaultLib: string;
  };
  type: {
    normal: string;
    parameter: string;
    primitive: string;
    defaultLib: string;
  };
  builtin: string;
  namespace: string;
  punctuation: string;
  error: string;
  escape: string;
  link: string;
  regex: string;
  js: {
    component: string;
    templateExpression: string;
  };
  css: {
    variable: string;
    unit: string;
    function: string;
    pseudo: string;
  };
  java: {
    class: string;
    import: string;
    annotation: string;
  };
  python: {
    fstring: string;
  };
  markdown: {
    title: string;
    bold: string;
    italic: string;
    quotes: string;
    code: string;
  };
  diff: {
    deleted: string;
    inserted: string;
    changed: string;
    header: string;
    range: string;
  };
};

export type UIColor = {
  activeForeground: string;
  activeBackground: string;
  activityBarForeground: string;
  activityBarInactiveForeground: string;
  buttonBackground: string;
  buttonHoverBackground: string;
  elementBorder: string;
  foreground: string;
  foregroundAlt: string;
  background: string;
  backgroundAlt: string;
  backgroundEditor: string;
  backgroundEditorAlt: string;
  badgeBackground: string;
  badgeForeground: string;
  border: string;
  borderAlt: string;
  borderActive: string;
  borderNormal: string;
  defaultBlack: string;
  dropBackground: string;
  highlightBg: string;
  hoverBackground: string;
  inactiveBackground: string;
  inactiveForeground: string;
  primary: string;
  secondary: string;
  cursor: string;
  selection: string;
  scrollbar: string;
  lineHighlight: string;
  listItem: string;
  listItemForeground: string;
  listItemHoverBackground: string;
  panelBorder: string;
  rangeBackground: string;
  rangeBorder: string;
  toolbarBorder: string;
  toolbarBackground: string;
  wordHighlight: string;
};

export type Theme = "light" | "dark" | "hc-dark" | "hc-light";
export type UITheme = "hc-black" | "hc-light" | "vs" | "vs-dark";
export type GenerateUIFn = (color: UIColor) => UI;
export type GenerateUIWithBaseFn = (base: BaseColor, color: UIColor) => UI;
