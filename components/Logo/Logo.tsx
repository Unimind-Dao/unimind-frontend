import { Button } from "@mui/material";

import LogoSvg from "../svg/Logo";

export const Logo = () => {
  const handlePageRefresh = () => window.location.reload();

  return (
    <Button onClick={handlePageRefresh}>
      <LogoSvg />
    </Button>
  );
};
