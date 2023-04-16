import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: var(--soft-peac);
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 500px) {
    height: 81px;
  }

  & > span {
    font-size: var(--caption);
    font-weight: var(--font-weight-3);
    text-align: center;
    color: var(--color-black);
  }
`;
