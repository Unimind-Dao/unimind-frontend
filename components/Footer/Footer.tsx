import Box from "@mui/system/Box";

import FirstBox from "./FirstBox/FirstBox";
import EndBox from "./EndBox";
import PartnersBox from "./PartnersBox";

export function Footer() {
  const sx = { width: "100%", height: "auto", bgcolor: "#1B1B1B", paddingTop: "3rem" };

  return (
    <Box sx={sx}>
      <FirstBox />
      <PartnersBox />
      <EndBox />
    </Box>
  );
}
