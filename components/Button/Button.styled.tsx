import { Button, css, styled } from "@mui/material";

import { CustomLink } from "../CustomLink";

const commonButtonStyles = css`
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 30px;
  font-weight: bold;
  width: 100%;
`;

export const StyledLightButton = styled(Button)`
  ${commonButtonStyles};

  background: ${({ theme }) => theme.palette.primary.main};
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.common.black};

  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

export const StyledDarkButton = styled(Button)`
  ${commonButtonStyles};

  background: ${({ theme }) => theme.palette.common.black};
  border: 1px solid ${({ theme }) => theme.palette.common.black};
  color: ${({ theme }) => theme.palette.common.white};

  &:hover {
    color: ${({ theme }) => theme.palette.common.black};
  }
`;

export const StyledCustomLink = styled(CustomLink)`
  display: flex;
  width: 100%;

  /* ${({ theme }) => theme.breakpoints.down("sm")} {
    width: 100%;
    max-width: 205px;
  } */
`;
