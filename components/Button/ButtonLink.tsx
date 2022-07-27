import React, { ReactNode } from "react";
import { CustomLink } from "../CustomLink";
import { StyledSolidButton } from "./ButtonStyles";

interface Props {
  children?: ReactNode,
  url?: string
}

export const ButtonLink = ({ children, url }: Props) => {
  return (
    <CustomLink
      // href="https://discord.gg/uKS4vjG8"
      href={url}
      pl={2}
      sx={{ lineHeight: "24px" }}
      target="_blank"
    >
      <StyledSolidButton>{children}</StyledSolidButton>
    </CustomLink>
  );
};
