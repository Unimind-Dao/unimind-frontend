import { Button, styled } from "@mui/material";

export const StyledJoinCommunityButton = styled(Button)`
  background: #11d2ac;
  border: 1px solid #11d2ac;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 30px;
  color: black;
  font-weight: bold;

  &:hover {
    color: #11d2ac;
    border: 1px solid #11d2ac;
  }
`;
