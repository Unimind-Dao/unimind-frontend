import React from "react";
import { Grid, useTheme } from "@mui/material";

import { Content } from "../../layout/Content";
import { SingleCard } from "./SingleCard";
import { data } from "./data";

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
        {data.map(({ title, description, id }) => (
          <Grid container item key={id} xs={4}>
            <SingleCard title={title}>{description}</SingleCard>
          </Grid>
        ))}
      </Grid>
    </Content>
  );
};
