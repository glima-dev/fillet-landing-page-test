import styled from "styled-components";

export const StyledTopMainSectionContent = styled.div`
  width: 92%;
  max-width: 413px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;

  & > h2 {
    font-size: var(--heading-3);
    font-family: var(--font-family-2);
    font-weight: var(--font-weight-1);
    text-align: center;
    color: var(--soft-peach);
    line-height: 0.9;
  }

  & > p {
    font-size: var(--body);
    font-weight: var(--font-weight-2);
    text-align: center;
    color: var(--soft-peach);
    line-height: 1.2;
    max-width: 413px;
  }

  @media (min-width: 500px) {
    margin-left: 81px;

    & > h2,
    & > p {
      text-align: left;
    }
  }
`;
