import { CustomLink } from "../CustomLink";
import { StyledJoinCommunityButton } from "./JoinCommunityButton.styled";

export const JoinCommunityButton = () => {
  return (
    <CustomLink href="https://discord.gg/uKS4vjG8" target="_blank">
      <StyledJoinCommunityButton>Join Community</StyledJoinCommunityButton>
    </CustomLink>
  );
};
