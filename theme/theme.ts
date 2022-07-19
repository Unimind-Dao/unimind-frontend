import { createTheme } from "@mui/material";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: { main: "#11d2ac" },
    secondary: { main: "#fff" },
    common: { black: "#1b1b1b", white: "#fff" },
  },
});

export default createTheme(theme);
