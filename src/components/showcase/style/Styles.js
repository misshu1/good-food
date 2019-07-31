import styled, { keyframes } from "styled-components";
import bg from "../img/pic.jpg";
import thread from "../img/thread.png";

const fadeIn = keyframes`
0% {
    transform: scale3d(.7, .7, .7) translate3d(-5rem, -5rem, 0);
}
100% {
    opacity: 1;
    transform: scale3d(1, 1, 1) translate3d(0, 0, 0);
}
`;

const slideFromLeftThread = keyframes`
0% {
    background-position: 0 0;
}
100% {
    background-position: 100% 0;
}
`;

const slideFromRight = keyframes`
0% {
    transform: translate3d(-10vw, 0, 0);
}
100% {
    transform:  translate3d(0, 0, 0);
}
`;

export const Styles = styled.section`
    position: relative;
    background: url(${bg}) no-repeat;
    background-size: cover;
    background-position: center;
    height: 20rem;
    padding: 1rem;
    text-transform: uppercase;

    .text h2,
    p {
        background: ${props => props.theme.showcaseBackground};
        margin: 0;
        width: fit-content;
        font-weight: 700;
        padding: 0 0.5rem;
    }

    .text h2 {
        font-size: 6vw;
        color: ${props => props.theme.showcaseHeaderColor};
    }

    .text p {
        color: ${props => props.theme.showcaseTextColor};
    }
    .text {
        opacity: 0;
        animation: ${fadeIn} 0.5s ease-out forwards;
        animation-delay: 0.2s;
    }

    .wrapper > span,
    p {
        font-size: 3vw;
    }

    .wrapper > span h3 {
        font-size: 5vw;
        color: ${props => props.theme.showcaseTextColor};
    }

    .wrapper > span {
        color: ${props => props.theme.showcaseHeaderColor};
    }

    .wrapper:before {
        content: "";
        position: absolute;
        background: url(${thread}) repeat-x;
        height: 0.5rem;
        width: 100%;
        left: 0;
        bottom: 7rem;
        animation: ${slideFromLeftThread} 1s ease-out forwards;
    }

    .wrapper > span {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        background: ${props => props.theme.showcaseBackground};
        min-height: 7.5rem;
        height: fit-content;
        padding: 1rem;
        width: fit-content;
        right: 10%;
        bottom: -0.8rem;
        font-weight: 500;
        box-shadow: 0px 8px 5px 1px rgba(0, 0, 0, 0.15);
        animation: ${slideFromRight} 1s ease-out forwards;
    }

    .wrapper > span:after {
        content: "";
        position: absolute;
        background: #343a40;
        border-radius: 0.3rem;
        height: 2rem;
        width: 1.2rem;
        right: 10%;
        top: -1rem;
        box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.5);
    }

    .wrapper > span:before {
        content: "";
        position: absolute;
        background: #343a40;
        border-radius: 0.3rem;
        height: 2rem;
        width: 1.2rem;
        left: 10%;
        top: -1rem;
        box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.5);
    }

    .wrapper > span h3 {
        font-weight: 700;
        text-align: center;
    }

    @media only screen and (min-width: 31rem) {
        .text h2 {
            font-size: 2rem;
        }

        .wrapper > span,
        p {
            font-size: 1rem;
        }

        .wrapper > span h3 {
            font-size: 1.75rem;
        }
    }

    @media only screen and (min-width: 48rem) {
        padding: 5rem;
        height: 30rem;

        .text h2 {
            font-size: 2rem;
        }

        .text p {
            font-size: 1rem;
        }
    }

    @media only screen and (min-width: 75rem) {
        height: 35rem;
    }
`;
