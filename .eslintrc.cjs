module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  parser: "@typescript-eslint/parser",
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/typescript",
    "plugin:import/recommended",
    "prettier",
  ],
  plugins: [
    "react-refresh",
    "import",
    "prettier",
  ],
  settings: {
    'import/resolver': {
      node: {},
      typescript: {
        directory: './src',
      },
    },
    'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
  },
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "import/order": [
      "error",
      {
        "groups": [
          "type",
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "unknown"
        ],
        "pathGroups": [
          {
            "pattern": "next",
            "group": "builtin",
            "position": "before"
          },
          {
            "pattern": "react",
            "group": "builtin",
            "position": "before"
          },

          {
            "pattern": "@hooks/*",
            "group": "internal",
            "position": "before"
          },
          {
            "pattern": "@pages/*",
            "group": "internal",
            "position": "before"
          },
          {
            "pattern": "@components/*",
            "group": "internal",
            "position": "before"
          },
          {
            "pattern": "src/**",
            "group": "internal",
            "position": "before"
          },
        ],
        "pathGroupsExcludedImportTypes": ["react"],
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        },
        "newlines-between": "always"
      }
    ],
    "prettier/prettier": "error",
  },
};
