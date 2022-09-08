import { Box } from "@mui/material";
import Image from "next/image";

import scio from "../../public/partners-logos/scio.jpg";
import swiatweb3 from "../../public/partners-logos/swiatweb3.png";
import web3devs from "../../public/partners-logos/web3devs.jpg";
import webtrzy from "../../public/partners-logos/webtrzy.png";

const sx = {
  display: "flex",
  flexWrap: "wrap",
  height: "auto",
  margin: "auto",
  alignItems: "center",
  justifyContent: "center",
};

const PartnersLogo = () => {
  return (
    <>
      <Box sx={sx}>
        <Box sx={{ margin: "20px" }}>
          <Image src={swiatweb3} alt="swiatweb3" width="300" height="64" />
        </Box>
        <Box sx={{ margin: "20px" }}>
          <Image src={scio} alt="scio" width="200" height="200" />
        </Box>
        <Box sx={{ margin: "20px" }}>
          <Image src={web3devs} alt="web3devs" width="200" height="200" />
        </Box>
        <Box sx={{ margin: "20px" }}>
          <Image src={webtrzy} alt="webtrzy" width="300" height="50" />
        </Box>
      </Box>
    </>
  );
};

export default PartnersLogo;
