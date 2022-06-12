import { NavBar } from "../NavBar/NavBar";
import { StyledHeader } from "./Header.styled";
import { Logo } from "../Logo/Logo";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <NavBar />
    </StyledHeader>
  );
};
