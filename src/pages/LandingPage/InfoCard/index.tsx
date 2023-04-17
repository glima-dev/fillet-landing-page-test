import { StyledListItem } from "./styles";
import { iCardsInfoProps } from "../../../data/@types";

const InfoCard = (props: iCardsInfoProps) => {
  const { imagePath, title, description } = props;

  return (
    <StyledListItem>
      <div>
        <img src={imagePath} alt="" />
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
    </StyledListItem>
  );
};

export default InfoCard;
