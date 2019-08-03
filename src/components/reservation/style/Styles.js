import styled from "styled-components";

export const Styles = styled.section`
    background: #222;
    color: #fff;
    padding: 3rem 1rem 0 1rem;

    h2 {
        font-family: "Alfa Slab One", cursive;
        text-transform: uppercase;
        font-size: 8vw;
        margin: 0;
    }

    h2 img {
        height: 9vw;
        padding-bottom: 0.5rem;
    }
    .inputs-container {
        display: flex;
        flex-direction: column;
        padding-top: 2rem;
        margin: 0 auto;
        max-width: 30rem;
    }

    .input-group {
        max-width: 30rem;
        padding: 0.2rem;
    }

    button {
        margin-top: 0.2rem;
        width: 100%;
        height: 2.5rem;
        border-radius: 0.4rem;
        outline: none;
        border: none;
        text-transform: uppercase;
        color: #000;
        background: ${props => props.theme.textColor};
        font-weight: 900;
    }

    @media only screen and (min-width: 31rem) {
        h2 {
            font-size: 3rem;
        }

        h2 img {
            height: 3rem;
            padding-bottom: 0.5rem;
        }
    }
    @media only screen and (min-width: 48rem) {
        padding: 3rem 5rem 0 5rem;
    }
`;
