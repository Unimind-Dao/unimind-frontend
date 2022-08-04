import React from "react";
import { Box } from "@mui/system";
import { useTranslation } from "next-i18next";

const sx = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  color: "rgba(255, 255, 255, 1)",
};

export default function Footer() {
  const { t } = useTranslation("common");

  return (
    <Box sx={sx}>
      <p>{t("footer")}</p>
    </Box>
  );
}
