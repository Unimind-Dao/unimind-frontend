import React from "react";

import { CustomLink } from "../CustomLink";
import {
  StyledCustomLink,
  StyledJoinCommunityButton,
} from "./JoinCommunityButton.styled";

export const JoinCommunityButton = () => {
  return (
    <StyledCustomLink href="https://discord.gg/uKS4vjG8" target="_blank">
      <StyledJoinCommunityButton>Join Community</StyledJoinCommunityButton>
    </StyledCustomLink>
  );
};
