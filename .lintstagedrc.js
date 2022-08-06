const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

const formatCommand = (filenames) => `npx prettier ${filenames.join(" ")}`;
const tsCheckCommand = () => "npx tsc --noEmit";

module.exports = {
  "**/*.(ts|tsx)": tsCheckCommand,
  "*.{js,jsx,ts,tsx}": [buildEslintCommand, formatCommand],
  "**/*.(md|json)": formatCommand,
};
