/* eslint-disable quote-props */
import { type Path, pathGet } from "object-standard-path";
import { parseColour } from "../util";
import type { TokenColour } from "../type";

const fontStyles = ["italic", "bold", "underline", "strikethrough"] as const;

type Token = {
  name?: string;
  scope: string | string[];
  foreground?: string;
  fontStyle?: string;
}[];

export function generateTokenColour(tokens: TokenColour, plainColour: string) {
  const colour = (key: Path<typeof tokens>, alpha?: number) =>
    parseColour(pathGet(tokens, key) as string, alpha);
  const font = (...styles: (typeof fontStyles)[number][] | []) =>
    styles
      .slice(0, 4)
      .filter(Boolean)
      .sort((a, b) => fontStyles.indexOf(a) - fontStyles.indexOf(b))
      .join(" ");

  const token: Token = [
    {
      scope: ["comment", "punctuation.definition.comment", "string.comment"],
      foreground: colour("comment"),
      fontStyle: font("italic"),
    },
    {
      scope: "emphasis",
      fontStyle: font("bold"),
    },
    {
      scope: [
        "delimiter.bracket",
        "delimiter",
        "invalid.illegal.character-not-allowed-here.html",
        "keyword.operator.rest",
        "keyword.operator.spread",
        "keyword.operator.type.annotation",
        "keyword.operator.relational",
        "keyword.operator.assignment",
        "meta.tag.block.any.html",
        "meta.tag.inline.any.html",
        "meta.tag.structure.input.void.html",
        "meta.type.annotation",
        "meta.embedded.block.github-actions-expression",
        "storage.type.function.arrow",
        "keyword.operator.type",
        "meta.objectliteral.ts",
      ],
      foreground: colour("operator"),
    },
    {
      scope: [
        "punctuation",
        "meta.brace",
        "meta.attribute punctuation.separator",
      ],
      foreground: colour("punctuation"),
    },
    // , ;
    {
      scope: ["punctuation.terminator", "punctuation.separator"],
      foreground: colour("punctuation", 0.6),
    },
    {
      scope: [
        "constant",
        "entity.name.constant",
        "variable.language",
        "meta.definition.variable",
      ],
      foreground: colour("constant"),
    },
    {
      scope: [
        "source entity",
        "source entity.name",
        "variable.parameter.function",
        "meta.body.function.definition.special",
        "support.function",
        "meta.function",
        "meta.function-call.python",
      ],
      foreground: colour("function"),
    },
    {
      scope: ["entity.name.tag", "tag.html"],
      foreground: colour("htmlTag"),
    },
    {
      scope: ["entity.name.function", "entity.name.function.member"],
      foreground: colour("function"),
    },
    {
      scope: [
        "source keyword",
        "storage.type.java",
        "entity.name.package",
        "entity.name.import",
        "keyword.operator.expression.infer",
        "keyword.operator.expression.is.ts",
        "keyword.control.satisfies",
        "keyword.control.as.ts",
      ],
      foreground: colour("keyword"),
    },
    {
      scope: ["storage.type.annotation.java"],
      foreground: colour("java.annotation"),
      fontStyle: font(),
    },
    {
      scope: [
        "storage",
        "storage.type",
        "support.type.builtin",
        "constant.language.undefined",
        "constant.language.null",
      ],
      foreground: colour("builtin"),
    },
    // ================ STRINGS =================
    {
      scope: [
        "string",
        "string punctuation.section.embedded source",
        "attribute.value",
        "meta.attribute-selector.scss",
        "entity.name.import.go",
      ],
      foreground: colour("string"),
    },
    // ============== PROPERTY ==================
    {
      name: "Quoted property values",
      scope: [
        "punctuation.definition.string",
        "punctuation.support.type.property-value",
      ],
      foreground: colour("string"),
    },
    {
      scope: "support",
      foreground: colour("property.normal"),
    },
    {
      scope: [
        "property",
        "meta.property-name",
        "meta.attribute",
        "meta.object-literal.key",
        "attribute.name",
        "entity.other.attribute-name",
        "variable.other.object.property",
        "variable.other.property",
      ],
      foreground: colour("property.normal"),
    },
    {
      scope: [
        "entity.name.tag.yaml",
        "meta.attribute entity.other.attribute-name.html",
        "source.css entity.other.attribute-name",
        "source.css support.type.property-name.media",
        "entity.other.attribute-name.tsx",
        "entity.other.attribute-name.js",
        "entity.other.attribute-name.xml",
      ],
      foreground: colour("parameter"),
    },
    {
      scope: ["source.css support.type.property-name"],
      foreground: colour("property.declaration"),
    },
    {
      scope: [
        "source variable",
        "identifier",
        "constant.other.table-name",
        "invalid.deprecated.entity.other.attribute-name.html",
        // 'support.type.property-name.json',
        "support.type.property-name.toml",
        "support.type.property-name.array.toml",
        "keyword.other.definition.ini",
        "variable.other.normal.shell",
      ],
      foreground: colour("variable.local"),
    },
    // ================ TS ======================
    {
      name: "Types declaration and references, TS grammar specific",
      scope: [
        "meta.type.cast.expr",
        "meta.type.new.expr",
        "support.constant.math",
        "support.constant.dom",
        "support.constant.json",
        "entity.other.inherited-class",
      ],
      foreground: "#58ffde", // Green Cyan
    },
    {
      name: "Import/export destructure",
      scope: [
        "variable.other.readwrite.alias",
        "meta.definition.variable",
        "meta.object-binding-pattern-variable",
      ],
      foreground: colour("import"),
    },
    {
      name: "Object destructure",
      scope: ["source variable.other.constant"],
      foreground: "#348aee", // Blue
    },
    {
      name: "Object keys, TS grammar specific",
      scope: ["meta.object-literal.key"],
      foreground: colour("property.normal"),
    },
    // ============== JSON/YAML =================
    {
      name: "JSON key",
      scope: ["support.type.property-name.json", "entity.name.tag.yaml"],
      foreground: colour("property.normal"),
    },
    {
      name: "JSON value",
      scope: [
        "support.type.property-value.json",
        "string.quoted.double.yaml",
        "string.unquoted.plain.out.yaml",
      ],
      foreground: colour("string"),
    },
    // ================= TYPES ==================
    {
      name: "Types declaration and references",
      scope: ["support.type.primitive", "entity.name.type.instance.jsdoc"],
      foreground: colour("type.primitive"),
    },
    {
      scope: ["entity.name.type.parameter"],
      foreground: colour("type.parameter"),
      fontStyle: font("bold"),
    },
    {
      scope: ["entity.name.type.parameter.cpp", "entity.name.type.ts"],
      foreground: colour("type.normal"),
    },
    {
      scope: [
        "meta.type keyword.operator.expression.typeof",
        "meta.type keyword.operator.expression.keyof",
      ],
      foreground: colour("keyword"),
      fontStyle: font("italic"),
    },
    {
      scope: "namespace",
      foreground: colour("namespace"),
    },
    {
      scope: [
        "keyword.operator",
        "keyword.operator.assignment.compound",
        "meta.var.expr.ts",
      ],
      foreground: colour("operator"),
    },
    {
      scope: "invalid",
      fontStyle: font("strikethrough"),
      foreground: colour("error"),
    },
    {
      scope: "message.error",
      foreground: colour("error"),
    },
    {
      scope: "string variable",
      foreground: colour("string"),
    },
    {
      scope: ["source.regexp", "string.regexp"],
      foreground: colour("regex"),
    },
    {
      scope: "string.regexp punctuation.definition.string",
      fontStyle: font("bold"),
    },
    {
      scope: ["keyword.control.anchor.regexp", "storage.modifier.reference"],
      fontStyle: font(),
    },
    {
      scope: "punctuation.definition.character-class.regexp",
      foreground: colour("punctuation"),
    },
    {
      scope: [
        "string.regexp.character-class",
        "constant.character.escape",
        "constant.other.character-class.regexp",
        "string.regexp string.regexp.arbitrary-repitition",
        "string.regexp constant.character.escape",
        "constant.other.placeholder",
      ],
      foreground: colour("escape"),
    },
    {
      scope: ["support.constant"],
      foreground: colour("constant"),
    },
    {
      scope: [
        "constant.numeric",
        "constant.numeric.hex storage.type.number",
        "number",
      ],
      foreground: colour("number"),
      fontStyle: font(),
    },
    {
      scope: [
        "entity.other.attribute-name.pseudo-class.css",
        "entity.other.attribute-name.pseudo-element.css",
        "punctuation.definition.entity.css",
      ],
      foreground: colour("css.pseudo"),
    },
    {
      scope: ["source.css variable"],
      foreground: colour("css.variable"),
    },
    {
      scope: ["keyword.other.unit"],
      foreground: colour("css.unit"),
    },
    {
      scope: ["source.css support.function"],
      foreground: colour("css.function"),
    },
    {
      scope: ["constant.language.boolean", "constant.language"],
      foreground: colour("boolean"),
    },
    {
      // todo))
      scope: "meta.module-reference",
      foreground: colour("function"),
    },
    {
      scope: "entity.name.section",
      foreground: colour("keyword"),
    },
    {
      scope: "punctuation.definition.list.begin.markdown",
      foreground: colour("punctuation"),
    },
    {
      scope: ["markup.heading", "markup.heading entity.name"],
      fontStyle: font("bold"),
      foreground: colour("markdown.title"),
    },
    {
      scope: "markup.quote",
      foreground: colour("markdown.quotes"),
    },
    {
      scope: "markup.italic",
      fontStyle: font("italic"),
      foreground: colour("markdown.italic"),
    },
    {
      scope: "markup.bold",
      fontStyle: font("bold"),
      foreground: colour("markdown.bold"),
    },
    {
      scope: [
        "markup.inline.raw",
        "fenced_code.block.language.markdown",
        "fenced_code.block.language",
      ],
      foreground: colour("markdown.code"),
    },
    {
      scope: ["markup.deleted", "punctuation.definition.deleted"],
      foreground: colour("diff.deleted"),
    },
    {
      scope: ["markup.inserted", "punctuation.definition.inserted"],
      foreground: colour("diff.inserted"),
    },
    {
      scope: ["markup.changed", "punctuation.definition.changed"],
      foreground: colour("diff.changed"),
    },
    {
      scope: ["markup.ignored", "markup.untracked"],
      foreground: colour("comment"),
    },
    {
      scope: "meta.diff.range",
      foreground: colour("diff.range"),
      fontStyle: font("bold"),
    },
    {
      scope: "meta.diff.header",
      foreground: colour("diff.header"),
    },
    // todo))
    {
      scope: "meta.separator",
      fontStyle: font("bold"),
      foreground: colour("function"),
    },
    // todo))
    {
      scope: "meta.output",
      foreground: colour("function"),
    },
    {
      scope: [
        "brackethighlighter.tag",
        "brackethighlighter.curly",
        "brackethighlighter.round",
        "brackethighlighter.square",
        "brackethighlighter.angle",
        "brackethighlighter.quote",
      ],
      foreground: colour("operator"),
    },
    {
      scope: "brackethighlighter.unmatched",
      foreground: colour("error"),
    },
    {
      scope: [
        "constant.other.reference.link",
        "string.other.link",
        "punctuation.definition.string.begin.markdown",
        "punctuation.definition.string.end.markdown",
        "markup.heading.setext",
      ],
      foreground: colour("link"),
    },
    {
      scope: ["string.other.link.description", "string.other.link.title"],
      foreground: colour("string"),
    },
    {
      scope: ["variable.other.link.underline"],
      fontStyle: font("underline"),
    },
    {
      scope: [
        "markup.underline.link.markdown",
        "markup.underline.link.image.markdown",
      ],
      foreground: colour("link"),
      fontStyle: font("underline"),
    },
    {
      scope: [
        "variable.parameter",
        "variable.other.jsdoc",
        "meta.import variable",
      ],
      foreground: colour("parameter"),
    },
    {
      scope: [
        "type.identifier",
        "entity.other.inherited-class",
        "entity.name.type.class",
        "entity.name.type.module",
        "meta.parameter.initialization",
      ],
      foreground: colour("class"),
    },
    {
      scope: [
        "entity.name.section.group-title",
        "support.type.property-name.table.toml",
      ],
      foreground: colour("keyword"),
    },
    {
      scope: [
        "support.class.component.js",
        "support.class.component.vue",
        "support.class.component.tsx",
      ],
      foreground: colour("js.component"),
    },
    {
      scope: ["punctuation.definition.template-expression"],
      foreground: colour("js.templateExpression"),
    },
    {
      scope: ["meta.fstring.python constant.character.format.placeholder"],
      foreground: colour("python.fstring"),
    },
    {
      scope: ["invalid.illegal.unrecognized-tag.html"],
      fontStyle: font(),
    },
    {
      scope: [
        "keyword.control.directive",
        "keyword.control.import",
        "keyword.control.from",
        "keyword.control.export",
        "keyword.package",
        "keyword.other.package",
        "keyword.import",
        "meta.use.rust keyword",
        "variable.language.this",
        "variable.language.super",
        "keyword.operator.new",
        "keyword.control.trycatch",
        "storage.modifier.package",
        "storage.modifier.import",
        "keyword.operator.expression.import",
        "source.css keyword.other.important",
        "keyword.other.using",
      ],
      foreground: colour("keywordAlt"),
    },
    {
      scope: "keyword.control.import.python",
      foreground: colour("keyword"),
    },
    {
      scope: "keyword.control.ternary.java",
      foreground: colour("keywordAlt"),
      fontStyle: font(),
    },
    {
      scope: [
        "source keyword.control",
        "keyword.function",
        "keyword.type",
        "keyword.other.new",
        "keyword.other.this",
        "storage.type",
        "storage.modifier",
        "variable.language.this",
      ],
      fontStyle: font("italic"),
      foreground: colour("keyword"),
    },
    {
      scope: "source.go storage.type",
      fontStyle: font(),
    },
    {
      scope: "keyword.channel.go",
      fontStyle: font("bold"),
    },
    {
      scope: ["storage.type.function.arrow"],
      fontStyle: font(),
    },
    {
      scope: ["storage.type.java", "punctuation.definition.string.template"],
      fontStyle: font("bold"),
    },
    // C#
    {
      scope: [
        // 'variable.other.property',
        // 'variable.other.enummember',
        // 'variable.other.constant.property',
        "entity.name.variable.local.cs",
        "variable.other.object.cs",
        "variable.other.object.property.cs",
        "variable.other.readwrite.cs",
      ],
      foreground: colour("property.normal"),
    },
    {
      scope: [
        "keyword.control.cs",
        // 'keyword.function.cs',
        // 'storage.type.cs',
        // 'storage.modifier.cs',
        // 'variable.language.this.cs',
        // 'source keyword.cs',
        "keyword.other.using.cs",
      ],
      fontStyle: font(),
      foreground: colour("keywordAlt"),
    },
    {
      scope: ["keyword.other.var.cs"],
      fontStyle: font("italic"),
      foreground: colour("keyword"),
    },
    {
      scope: ["entity.name.type.cs", "entity.name.type.namespace.cs"],
      fontStyle: font(),
      foreground: colour("class"),
    },
    // Java
    {
      scope: ["source.java storage.type.primitive"],
      fontStyle: font("bold"),
    },
    {
      scope: ["source.java variable.parameter"],
      fontStyle: font("underline"),
    },
    {
      scope: [
        "storage.type.object.array.java",
        "meta.class.java storage.type.java",
        "entity.name.type.class.java",
      ],
      foreground: colour("java.class"),
      fontStyle: font("bold"),
    },
    {
      scope: ["entity.name.namespace"],
      foreground: colour("java.import"),
    },
    {
      scope: ["meta.jsx.children"],
      foreground: plainColour,
    },
  ];
  return {
    semanticHighlighting: true,
    semanticTokenColors: {
      parameter: {
        foreground: colour("parameter"),
        underline: true,
      },
      "property.declaration": colour("property.declaration"),
      "property.readonly": colour("property.normal"),
      "property.defaultLibrary": colour("property.defaultLib"),
      interface: {
        foreground: colour("interface.normal"),
        italic: true,
      },
      "interface.defaultLibrary": {
        foreground: colour("interface.defaultLib"),
        bold: true,
      },
      "variable.defaultLibrary": colour("variable.defaultLib"),
      type: colour("type.normal"),
      "type.defaultLibrary": colour("type.defaultLib"),
      function: colour("function"),
      "function.defaultLibrary": {
        bold: true,
      },
      "function.builtin": {
        bold: true,
      },
      namespace: colour("namespace"),
      struct: colour("class"),
      class: {
        foreground: colour("class"),
        italic: false,
        bold: false,
      },
      "class.defaultLibrary": {
        bold: true,
      },
      "class.builtin": {
        bold: true,
      },
      "class.typeHint": colour("type.primitive"),
      selfParameter: {
        foreground: colour("keywordAlt"),
        italic: true,
        underline: false,
      },
      enumMember: colour("enum"),
      // Rust cfg
      builtinAttribute: colour("parameter"),
      tomlTableKey: colour("parameter"),
    },
    tokenColors: token.map(({ scope, fontStyle, foreground, name }) => ({
      name,
      scope,
      settings: { foreground, fontStyle },
    })),
  };
}
