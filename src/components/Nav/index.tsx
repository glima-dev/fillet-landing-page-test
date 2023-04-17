import { StyledAnchorButton } from "../../styles/Anchors";
import { StyledNav } from "./styles";

interface iNavProps {
  isOpen: boolean;
}

const Nav = ({ isOpen }: iNavProps) => {
  return (
    <StyledNav isOpen={isOpen}>
      <StyledAnchorButton href="#entrar" buttonSize="small" buttonStyle="navBt">
        Entrar
      </StyledAnchorButton>
      <StyledAnchorButton buttonSize="small" buttonStyle="navBt">
        Sobre
      </StyledAnchorButton>
      <StyledAnchorButton buttonSize="small" buttonStyle="navBt">
        Contato
      </StyledAnchorButton>
    </StyledNav>
  );
};

export default Nav;
