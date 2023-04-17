import { StyledInfoCardsSection, StyledInfoList } from "./styles";
import InfoCard from "../InfoCard";
import cardsInfo from "../../../data/data";

const InfoCardsSection = () => {
  return (
    <StyledInfoCardsSection>
      <div className="bgFrame1">
        <div className="bgElips1"></div>
        <div className="bgElips2"></div>
      </div>
      <h2>Feito para todos</h2>
      <StyledInfoList>
        {cardsInfo.map((info, index) => (
          <InfoCard key={index} {...info} />
        ))}
      </StyledInfoList>
    </StyledInfoCardsSection>
  );
};

export default InfoCardsSection;
