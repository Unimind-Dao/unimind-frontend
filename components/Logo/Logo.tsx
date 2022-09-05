import { Button } from "@mui/material";

import LogoSvg from "../svg/Logo";

export const Logo = () => {
  const handlePageRefresh = () => window.location.reload();

  return (
    <Button aria-label="unimind logo icon" onClick={handlePageRefresh}>
      <LogoSvg />
    </Button>
  );
};
