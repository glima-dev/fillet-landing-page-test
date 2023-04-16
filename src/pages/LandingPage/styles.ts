import styled from "styled-components";
import bg01 from "../../assets/bg-01.svg";
import bg02 from "../../assets/bg-02.svg";

export const StyledBackGround = styled.div`
  min-height: 100vh;
  width: 100%;

  & > div {
    background-color: var(--color-brand-1);
    background-image: url(${bg01});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    min-height: 768px;
    height: max-content;
    width: 100%;
  }

  & > main {
    width: 100%;
    height: max-content;

    & > section:first-child {
      background-image: url(${bg02});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: right;
      min-height: 768px;
      height: max-content;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    @media (min-width: 500px) {
      & > section:first-child {
        align-items: baseline;
      }
    }
  }
`;
