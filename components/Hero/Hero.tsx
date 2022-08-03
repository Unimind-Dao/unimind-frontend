import { Grid, Typography, useTheme } from "@mui/material";
import { Content } from "../../layout";
import { useBreakpoints } from "../../hooks";
import { Button } from "../Button";
import { SocialLinks } from "../SocialLinks";
import React from "react";

export const Hero = () => {
  const { isMobile } = useBreakpoints();
  const theme = useTheme();

  const width = isMobile ? "auto" : "50%";
  console.log(
    "🎉 theme.palette.secondary.main: ",
    theme.palette.secondary.main
  );

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
          Be where the change happens with UNIMIND.DAO
        </Typography>
        <Typography
          color={theme.palette.secondary.main}
          fontSize="20px"
          lineHeight={1.5}
          pb={6}
        >
          First and only DAO Community in Poland created by people for people.
          The place where you will gain knowledge, build your network and go
          deep into the web 3.0 world.
        </Typography>
        <Button href={process.env.NEXT_PUBLIC_DISCORD_INVITE_LINK}>
          Join Community
        </Button>
        <SocialLinks pt={7} justifyContent={{ xs: "center", sm: "start" }} />
      </Content>
    </Grid>
  );
};
