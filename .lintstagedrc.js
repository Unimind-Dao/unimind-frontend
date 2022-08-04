const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

const formatCommand = (filenames) => `yarn prettier ${filenames.join(" ")}`;
const tsCheckCommand = () => "yarn tsc --noEmit";

module.exports = {
  // this will check Typescript files
  "**/*.(ts|tsx)": tsCheckCommand,
  //   "*.{js,jsx,ts,tsx}": () => "yarn format",
  //   "*.{js,jsx,ts,tsx}": [buildEslintCommand],

  // This will lint and format TypeScript and                                             //JavaScript files
  "*.{js,jsx,ts,tsx}": [buildEslintCommand, formatCommand],

  // this will Format MarkDown and JSON
  "**/*.(md|json)": formatCommand,
};
