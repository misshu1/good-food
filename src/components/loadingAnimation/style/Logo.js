import styled, { keyframes } from "styled-components";
import LogoGreen from "../../navbar/img/logo-green.svg";
import RedLogo from "../../navbar/img/logo-red.svg";

const rotate = keyframes`
0% {
    transform: rotate(0);
}
100%{
    transform: rotate(360deg);
}
`;

export const Logo = styled.span`
    display: inline-block;
    user-select: none;
    text-transform: uppercase;
    font-weight: 900;
    color: #fff;
    background: url(${props => (props.logo === "green" ? LogoGreen : RedLogo)})
        no-repeat left bottom;
    background-size: 55%;
    padding-left: 1.5rem;
    height: 2rem;
    animation: ${rotate} 1s ease-out forwards;

    && span:nth-child(1) {
        color: ${props => props.theme.textColor};
    }
`;
