import { Box } from "@mui/material";
import ContactBox from "./ContactBox";

export default function PartnersBox() {
  const sx = {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    color: "grey",
  };

  return (
    <Box sx={sx}>
      <ContactBox />
    </Box>
  );
}
