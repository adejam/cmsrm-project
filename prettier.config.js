/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderTypeScriptVersion: "4.4.0",
  trailingComma: "es5",
  tabWidth: 2,
  useTabs: false,
  printWidth: 80,
  semi: false,
  singleQuote: true,
  endOfLine: "lf",
}

export default config
