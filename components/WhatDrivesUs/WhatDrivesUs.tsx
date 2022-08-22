import { Grid } from "@mui/material";
import { useTheme } from "@mui/system";
import { useTranslation } from "next-i18next";

import { Content } from "@/layout/Content";

import { DrivingSection } from "../DrivingSection/DrivingSection";
import { LinearGradient } from "../LinearGradient";
import { SectionTitle } from "../SectionTitle";

import { data } from "./data";

export const WhatDrivesUs = () => {
  const theme = useTheme();
  const { t } = useTranslation("what-drives-us");

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
          {t("header")}
        </SectionTitle>
        <LinearGradient shade="light" />
      </Grid>
      <Grid
        container
        direction={{ xs: "column", md: "row" }}
        rowSpacing={{ xs: 8, md: 0 }}
        columnSpacing={{ md: 8 }}
      >
        {data.map(({ motivation, icon }) => {
          return (
            <Grid key={motivation} item flex={1}>
              <DrivingSection title={t(`${motivation}.title`)} icon={icon}>
                <>{t(`${motivation}.description`)}</>
              </DrivingSection>
            </Grid>
          );
        })}
      </Grid>
    </Content>
  );
};
