import { Grid, Typography, useTheme } from "@mui/material";
import { useTranslation } from "next-i18next";

import { Content } from "@/layout/Content";

import { LinearGradient } from "../LinearGradient";
import { SectionTitle } from "../SectionTitle";

export const OurMission = () => {
  const theme = useTheme();
  const { t } = useTranslation("mission");

  return (
    <Content
      pt={12}
      pb={{ xs: 11, md: 16 }}
      sx={{ backgroundColor: theme.palette.primary.main }}
    >
      <Grid container justifyContent={{ md: "center" }}>
        <Grid
          item
          container
          direction="column"
          alignItems={{ xs: "start", md: "center" }}
        >
          <SectionTitle mb={2}>{t("title")}</SectionTitle>
          <LinearGradient />
        </Grid>
        <Grid item md={10}>
          <Typography mt={5} variant="body1" textAlign={{ md: "center" }}>
            {t("description")}
          </Typography>
        </Grid>
      </Grid>
    </Content>
  );
};
