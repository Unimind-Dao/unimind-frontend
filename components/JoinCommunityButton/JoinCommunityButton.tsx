import React from "react";

import {
  StyledCustomLink,
  StyledLightJoinCommunityButton,
  StyledDarkJoinCommunityButton,
} from "./JoinCommunityButton.styled";

type JoinCommunityButtonType = {
  variant?: "light" | "dark";
};

const text = "Join Community";

export const JoinCommunityButton = ({
  variant = "light",
}: JoinCommunityButtonType) => {
  return (
    <StyledCustomLink href="https://discord.gg/uKS4vjG8" target="_blank">
      {variant === "light" ? (
        <StyledLightJoinCommunityButton>{text}</StyledLightJoinCommunityButton>
      ) : (
        <StyledDarkJoinCommunityButton>{text}</StyledDarkJoinCommunityButton>
      )}
    </StyledCustomLink>
  );
};
