import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --color-brand-1: #9B4EF7;
        --color-brand-2: #240506;
        --sable-red: #150202;
        --soft-peach: #F9EAE1;
        --color-black: #000;
        --heading-1: 6.875rem;
        --heading-2: 6.125rem;
        --heading-3: 4rem;
        --headline: 1.125rem;
        --body: 1rem;
        --caption: 0.875rem;
        
        --font-weight-1: 700;
        --font-weight-2: 400;
        --font-weight-3: 300;

        --font-family-1: "Inter", sans-serif;
	    --font-family-2: "Familjen Grotesk", sans-serif;


            @media (max-width: 500px) {
                --heading-1: calc(6.875rem * 0.5);
                --heading-2: calc(6.875rem * 0.5);
                --heading-3: calc(4rem * 0.7);
            }

            @media (min-width: 501px) and (max-width: 650px) {
                --heading-1: calc(6.875rem * 0.7);
                --heading-2: calc(6.875rem * 0.7);
            }
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    button{
        cursor: pointer;
        border: none;
        background: transparent;
    }

    a{
        color: unset;
        text-decoration: none;
        cursor: pointer;
    }

    ul, ol, li{
        list-style: none;
    }

    h1, h2, h3, h4, h5, h6, p, a, span, li, button, input, label{
        font-family: var(--font-family-1);
        transition: 0.5s ease-in-out;
    }

`;
