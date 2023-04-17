import styled from "styled-components";

interface iStyledNavProps {
  isOpen: boolean;
}

export const StyledNav = styled.nav<iStyledNavProps>`
  display: ${({ isOpen }) => (isOpen ? `block` : `none`)};
  width: 100vw;
  height: max-content;
  padding: 16px 8px 36px 8px;
  position: absolute;
  background-color: var(--color-brand-1);
  bottom: -152px;
  right: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  transition: 0.5s ease-in-out;
  animation: ${({ isOpen }) =>
    isOpen
      ? `navInAnimation 0.5s ease-in-out forwards`
      : `navOutAnimation 0.5s ease-in-out forwards`};

  @media (min-width: 500px) {
    animation: none;
    justify-content: space-between;
    flex-direction: row;
    position: static;
    gap: 2px;
    padding: 0;
    width: 296px;
    background-color: transparent;
  }

  @keyframes navInAnimation {
    from {
      transform: translateX(150px);
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes navOutAnimation {
    from {
      opacity: 1;
    }
    to {
      transform: translateX(150px);
      opacity: 0;
    }
  }
`;
