import { PropsWithChildren } from "react";

import { Card, CardContent, Typography } from "@mui/material";

export const SingleCard = ({
  title = "",
  children = "",
}: PropsWithChildren<{ title: string }>) => {
  return (
    <Card
      sx={{
        backgroundColor: "black",
        padding: "3.5rem 1.5rem",
        background: `linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)`,
        backdropFilter: "blur(40px)",
        /* Note: backdrop-filter has minimal browser support */
        borderRadius: "10px",
      }}
    >
      <CardContent sx={{ padding: 0 }}>
        <Typography fontSize={18} color="#11D2AC" lineHeight="130%" pb={3}>
          {title}
        </Typography>
        <Typography color="white" fontSize={15} lineHeight="130%">
          {children}
        </Typography>
      </CardContent>
    </Card>
  );
};
