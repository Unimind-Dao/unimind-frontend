import React, { PropsWithChildren } from "react";

import { Box } from "@mui/system";

export const Content = ({ children }: PropsWithChildren) => {
  return (
    <Box py={0} px={{ xs: 4, lg: "190px" }}>
      {children}
    </Box>
  );
};
