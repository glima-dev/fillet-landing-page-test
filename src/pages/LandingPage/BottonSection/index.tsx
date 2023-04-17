import { StyledBottonSection } from "./styles";
import { StyledAnchorButton } from "../../../styles/Anchors";

const BottonSection = () => {
  return (
    <StyledBottonSection id="entrar">
      <h2>Entre já no futuro da educação</h2>
      <StyledAnchorButton buttonSize="medium" buttonStyle="default">
        Entrar
      </StyledAnchorButton>
    </StyledBottonSection>
  );
};

export default BottonSection;
