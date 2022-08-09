import React from "react";
import { Toolbar } from "@mui/material";
import { useTranslation } from "next-i18next";

import { sectionLink, sectionName } from "../../data/constants";
import { CustomLink } from "../CustomLink";
import ConnectWallet from "../Wallet/Connect";

export type NavLinkType = {
  label: string;
  href?: string;
  target?: string;
};

const sx = {
  padding: "0 1.5rem",
  color: "white",
  lineHeight: "24px",
  position: "fixed",
  
};

export const DesktopNavBar = () => {
  const { t } = useTranslation("navigation");

  return (
    <>
      <Toolbar sx={{ display: "flex", alignItems: "center", zIndex: "1",}} component="nav">
        <CustomLink sx={sx}>{t("about")}</CustomLink>
        <CustomLink sx={sx}>{t("benefits")}</CustomLink>
        <CustomLink sx={sx}>{t("team")}</CustomLink>
        <CustomLink sx={sx} href="https://webtrzy.xyz" target="_blank">
          {t("webtrzy")}
        </CustomLink>
        <ConnectWallet />
      </Toolbar>
    </>
  );
};
