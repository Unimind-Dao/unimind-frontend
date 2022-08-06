import { Hidden } from "@mui/material";

import { DesktopNavBar } from "./DesktopNavBar";
import { MobileNavBar } from "./MobileNavBar";

export type NavLinkType = {
  label: string;
  href?: string;
  target?: string;
};

export const NavBar = () => {
  return (
    <>
      <Hidden mdDown>
        <DesktopNavBar />
      </Hidden>
      <Hidden mdUp>
        <MobileNavBar />
      </Hidden>
    </>
  );
};
