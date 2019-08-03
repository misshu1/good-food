import styled from "styled-components";

export const Styles = styled.section`
    padding: 1rem;
    width: 100%;

    h2 {
        font-family: "Alfa Slab One", cursive;
        text-transform: uppercase;
        font-size: 8vw;
        margin: 3rem 0;
    }

    h2 img {
        height: 9vw;
        padding-bottom: 0.5rem;
    }

    img {
        border-radius: 100%;
        height: 15rem;
    }

    h5 {
        margin: 2rem 0;
        text-align: center;
        font-size: 4vw;
    }

    p {
        font-style: italic;
        font-size: 3vw;
    }

    p::before {
        content: "“";
        left: 0;
        font-size: 2rem;
        line-height: 0.2;
    }
    p::after {
        content: "”";
        left: 0;
        font-size: 2rem;
        line-height: 0.2;
    }

    .team-container {
        display: grid;
        grid-template-columns: repeat(4, minmax(15rem, 1fr));
        grid-gap: 1rem;
        scroll-snap-type: x mandatory;
        overflow-x: scroll;
    }

    .team-container div {
        scroll-snap-align: center;
        width: 15rem;
    }

    @media only screen and (min-width: 31rem) {
        h2 {
            font-size: 2.5rem;
        }

        h2 img {
            height: 3rem;
            padding-bottom: 0.5rem;
        }
        h5 {
            font-size: 1.25rem;
        }

        p {
            font-size: 1rem;
        }
    }
    @media only screen and (min-width: 48rem) {
        h2 {
            padding: 0 5rem 0 5rem;
        }
    }
`;
