import styled from "styled-components";

export const LocationTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem;
    background: #000;

    h2 {
        font-family: "Alfa Slab One", cursive;
        font-size: 4.5vw;
        text-transform: uppercase;
        color: #fff;
        width: 100%;
        margin: 0;
        text-align: center;
    }

    .button div {
        cursor: pointer;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        padding: 0.5rem 1rem;
        color: #000;
        background: ${props => props.theme.locationBackground};
        border-radius: 5px;
    }

    .button div h5 {
        text-transform: uppercase;
        margin: 0;
        font-size: 4vw;
    }

    .button div p {
        margin: 0;
        line-height: 1;
        font-size: 3vw;
    }

    @media only screen and (min-width: 31rem) {
        .button div p {
            font-size: 1rem;
        }
        .button div h5 {
            font-size: 1.25rem;
        }
    }

    @media only screen and (min-width: 36rem) {
        h2 {
            font-size: 1.75rem;
        }
    }

    @media only screen and (min-width: 48rem) {
        flex-direction: row;
        justify-content: space-between;
        padding: 2rem 5rem;

        h2 {
            font-size: 2rem;
            width: 50%;
        }

        .button {
            width: 50%;
        }

        .button div {
            margin: 0 auto;
            width: fit-content;
        }
    }

    @media only screen and (min-width: 75rem) {
        h2 {
            width: 40%;
        }
    }
`;
