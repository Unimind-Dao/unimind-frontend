import { Button } from "@mui/material";
import { ReactComponent as LogoSVG } from "../../assets/logo.svg";

export const Logo = () => {
  const handlePageRefresh = () => window.location.reload();

  return (
    <Button onClick={handlePageRefresh}>
      <LogoSVG />
    </Button>
  );
};
