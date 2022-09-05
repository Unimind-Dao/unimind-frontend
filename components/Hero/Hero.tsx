import React from "react";
import { Grid, Typography, useTheme } from "@mui/material";
import { useTranslation } from "next-i18next";

import { useBreakpoints } from "../../hooks";
import { Content } from "../../layout";
import { Button } from "../Button";
import { SocialLinks } from "../SocialLinks";

export const Hero = () => {
  const { t } = useTranslation(["hero", "common"]);
  const { isMobile } = useBreakpoints();
  const theme = useTheme();

  const width = isMobile ? "auto" : "50%";

  return (
    <Grid sx={{ backgroundColor: theme.palette.common.black }} flexWrap="wrap">
      <Content sx={{ width }}>
        <Typography
          variant="h1"
          color={theme.palette.secondary.main}
          fontSize="38px"
          fontWeight="bold"
          lineHeight={1.25}
          pb={3}
          pt={12}
        >
          {t("hero:title")}
        </Typography>
        <Typography
          color={theme.palette.secondary.main}
          fontSize="20px"
          lineHeight={1.5}
          pb={6}
        >
          {t("description")}
        </Typography>
        <Grid item width={{ sm: 205 }}>
          <Button
            aria-label="discord invite link button"
            href={process.env.NEXT_PUBLIC_DISCORD_INVITE_LINK}
          >
            {t("common:joinCommunity")}
          </Button>
        </Grid>
        <SocialLinks pt={7} justifyContent={{ xs: "center", sm: "start" }} />
      </Content>
    </Grid>
  );
};
