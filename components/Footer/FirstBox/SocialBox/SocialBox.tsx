import Box from "@mui/system/Box";

import { SocialLinks } from "../../../SocialLinks";

const SocialBox = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: " row",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        marginTop: "1rem"
      }}
    >
      <SocialLinks />
    </Box>
  );
};

export default SocialBox;
