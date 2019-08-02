import styled from "styled-components";

export const LocationDetails = styled.div`
    padding: 2rem 1rem 3rem 1rem;

    h2 {
        font-family: "Alfa Slab One", cursive;
        text-transform: uppercase;
        font-size: 9vw;
        margin: 1.5rem 0;
    }

    h2 img {
        height: 9vw;
        padding-bottom: 0.5rem;
    }

    h5 {
        font-size: 4vw;
    }

    p {
        font-size: 3vw;
    }

    .left,
    .right {
        display: flex;
        flex-direction: column;
    }

    .info {
        flex: 1;
    }

    .open-hours {
        max-width: fit-content;
        text-align: right;
    }

    .open-hours img {
        height: 4vw;
    }

    .vertical-line:after {
        content: " | ";
        right: 0;
    }

    .line-breack {
        display: none;
    }

    @media only screen and (min-width: 31rem) {
        .open-hours p {
            font-size: 0.9rem;
        }

        .open-hours img {
            height: 1.3rem;
        }

        .vertical-line:after {
            display: none;
        }

        .line-breack {
            display: block;
        }

        h2 {
            font-size: 3rem;
        }

        h2 img {
            height: 3rem;
            padding-bottom: 0.5rem;
        }

        p {
            font-size: 1rem;
        }

        h5 {
            font-size: 1.25rem;
        }
    }

    @media only screen and (min-width: 48rem) {
        padding: 1rem 5rem 1rem 5rem;
    }
`;
