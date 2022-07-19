import React, { useState } from "react";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { CustomLink } from "../CustomLink";

export const MobileNavBar = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        color="secondary"
        aria-label="menu"
        sx={{ mr: 2 }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>
          <CustomLink>About</CustomLink>
        </MenuItem>
        <MenuItem>
          <CustomLink>Benefits</CustomLink>
        </MenuItem>
        <MenuItem>
          <CustomLink>Team</CustomLink>
        </MenuItem>
        <MenuItem>
          <CustomLink href="https://webtrzy.xyz" target="_blank">
            Webtrzy.xyz
          </CustomLink>
        </MenuItem>
      </Menu>
    </div>
  );
};
