import React, { PropsWithChildren } from "react";

import {
  StyledCustomLink,
  StyledLightButton,
  StyledDarkButton,
} from "./Button.styled";

export const Button = ({
  variant = "light",
  children,
}: PropsWithChildren<{
  variant?: "light" | "dark";
}>) => {
  return (
    <StyledCustomLink href="https://discord.gg/uKS4vjG8" target="_blank">
      {variant === "light" ? (
        <StyledLightButton>{children}</StyledLightButton>
      ) : (
        <StyledDarkButton>{children}</StyledDarkButton>
      )}
    </StyledCustomLink>
  );
};
