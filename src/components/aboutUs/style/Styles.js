import styled, { css, keyframes } from "styled-components";
import iconRed from "../img/icon_red.svg";
import iconGreen from "../img/icon_green.svg";

const fadeIn = keyframes`
0% {
    transform: scale3d(.7, .7, .7);
}
100% {
    opacity: 1;
    transform: scale3d(1, 1, 1);

}
`;

const slideUp = keyframes`
0% {
    transform: translate3d(0, -10rem, 0);
}
100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
}
`;

const slideDown = keyframes`
0% {
    transform: translate3d(0, 10rem, 0);
}
100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
}
`;

export const Styles = styled.section`
    z-index: -2;
    padding: 2rem 1rem 3rem 1rem;
    position: relative;

    .about-title {
        width: fit-content;
        opacity: 0;
        animation: ${fadeIn} 0.3s ease-out forwards;
        animation-delay: 0.7s;
    }
    .left-text {
        opacity: 0;
        animation: ${slideDown} 0.5s ease-out forwards;
        animation-delay: 0.9s;
    }

    .right-text {
        opacity: 0;
        animation: ${slideUp} 0.5s ease-out forwards;
        animation-delay: 0.9s;
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

    h5 {
        font-size: 4vw;
    }

    .subtitle {
        line-height: 0.5;
        margin-bottom: 2rem;
    }

    @media only screen and (min-width: 31rem) {
        &&:after {
            content: "";
            position: absolute;
            ${props =>
                props.themeColor === "red" &&
                css`
                    background: url(${iconRed}) no-repeat;
                `};
            ${props =>
                props.themeColor === "green" &&
                css`
                    background: url(${iconGreen}) no-repeat;
                `};
            background-size: contain;
            height: 3rem;
            width: 4rem;
            bottom: 0;
            left: calc(50% - 2rem);
        }

        h2 {
            font-size: 3rem;
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
        padding: 1rem 5rem 3rem 5rem;
    }
`;
