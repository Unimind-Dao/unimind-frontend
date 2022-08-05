import Box from "@mui/system/Box";

import FirstBox from "./FirstBox/FirstBox";
import ContactBox from "./ContactBox";
import EndBox from "./EndBox";
import PartnersBox from "./PartnersBox";
export default function Footer() {
  const sx = { width: "100%", height: "auto", bgcolor: "#1B1B1B" };

  return (
    <Box sx={sx}>
      <FirstBox />
      <PartnersBox />
      <EndBox />
    </Box>
  );
}
