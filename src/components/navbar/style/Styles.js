import styled from "styled-components";

export const Styles = styled.div`
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 5;
    box-shadow: 0px 6px 10px -4px rgba(0, 0, 0, 0.5);

    .navbar-custom {
        padding: 0.5rem 1rem;
    }

    .desktop-menu {
        display: none;
    }

    .desktop-menu a {
        position: relative;
        padding: 0 0.5rem;
        text-decoration: none;
        color: #fff;
    }

    .desktop-menu a:hover {
        color: #d6d8de;
    }

    .desktop-menu a:hover:after {
        background: #d6d8de;
        content: "";
        position: absolute;
        height: 3px;
        width: 70%;
        bottom: -1rem;
        left: 15%;
    }

    #active {
        color: ${props => props.theme.textColor};
    }

    #active:after {
        background: ${props => props.theme.textColor};
        content: "";
        position: absolute;
        height: 3px;
        width: 100%;
        bottom: -1rem;
        left: 0;
        transition: all 0.3s;
    }

    @media only screen and (min-width: 48rem) {
        .navbar-custom {
            padding: 0.5rem 5rem;
        }
    }

    @media only screen and (min-width: 62rem) {
        .desktop-menu {
            display: block;
        }
    }
`;
