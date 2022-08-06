import { PropsWithChildren } from "react";
import { Grid, Typography, useTheme } from "@mui/material";

import BulbIcon from "../svg/Bulb";
import EyeIcon from "../svg/Eye";
import GemIcon from "../svg/Gem";
import LayersIcon from "../svg/Layers";

import { StyledIconContainer } from "./DrivingSection.styled";

const iconMapper = {
  bulb: <BulbIcon />,
  eye: <EyeIcon />,
  gem: <GemIcon />,
  layers: <LayersIcon />,
};

export type DrivingSectionType = PropsWithChildren<{
  title: string;
  icon: keyof typeof iconMapper;
}>;

export const DrivingSection = ({
  title,
  children,
  icon,
}: DrivingSectionType) => {
  const theme = useTheme();

  return (
    <Grid container direction="column">
      <StyledIconContainer>{iconMapper[icon]}</StyledIconContainer>
      <Typography variant="h3" color={theme.palette.common.white} pb={1} pt={3}>
        {title}
      </Typography>
      <Typography color={theme.palette.common.white}>{children}</Typography>
    </Grid>
  );
};
