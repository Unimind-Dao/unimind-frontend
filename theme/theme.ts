import { createTheme } from "@mui/material";

export const COLORS = {
  primary: "#11d2ac",
  white: "#ffffff",
  black: "#1b1b1b",
};

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: COLORS.primary, contrastText: COLORS.black },
    secondary: { main: COLORS.white },
    common: { black: COLORS.black, white: COLORS.white },
  },
  typography: {
    fontFamily: ["Poppins"].join(""),

    h1: { fontFamily: "SpaceGrotesk", color: COLORS.white },
    h2: { fontFamily: "SpaceGrotesk", color: COLORS.white },
    h3: { fontSize: "18px", lineHeight: "150%", fontWeight: "600" },
  },
});

export default createTheme(theme);
