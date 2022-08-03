import React, { PropsWithChildren } from "react";

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
    <StyledCustomLink href={href} target="_blank">
      {internalButton}
    </StyledCustomLink>
  ) : (
    internalButton
  );
};
