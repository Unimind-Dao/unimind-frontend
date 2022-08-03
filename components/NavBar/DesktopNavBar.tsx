import React from "react";

import { Toolbar } from "@mui/material";

import { CustomLink } from "../CustomLink";
import ConnectWallet from "../Wallet/Connect";
import { sectionLink, sectionName } from "../../data/constants";

export type NavLinkType = {
  label: string;
  href?: string;
  target?: string;
};

const sx = { padding: "0 1.5rem", color: "white", lineHeight: "24px" };

export const DesktopNavBar = () => {
  return (
    <>
      <Toolbar sx={{ display: "flex", alignItems: "center" }} component="nav">
        <CustomLink href={sectionLink.about} sx={sx}>
          About
        </CustomLink>
        <CustomLink href={sectionLink.benefits} sx={sx}>
          Benefits
        </CustomLink>
        <CustomLink href={sectionLink.team} sx={sx}>
          Team
        </CustomLink>
        <CustomLink sx={sx} href="https://webtrzy.xyz" target="_blank">
          Webtrzy.xyz
        </CustomLink>
        <ConnectWallet />
      </Toolbar>
    </>
  );
};
