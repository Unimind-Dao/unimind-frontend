import { Logo } from "../Logo/Logo";
import { NavBar } from "../NavBar/NavBar";

import { StyledHeader } from "./Header.styled";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <NavBar />
    </StyledHeader>
  );
};
