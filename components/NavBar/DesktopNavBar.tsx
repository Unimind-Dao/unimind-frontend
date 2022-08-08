import React from "react";
import { Toolbar } from "@mui/material";
import { useTranslation } from "next-i18next";

import { CustomLink } from "../CustomLink";
import ConnectWallet from "../Wallet/Connect";

export type NavLinkType = {
  label: string;
  href?: string;
  target?: string;
};

const sx = { padding: "0 1.5rem", color: "white", lineHeight: "24px" };

export const DesktopNavBar = () => {
  const { t } = useTranslation("navigation");

  return (
		<>
			<Toolbar sx={{ display: 'flex', alignItems: 'center' }} component='nav'>
				<CustomLink sx={sx}>About</CustomLink>
				<CustomLink sx={sx}>Benefits</CustomLink>
				<CustomLink sx={sx}>Team</CustomLink>
				<CustomLink sx={sx} href='/blog'>Blog</CustomLink>
				<CustomLink sx={sx} href='https://webtrzy.xyz' target='_blank'>
					Webtrzy.xyz
				</CustomLink>
				<ConnectWallet />
			</Toolbar>
		</>
	);
};
