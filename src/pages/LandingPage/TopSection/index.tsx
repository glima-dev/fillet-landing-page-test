import { StyledTopSection } from "./styles";
import { StyledAnchorButton } from "../../../styles/Anchors";

const TopSection = () => {
  return (
    <StyledTopSection>
      <h1>Transforme seus estudos</h1>
      <p>
        Conheça já o futuro da educação imersiva, esse é o Literaverso, uma
        plataforma única de conteúdo interativo com seu próprio metaverso.
      </p>
      <StyledAnchorButton buttonSize="medium" buttonStyle="default">
        Saiba mais
      </StyledAnchorButton>
    </StyledTopSection>
  );
};

export default TopSection;
