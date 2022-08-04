import Box from "@mui/system/Box";
import React from "react";
import LogoBox from "./LogoBox/LogoBox";
import SocialBox from "./SocialBox/SocialBox";

export default function FirstBox() {
  const sx = {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
  };

  return (
    <>
      <Box sx={sx}>
        <LogoBox />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
          color: "white",
        }}
      >
        <SocialBox />
      </Box>
    </>
  );
}
