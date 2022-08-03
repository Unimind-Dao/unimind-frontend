import React from "react";
import { Content } from "../../layout/Content";
import { Grid, useTheme } from "@mui/material";
import { SectionTitle } from "../SectionTitle";
import { LinearGradient } from "../LinearGradient";
import { DrivingSection } from "../DrivingSection/DrivingSection";
import { data } from "./data";

export const WhatDrivesUs = () => {
  const theme = useTheme();

  return (
    <Content
      pt={12}
      pb={{ xs: 11, md: 16 }}
      sx={{ backgroundColor: theme.palette.common.black }}
    >
      <Grid
        item
        container
        direction="column"
        alignItems={{ xs: "start", md: "center" }}
        mb={8}
      >
        <SectionTitle color={theme.palette.common.white} mb={2}>
          What drives us
        </SectionTitle>
        <LinearGradient shade="light" />
      </Grid>
      <Grid
        container
        direction={{ xs: "column", md: "row" }}
        rowSpacing={{ xs: 8, md: 0 }}
        columnSpacing={{ md: 8 }}
      >
        {data.map(({ title, icon, description }) => (
          <Grid item flex={1} key={title}>
            <DrivingSection title={title} icon={icon}>
              {description}
            </DrivingSection>
          </Grid>
        ))}
      </Grid>
    </Content>
  );
};
