import { Box } from "@mui/material";
import React from "react";
import { useTranslation } from "next-i18next";

import { LinearGradient } from "../LinearGradient";
import { SectionTitle } from "../SectionTitle";
import Bridge from "./Bridge";
import TeamCards from "./TeamCards";

const sx = {
  width: "100%",
  height: "auto",
  backgroundColor: "#1B1B1B",
  display: "flex",
  flexDirection: "column",
  color: "white",
  justifyContent: "center",
  alignItems: "center",
};

export default function Team() {
  const { t } = useTranslation("meet-us");

  return (
    <>
      <Box sx={sx}>
        <SectionTitle sx={{ marginTop: "40px" }} mb={2}>
          {t("title")}
        </SectionTitle>
        <LinearGradient shade={"light"} />
        <Bridge />
        <TeamCards />
      </Box>
    </>
  );
}
