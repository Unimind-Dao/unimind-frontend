import React, { PropsWithChildren } from "react";

import { Paper, Typography } from "@mui/material";
import { useBreakpoints } from "../../hooks/useBreakpoints";

export const SingleCard = ({
  title = "",
  children = "",
}: PropsWithChildren<{ title: string }>) => {
  const { isMobile } = useBreakpoints();

  return (
    <Paper
      sx={{
        backgroundColor: "black",
        padding: "3.5rem 1.5rem 0",
        background: `linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)`,
        borderRadius: "10px",
        height: "100%",
        paddingBottom: isMobile ? "3.5rem" : "",
      }}
    >
      <Typography fontSize={18} color="#11D2AC" lineHeight="130%" pb={3}>
        {title}
      </Typography>
      <Typography color="white" fontSize={15} lineHeight="130%">
        {children}
      </Typography>
    </Paper>
  );
};
