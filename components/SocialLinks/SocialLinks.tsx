import React from "react";
import { Grid, GridProps } from "@mui/material";

import { CustomLink } from "../CustomLink";

import { data } from "./data";

export const SocialLinks = (props: GridProps) => {
  return (
    <Grid container columnSpacing={4} {...props}>
      {data.map(({ id, href, icon }) => (
        <Grid item key={id}>
          <CustomLink href={href} target="_blank">
            {icon}
          </CustomLink>
        </Grid>
      ))}
    </Grid>
  );
};
