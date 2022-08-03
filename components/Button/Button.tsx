import React, { PropsWithChildren } from "react";
import { CustomLink } from "../CustomLink";

import {
  StyledCustomLink,
  StyledLightButton,
  StyledDarkButton,
} from "./Button.styled";

export const Button = ({
  variant = "light",
  children,
  href = "",
}: PropsWithChildren<{
  variant?: "light" | "dark";
  href?: string;
}>) => {
  const internalButton =
    variant === "light" ? (
      <StyledLightButton>{children}</StyledLightButton>
    ) : (
      <StyledDarkButton>{children}</StyledDarkButton>
    );

  return href ? (
    <CustomLink href={href} target="_blank">
      {internalButton}
    </CustomLink>
  ) : (
    internalButton
  );
};
