module.exports = {
  printWidth: 100,
  singleQuote: true,
  semi: true,
  trailingComma: "all",
  tabWidth: 2,
  useTabs: false,
  endOfLine: "auto",
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^@/(.*)$',
    '^@utils/(.*)$',
    '^@apis/(.*)$',
    '^@hooks/(.*)$',
    '^@recoils/(.*)$',
    '^@pages/(.*)$',
    '^@base/(.*)$',
    '^@common/(.*)$',
    '^@components/(.*)$',
    '^@styles/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  // importOrderParserPlugins: ["typescript", "decorators-legacy"],
}
