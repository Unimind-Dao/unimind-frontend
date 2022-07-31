import React from "react";

import { Grid, Typography, useTheme } from "@mui/material";

import { Content } from "../../layout/Content";
import { LinearGradient } from "../LinearGradient";
import { SectionTitle } from "../SectionTitle";

export const OurMission = () => {
  const theme = useTheme();

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
          <SectionTitle mb={2}>Our Mission</SectionTitle>
          <LinearGradient />
        </Grid>
        <Grid item md={10}>
          <Typography mt={5} variant="body1" textAlign={{ md: "center" }}>
            UNIMIND.DAO is your door to development in the WEB 3 world. We
            create a community that exists to help you gain knowledge, shape new
            skills and exchange experiences. For the curious we are a source of
            information, for freelancers and creators a place of opportunities,
            for founders a space to find talents and unite others around their
            project. For you, a support in entering the world of tomorrow.
          </Typography>
        </Grid>
      </Grid>
    </Content>
  );
};
