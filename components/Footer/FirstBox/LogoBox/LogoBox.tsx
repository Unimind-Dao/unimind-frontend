import Box from "@mui/system/Box";

import LogoSvg from "../../../svg/Logo";

export default function LogoBox() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          color: "white",
          ml: "5%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <LogoSvg />
        </Box>
        <p style={{ fontSize: "15px" }}>Be where the change happens</p>
      </Box>
    </>
  );
}
