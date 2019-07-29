import styled from "styled-components";
import LogoGreen from "../img/logo-green.svg";
import RedLogo from "../img/logo-red.svg";

export const Logo = styled.span`
    display: inline-block;
    text-transform: uppercase;
    font-weight: 900;
    color: #fff;
    background: url(${props => (props.logo === "green" ? LogoGreen : RedLogo)})
        no-repeat left bottom;
    background-size: 55%;
    padding-left: 1.5rem;
    height: 2rem;

    && span {
        padding-bottom: 2rem;
    }

    && span:nth-child(1) {
        color: ${props => props.theme.textColor};
    }
`;
