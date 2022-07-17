import React from "react";

import { CustomLink } from "../CustomLink";
import { StyledButton } from "./DiscordButton.styled";

export const DiscordButton = () => {
  return (
    <CustomLink
      href="https://discord.gg/uKS4vjG8"
      pl={2}
      sx={{ lineHeight: "24px" }}
      target="_blank"
    >
      <StyledButton>Discord</StyledButton>
    </CustomLink>
  );
};
