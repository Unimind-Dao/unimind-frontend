import { styled } from "@mui/material";

export const StyledHeader = styled("header")`
  background-color: ${({ theme }) => theme.palette.common.black};
  color: ${({ theme }) => theme.palette.common.black};
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
