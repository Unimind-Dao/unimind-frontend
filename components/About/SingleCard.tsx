import React, { PropsWithChildren } from "react";

import { Typography, useTheme } from "@mui/material";
import { StyledSingleCard } from "./SingleCard.styled";

export const SingleCard = ({
  title = "",
  children = "",
}: PropsWithChildren<{ title: string }>) => {
  const theme = useTheme();

  return (
    <StyledSingleCard>
      <Typography
        color={theme.palette.primary.main}
        fontSize={18}
        lineHeight="130%"
        pb={3}
      >
        {title}
      </Typography>
      <Typography
        color={theme.palette.secondary.main}
        fontSize={15}
        lineHeight="130%"
      >
        {children}
      </Typography>
    </StyledSingleCard>
  );
};
