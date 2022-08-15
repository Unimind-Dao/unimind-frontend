import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/system/Box";
import { useTranslation } from "next-i18next";

import theme from "../../../../theme/theme";
import LogoSvg from "../../../svg/Logo";

export default function LogoBox() {
  const { t } = useTranslation("common");
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          color: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <LogoSvg />
        </Box>
        <p style={{ fontSize: "15px" }}>{t("outro")}</p>
      </Box>
    </>
  );
}
