import React from "react";

import { Grid, Typography, useTheme } from "@mui/material";
import { useBreakpoints } from "../../hooks/useBreakpoints";
import { Content } from "../../layout/Content";
import { Button } from "../Button";
import { SocialLinks } from "../SocialLinks";

export const Hero = () => {
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
        <Button>Join Community</Button>
        <SocialLinks pt={7} justifyContent={{ xs: "center", sm: "start" }} />
      </Content>
    </Grid>
  );
};
