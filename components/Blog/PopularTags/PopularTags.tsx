import React from "react";
import { Box, Typography } from "@mui/material";

import Tags from "./Tags";

const PopularTags = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Typography variant="h3" sx={{ marginRight: "30px" }}>
        Popular Tags
      </Typography>
      <Tags></Tags>
    </Box>
  );
};

export default PopularTags;
