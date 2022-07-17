import { Button, styled } from "@mui/material";

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

  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;
