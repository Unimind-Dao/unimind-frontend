import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/system/Box";

import theme from "../../../../theme/theme";
import { SocialLinks } from "../../../SocialLinks/SocialLinks";

const SocialBox = () => {
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: " row",
        justifyContent: "flex-end",
        alignItems: "center",
        color: "white",
        marginRight: matches ? "0" : "100px",
      }}
    >
      <SocialLinks />
    </Box>
  );
};

export default SocialBox;
