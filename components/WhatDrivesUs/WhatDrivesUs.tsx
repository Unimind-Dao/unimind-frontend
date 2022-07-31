import React from "react";
import { useTheme } from "@mui/system";
import { Content } from "../../layout/Content";
import { Grid } from "@mui/material";
import { SectionTitle } from "../SectionTitle";
import { LinearGradient } from "../LinearGradient";
import { DrivingSection } from "../DrivingSection/DrivingSection";

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
        <Grid item flex={1}>
          <DrivingSection title="Knowledge" icon="bulb">
            We only teach facts so that everyone can think for themselves and
            form their own opinion. We draw a line between one and the other.
          </DrivingSection>
        </Grid>
        <Grid item flex={1}>
          <DrivingSection title="Transparency" icon="eye">
            We make our technical solutions available in the open-source formula
            and value direct communication, which is why we keep most
            conversations in public.
          </DrivingSection>
        </Grid>
        <Grid item flex={1}>
          <DrivingSection title="Responsibility " icon="gem">
            We work in a self-organizing way, where everyone can propose their
            own initiative, be responsible for its execution and unite other
            people around it.
          </DrivingSection>
        </Grid>
        <Grid item flex={1}>
          <DrivingSection title="Collaboration" icon="layers">
            We believe in the strength of the community and the benefits of
            belonging to a group. Decide what you want to get involved in and
            grow with us.
          </DrivingSection>
        </Grid>
      </Grid>
    </Content>
  );
};
