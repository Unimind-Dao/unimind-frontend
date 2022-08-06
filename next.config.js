module.exports = {
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: {
      displayName: true,
      // Enabled by default.
      ssr: true,
      // Enabled by default.
      fileName: true,
      // Empty by default.
      topLevelImportPaths: ["index"],
      // Defaults to ["index"].
      meaninglessFileNames: ["index"],
      // Enabled by default.
      cssProp: true,
      // Empty by default.
      namespace: "unimind.dao",
      // Not supported yet.
      minify: true,
      // Not supported yet.
      transpileTemplateLiterals: false,
      // Not supported yet.
      pure: true,
    },
  },
};
