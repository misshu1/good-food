import styled, { keyframes } from "styled-components";

const hideLoading = keyframes`
0% {
    opacity: 1;
}
80% {
    opacity: 1;
}
99% {
    opacity: 0;
    z-index: 20;
}
100% {
    opacity: 0;
    z-index: -500;
}
`;

const slideInPlaceTopLeft = keyframes`
0% {
    transform: translate3d(calc(50vw - 70px), calc(50vh - 32px), 0);
}
50% {
    transform: translate3d(calc(50vw - 70px), calc(50vh - 32px), 0);
}
100% {
    transform: translate3d(0);
}
`;

const slideInPlaceTopRight = keyframes`
0% {
    transform: translate3d(calc(50vw - 70px), calc(50vh - 32px), 0);
}
50% {
    transform: translate3d(calc(50vw - 70px), calc(50vh - 32px), 0);
}
100% {
    transform: translate3d(calc(100vw - 200px),0, 0);
}
`;

const slideInPlaceBottomLeft = keyframes`
0% {
    transform: translate3d(calc(50vw - 70px), calc(50vh - 32px), 0);
}
50% {
    transform: translate3d(calc(50vw - 70px), calc(50vh - 32px), 0);
}
100% {
    transform: translate3d(0, calc(100vh - 32px), 0);
}
`;

const slideInPlaceBottomRight = keyframes`
0% {
    transform: translate3d(calc(50vw - 70px), calc(50vh - 32px), 0);
}
50% {
    transform: translate3d(calc(50vw - 70px), calc(50vh - 32px), 0);
}
100% {
    transform: translate3d(calc(100vw - 200px), calc(100vh - 32px), 0);
}
`;

const showText = keyframes`
0% {
    opacity:0;
}
80% {

    opacity:0;
}
100% {
    opacity:1;
}
`;

export const Styles = styled.section`
    position: absolute;
    background: #000;
    z-index: 20;
    width: 100%;
    height: 100vh;
    font-size: 1.25rem;
    white-space: nowrap;
    overflow: hidden;
    animation: ${hideLoading} 3.2s ease forwards;

    .container1 {
        position: absolute;
        margin: 0;
        animation: ${slideInPlaceTopLeft} 3s ease forwards;
    }

    .container2 {
        position: absolute;
        margin: 0;
        animation: ${slideInPlaceTopRight} 3s ease forwards;
    }

    .container3 {
        position: absolute;
        margin: 0;
        animation: ${slideInPlaceBottomLeft} 3s ease forwards;
    }

    .container4 {
        position: absolute;
        margin: 0;
        animation: ${slideInPlaceBottomRight} 3s ease forwards;
    }

    .text {
        opacity: 0;
        animation: ${showText} 1.2s ease-out forwards;
    }
`;
