import { Grid, Typography, useTheme } from "@mui/material";
import { useTranslation } from "next-i18next";

import { Content } from "../../layout/Content";
import { LinearGradient } from "../LinearGradient";
import { SectionTitle } from "../SectionTitle";
import { Button } from "../Button";

const JoinUnimindSection = () => {
  const theme = useTheme();
  const { t } = useTranslation("join-unimind");
  const { t: tCommon } = useTranslation("common");

  return (
    <Content
      pt={12}
      pb={{ xs: 11, md: 16 }}
      sx={{ backgroundColor: theme.palette.primary.main }}
    >
      <Grid container justifyContent="center" alignItems="center" flexDirection="column">
        <Grid item container direction="column" alignItems="center">
          <SectionTitle mb={2}>{t("title")}</SectionTitle>
          <LinearGradient />
        </Grid>
        <Grid item md={10} mb={5}>
          <Typography mt={5} variant="body1" textAlign="center">
            {t("description")}
          </Typography>
        </Grid>
        <Button variant="dark">{tCommon("joinCommunity")}</Button>
      </Grid>
    </Content>
  );
};

export default JoinUnimindSection;
