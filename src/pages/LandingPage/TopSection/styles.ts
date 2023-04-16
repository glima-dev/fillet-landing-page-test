import styled from "styled-components";

export const StyledTopSection = styled.section`
  width: 92%;
  max-width: 800px;
  margin: 112px auto 0;
  min-height: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;

  @media (min-width: 500px) {
    margin-top: 132px;
  }

  & > h1 {
    font-size: var(--heading-1);
    font-family: var(--font-family-2);
    font-weight: var(--font-weight-1);
    text-align: center;
    color: var(--soft-peach);
    line-height: 0.8;
  }

  & > p {
    font-size: var(--caption);
    font-weight: var(--font-weight-2);
    text-align: center;
    color: var(--soft-peach);
    line-height: 1.2;
    max-width: 414px;
  }
`;
