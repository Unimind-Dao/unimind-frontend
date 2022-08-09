import Box from "@mui/system/Box";

import LogoBox from "./LogoBox/LogoBox";
import SocialBox from "./SocialBox/SocialBox";

export default function FirstBox() {
  const sx = {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    marginLeft: "0"
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
          justifyContent: "center",
          alignItems: "center",
          color: "white"
        }}
      >
        <SocialBox />
      </Box>
    </>
  );
}
