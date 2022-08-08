import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/system/Box";

import theme from "../../../../theme/theme";
import { SocialLinks } from "../../../SocialLinks/SocialLinks";

const SocialBox = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: " row",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <SocialLinks />
    </Box>
  );
};

export default SocialBox;
