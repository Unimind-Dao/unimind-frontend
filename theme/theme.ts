import { createTheme } from "@mui/material";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: { main: "#11d2ac" },
    secondary: { main: "#fff" },
    common: { black: "#1b1b1b", white: "#fff" },
  },
  typography: {
    fontFamily: ["Poppins"].join(""),
    h1: { fontFamily: "SpaceGrotesk" },
    h2: { fontFamily: "SpaceGrotesk" },
  },
});

export default createTheme(theme);
