import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  padding: 68px 0;
  position: relative;

  @media (min-width: 500px) {
    padding: 68px 48px;
  }

  & > div {
    height: 100%;
    width: 92%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    @media (min-width: 500px) {
      width: 100%;
    }

    & > img {
      width: 123px;
      margin-left: 0;

      @media (min-width: 500px) {
        margin-left: 62px;
      }
    }

    & > button {
      width: max-content;
      height: max-content;
      color: var(--soft-peach);
      font-size: 2rem;
      transition: all 10s ease;

      @media (min-width: 500px) {
        display: none;
      }
    }

    & > button > span {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      transition: transform 0.5s ease-in-out;
      transform: rotate(0deg);
      width: 3rem;
      height: 3rem;
    }

    & > button > span.menu {
      transform: rotate(0deg);
    }

    & > button > span.close {
      transform: rotate(180deg);
    }
  }
`;
