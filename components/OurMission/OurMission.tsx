import { Grid, Typography } from "@mui/material";
import React from "react";
import { Content } from "../../layout/Content";
import { LinearGradient } from "../LinearGradient";
import { SectionTitle } from "../SectionTitle";

export const OurMission = () => {
  return (
    <Content
      pt={12}
      pb={{ xs: 11, md: 16 }}
      sx={{ backgroundColor: "#11D2AC" }}
    >
      <Grid container justifyContent={{ md: "center" }}>
        <Grid>
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
