import React from "react";
import { Grid, useTheme } from "@mui/material";
import { useTranslation } from "next-i18next";

import { Content } from "../../layout/Content";
import { SingleCard } from "./SingleCard";
import about from "../../public/locales/en/about.json";

export const About = () => {
  const theme = useTheme();
  const { t } = useTranslation("about");

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
        {Object.keys(about).map((card) => (
          <Grid container item xs={4}>
            <SingleCard
              title={
                <>
                  {t(`${card}.title_1`)} <br /> {t(`${card}.title_2`)}
                </>
              }
            >
              {t(`${card}.description`)}
            </SingleCard>
          </Grid>
        ))}
      </Grid>
    </Content>
  );
};
