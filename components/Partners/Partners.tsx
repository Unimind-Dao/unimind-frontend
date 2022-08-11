import { Box } from "@mui/material";

import { LinearGradient } from "../LinearGradient";
import { SectionTitle } from "../SectionTitle";

import PartnersLogo from "./PartnersLogo";

const sx = {
  width: "100%",
  height: "auto",
  backgroundColor: "#1B1B1B",
  display: "flex",
  flexDirection: "column",
  color: "white",
  justifyContent: "center",
  alignItems: "center"
};

export function Partners() {
  return (
    <>
      <Box sx={sx} pt={12} pb={12}>
        <SectionTitle mb={2}>
          Partnerzy
        </SectionTitle>
        <LinearGradient shade={"light"} />
        <PartnersLogo />
      </Box>
    </>
  );
}
