import styled from "styled-components";

export const StyledListItem = styled.li`
  width: 96%;
  max-width: 305px;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;

  & > div {
    width: 40px;
    height: 38px;

    & > img {
      width: 36px;
    }
  }

  & > h4 {
    font-size: var(--headline);
    font-family: var(--font-family-2);
    font-weight: var(--font-weight-1);
    color: var(--color-brand-2);
    text-align: center;
  }

  & > p {
    font-size: var(--body);
    font-family: var(--font-family-1);
    font-weight: var(--font-weight-2);
    color: var(--color-brand-2);
    text-align: center;
  }

  @media (min-width: 1300px) {
    align-items: baseline;

    & > h4,
    & > p {
      text-align: left;
    }
  }
`;
