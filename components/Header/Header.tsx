import { Logo } from "../Logo";
import { NavBar } from "../NavBar";

import { StyledHeader } from "./Header.styled";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <NavBar />
    </StyledHeader>
  );
};
