import React from "react";
import { Grid, useTheme } from "@mui/material";

import { Content } from "../../layout/Content";

import { SingleCard } from "./SingleCard";

const CARDS_TITLES = {
  FIRST: (
    <>
      Are you interested <br /> or curious in…
    </>
  ),
  SECOND: (
    <>
      Do you want to gain <br /> new competences in...
    </>
  ),
  THIRD: (
    <>
      Are you looking <br /> for opportunities..
    </>
  ),
};

export const About = () => {
  const theme = useTheme();

  return (
    <Content
      pt={13}
      pb={{ xs: 13, md: 16 }}
      sx={{ backgroundColor: theme.palette.common.black }}
    >
      <Grid
        container
        columnSpacing={{ md: 4, lg: 5, xl: 6 }}
        rowSpacing={{ xs: 5, md: 0 }}
        direction={{ xs: "column", md: "row" }}
      >
        <Grid container item xs={4}>
          <SingleCard title={CARDS_TITLES.FIRST}>
            Cryptocurrencies, NFT, Metaverse, DAO, E-commerce, Real estate? If
            you are looking for a space where you can find all the information
            in one place and additionally want to exchange knowledge, you've
            come to the right place.
          </SingleCard>
        </Grid>
        <Grid container item xs={4}>
          <SingleCard title={CARDS_TITLES.SECOND}>
            Programming, trading, analysis & research, education, law, UX/UI
            design, marketing or community building? By joining a guild you will
            be able to raise your skills to the next level and share your
            passion with others.
          </SingleCard>
        </Grid>
        <Grid container item xs={4}>
          <SingleCard title={CARDS_TITLES.THIRD}>
            Would you like to find a co-founder, talent to join your team, or
            maybe be up to date with key news and information about interesting
            events? The UNIMIND community is your best choice.
          </SingleCard>
        </Grid>
      </Grid>
    </Content>
  );
};
