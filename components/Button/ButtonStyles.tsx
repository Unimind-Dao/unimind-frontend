import styled from "styled-components";

export const StyledSolidButton = styled.span`
  color: ${({ theme }) => theme.palette.primary.main};
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 4px;
  font-size: 1rem;
  padding: 0.5rem 2rem;
  font-weight: bold;
  line-height: 24px;

  &:hover {
    color: black;
    background: ${({ theme }) => theme.palette.primary.main};
  }
`;

export const StyledOutlineButton = styled.span`
  ${StyledSolidButton};
  background: none;
`