import styled from "styled-components";
import tableIcon from "../img/table_icon.png";

export const Styles = styled.section`
    padding: 2rem 1rem 5rem 1rem;
    position: relative;
    background: ${props => props.theme.ourMenuBackground};
    color: ${props => props.theme.ourMenuDefaultColor};

    .hide-mobile {
        display: none;
    }

    .hr {
        display: flex;
        align-items: center;
    }

    hr {
        display: inline-block;
        width: 100%;
        border-top: 1px solid rgba(255, 255, 255, 0.3);
        margin-left: 0.5rem;
    }

    .hr-name {
        text-transform: uppercase;
        min-width: fit-content;
        color: ${props => props.theme.ourMenuSecondaryColor};
        font-size: 2vw;
    }

    p {
        font-size: 3vw;
    }

    h2 {
        font-family: "Alfa Slab One", cursive;
        font-size: 9vw;
        margin: 0;
    }

    h2 img {
        height: 9vw;
        padding-bottom: 0.5rem;
    }

    h3 {
        font-family: "Alfa Slab One", cursive;
        font-size: 5vw;
        margin: 0;
        color: ${props => props.theme.ourMenuSecondaryColor};
    }

    h3 img {
        height: 11vw;
        padding-bottom: 0.5rem;
    }

    h2,
    h3 {
        text-transform: uppercase;
    }

    h4 {
        font-size: 4vw;
    }

    .circle {
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${props => props.theme.ourMenuDefaultColor};
        width: 2rem;
        height: 2rem;
        border-radius: 100%;
        color: #000;
    }

    .selected {
        background: ${props => props.theme.ourMenuSecondaryColor};
        color: ${props => props.theme.ourMenuPriceBackground};
    }

    .view-more {
        cursor: pointer;
        position: relative;
        display: inline-block;
        text-align: center;
        background: rgba(255, 255, 255, 0.3);
        width: 100%;
    }

    .view-more:after {
        content: "";
        position: absolute;
        left: calc(50% - 10px);
        top: 100%;
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 10px solid rgba(255, 255, 255, 0.3);
    }

    @media only screen and (min-width: 31rem) {
        &&:after {
            content: "";
            position: absolute;
            background: url(${tableIcon}) no-repeat;
            background-size: contain;
            height: 2rem;
            width: 3rem;
            bottom: 0;
            left: calc(50% - 1.5rem);
        }

        .hr-name {
            font-size: 0.7rem;
        }

        h2 {
            font-size: 3rem;
        }

        h3 {
            font-size: 1.75rem;
        }

        h3 img {
            height: 4rem;
            padding-bottom: 0.5rem;
        }
        h4 {
            font-size: 1.5rem;
        }
        h2 img {
            height: 3rem;
            padding-bottom: 0.5rem;
        }

        p {
            font-size: 1rem;
        }
    }

    @media only screen and (min-width: 48rem) {
        padding: 1rem 5rem 5rem 5rem;
        .view-more {
            width: fit-content;
            padding: 0 0.5rem;
        }
    }

    @media only screen and (min-width: 62rem) {
        .hide-mobile {
            display: block;
        }
    }
`;
