import React from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";

export default function Bridge() {
  const { t } = useTranslation("meet-us");

  return (
    <>
      <Box sx={{ marginTop: "10px", marginBottom: "30px", width: "50%" }}>
        <Typography
          sx={{ width: "100%" }}
          mt={5}
          variant="body1"
          textAlign={{ md: "center" }}
        >
          {t("description")}
        </Typography>
      </Box>
    </>
  );
}
