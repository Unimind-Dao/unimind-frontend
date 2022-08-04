import { Box } from "@mui/material";
import { LinearGradient } from "../LinearGradient";
import { SectionTitle } from "../SectionTitle";
import Bridge from "./Bridge";
import TeamCards from "./TeamCards";

export default function Team() {

  const sx = {
    width: "100%",
    height: "auto",
    backgroundColor: "#1B1B1B",
    display: "flex",
    flexDirection: "column",
    color: "white",
    justifyContent: "center", alignItems: "center"
  };

  return (
    <>
      <Box sx={sx}>
        <SectionTitle sx={{ marginTop: "40px" }} mb={2}> Meet us</SectionTitle>
        <LinearGradient shade={"light"} />
        <Bridge />
        <TeamCards />
      </Box>
    </>
  );
}