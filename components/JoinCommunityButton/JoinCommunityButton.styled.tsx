import { Button, styled } from "@mui/material";
import { CustomLink } from "../CustomLink";

export const StyledJoinCommunityButton = styled(Button)`
  background: ${({ theme }) => theme.palette.primary.main};
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 30px;
  color: ${({ theme }) => theme.palette.common.black};
  font-weight: bold;
  flex: 1 1 100%;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    width: 100%;
  }

  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

export const StyledCustomLink = styled(CustomLink)`
  width: 205px;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    width: 100%;
  }
`;
