import { createTheme } from "@mui/material";

export const COLORS = {
  primary: "#11d2ac",
  white: "#ffffff",
  black: "#1b1b1b",
  grey: "rgba(17, 17, 17, 0.7)",
};

const theme = createTheme({
  palette: {
    primary: { main: COLORS.primary, contrastText: COLORS.black },
    secondary: { main: COLORS.white },
    common: { black: COLORS.black, white: COLORS.white },
  },
  typography: {
    fontFamily: ["Poppins"].join(""),
    h1: { fontFamily: "SpaceGrotesk" },
    h2: { fontFamily: "SpaceGrotesk" },
    h3: { fontSize: "18px", lineHeight: "150%", fontWeight: "600" },
  },
});

export default createTheme(theme);
