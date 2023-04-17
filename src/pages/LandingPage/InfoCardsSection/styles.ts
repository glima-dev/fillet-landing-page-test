import styled from "styled-components";
import bgFrame01 from "../../../assets/quadro-1.svg";
import ellipse1 from "../../../assets/ellipse1.svg";
import ellipse2 from "../../../assets/ellipse2.svg";

export const StyledInfoCardsSection = styled.section`
  background-color: var(--soft-peach);
  min-height: 768px;
  height: max-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 114px;
  padding-bottom: 112px;

  & > h2 {
    font-size: var(--heading-1);
    font-family: var(--font-family-2);
    font-weight: var(--font-weight-1);
    text-align: center;
    color: var(--color-brand-2);
    line-height: 0.9;
    margin-top: 108px;
    position: relative;
    z-index: 3;
    width: 77%;
    max-width: 726px;

    @media (min-width: 1300px) {
      margin-top: 160px;
    }
  }

  & .bgFrame1 {
    background-image: url(${bgFrame01});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    height: 60%;
    max-height: 300px;
    width: 100%;

    & .bgElips1 {
      background-image: url(${ellipse1});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      position: absolute;
      top: -10%;
      left: 40%;
      z-index: 2;
      height: 75vh;
      width: 60vw;
      max-width: 420px;
    }

    & .bgElips2 {
      background-image: url(${ellipse2});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      position: absolute;
      top: -92%;
      left: -10%;
      z-index: 2;
      height: 75vh;
      width: 60vw;
      max-width: 420px;
    }
  }

  @media (min-width: 500px) {
    & .bgFrame1 > .bgElips1 {
      top: 10%;
    }
  }

  @media (min-width: 651px) {
    & .bgFrame1 > .bgElips1 {
      top: 22%;
    }
  }

  @media (min-width: 1300px) {
    & .bgFrame1 {
      max-height: 60%;
      max-width: 1460px;
      left: 50%;
      transform: translateX(-50%);

      & .bgElips1 {
        top: -20%;
        left: 63%;
      }

      & .bgElips2 {
        top: -56%;
        left: 6%;
      }
    }
  }
`;

export const StyledInfoList = styled.ul`
  width: max-content;
  display: grid;
  grid-template-columns: repeat(1, 310px);
  margin: 80px auto 0;
  gap: 56px;
  transition: 0.5s ease-in-out;

  @media (min-width: 650px) {
    grid-template-columns: repeat(2, 305px);
    gap: 32px 20px;
  }

  @media (min-width: 1300px) {
    margin: 80 auto;
  }

  @media (min-width: 1300px) {
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
  }
`;
