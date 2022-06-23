import React from "react";

import { Box, BoxProps } from "@mui/material";

export const Content = (props: BoxProps) => {
  const { children, ...rest } = props;

  return (
    <Box py={0} px={{ xs: 4, lg: "190px" }} {...rest}>
      {children}
    </Box>
  );
};
