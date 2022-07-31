import { Card, Paper, styled } from "@mui/material";

export const StyledSingleCard = styled(Card)`
  background-color: ${({ theme }) => theme.palette.common.black};
  padding: 3.5rem 1.5rem;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.05),
      rgba(255, 255, 255, 0.05)
    ),
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.05) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  border-radius: 10px;
  /* height: 100%; */
  ${({ theme }) => theme.breakpoints.up("md")} {
    /* padding-bottom: 0; */
  }
`;
