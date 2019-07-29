import styled from "styled-components";

export const Styles = styled.div`
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
`;
