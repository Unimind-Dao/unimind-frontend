import { Box } from "@mui/material";

import ContactBox from "./ContactBox";

const sx = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  color: "grey",
};

export default function PartnersBox() {
  return (
    <Box sx={sx}>
      <ContactBox />
    </Box>
  );
}
