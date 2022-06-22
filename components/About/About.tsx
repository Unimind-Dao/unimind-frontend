import { Box, Grid } from "@mui/material";

import { Content } from "../../layout/Content";

import { SingleCard } from "./SingleCard";

export const About = () => {
  return (
    <Grid pt={13} pb={13} sx={{ backgroundColor: "#1b1b1b" }}>
      <Content>
        <Grid
          container
          columnSpacing={{ md: 3 }}
          rowSpacing={{ xs: 5, md: 0 }}
          direction={{ xs: "column", md: "row" }}
        >
          <Grid item xs={4} height="100%">
            <SingleCard title="Are you interested or curious in…">
              Cryptocurrencies, NFT, Metaverse, DAO, E-commerce, Real estate? If
              you are looking for a space where you can find all the information
              in one place and additionally want to exchange knowledge, you've
              come to the right place.
            </SingleCard>
          </Grid>
          <Grid item xs={4} height="100%">
            <SingleCard title="Do you want to gain new competences in...">
              Programming, trading, analysis & research, education, law, UX/UI
              design, marketing or community building? By joining a guild you
              will be able to raise your skills to the next level and share your
              passion with others.
            </SingleCard>
          </Grid>
          <Grid item xs={4} height="100%">
            <SingleCard title=" Are you looking for opportunities..">
              Would you like to find a co-founder, talent to join your team, or
              maybe be up to date with key news and information about
              interesting events? The UNIMIND community is your best choice.
            </SingleCard>
          </Grid>
        </Grid>
      </Content>
    </Grid>
  );
};
