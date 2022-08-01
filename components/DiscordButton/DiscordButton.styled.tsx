import { Button, styled } from "@mui/material";

export const StyledButton = styled(Button)`
  color: ${({ theme }) => theme.palette.primary.main};
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 4px;
  font-size: 1rem;
  padding: 0.5rem 2rem;
  font-weight: bold;
  line-height: 24px;

  &:hover {
    color: ${({ theme }) => theme.palette.common.black};
    background: ${({ theme }) => theme.palette.primary.main};
  }
`;
