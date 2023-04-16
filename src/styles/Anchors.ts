import styled, { css } from "styled-components";

interface iStyledAnchorProps {
  buttonSize: string;
  buttonStyle: string;
  buttonPosition?: string;
}
export const StyledAnchorButton = styled.a<iStyledAnchorProps>`
  display: inline-flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 1rem;
  border-radius: 20px;
  transition: 0.4s;

  ${({ buttonSize }) => {
    switch (buttonSize) {
      case "medium":
        return css`
          padding: 0 1.2rem;
          height: 62px;
          width: 196px;
        `;
      case "small":
        return css`
          padding: 0 1rem;
          width: 60%;
          height: 40px;
        `;
    }
  }}

  ${({ buttonStyle }) => {
    switch (buttonStyle) {
      case "default":
        return css`
          background: var(--soft-peach);
          color: var(--color-brand-2);
          font-size: var(--headline);
          font-weight: var(--font-weight-1);

          &:hover {
            filter: brightness(1.5);
          }
        `;

      case "navBt":
        return css`
          background-color: var(--color-brand-1);
          border-radius: 0;
          border-bottom: 2px solid var(--soft-peach);
          color: var(--soft-peach);
          font-size: var(--headline);
          font-family: var(--font-family-2);
          font-weight: var(--font-weight-1);

          &:hover {
            filter: brightness(1.5);
          }

          @media (min-width: 500px) {
            background-color: var(--sable-red);
            color: var(--soft-peach);
            font-size: var(--caption);
            font-weight: var(--font-weight-2);
            font-family: var(--font-family-1);
            border-radius: 30px;
            border: none;
            width: max-content;
          }
        `;
    }
  }}
`;
