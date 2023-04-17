import styled from "styled-components";
import bg03 from "../../../assets/bg-03.svg";

export const StyledBottonSection = styled.section`
  background-color: var(--color-brand-1);
  background-image: url(${bg03});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 568px;
  height: max-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 64px;

  @media (min-width: 500px) {
    min-height: 768px;
  }

  & > h2 {
    font-size: var(--heading-2);
    font-family: var(--font-family-2);
    font-weight: var(--font-weight-1);
    text-align: center;
    color: var(--soft-peach);
    line-height: 0.9;
    width: 92%;
    max-width: 846px;
    margin-top: 112px;
  }
`;
