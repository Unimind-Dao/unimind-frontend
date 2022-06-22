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
