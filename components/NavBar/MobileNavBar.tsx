import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Menu, MenuItem } from "@mui/material";

import { sectionLink } from "../../data/constants";
import { CustomLink } from "../CustomLink";

export const MobileNavBar = () => {
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
          <CustomLink href={sectionLink.about}>About</CustomLink>
        </MenuItem>
        <MenuItem>
          <CustomLink href={sectionLink.benefits}>Benefits</CustomLink>
        </MenuItem>
        <MenuItem>
          <CustomLink href={sectionLink.team}>Team</CustomLink>
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
