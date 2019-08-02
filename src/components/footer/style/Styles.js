import styled from "styled-components";

export const Styles = styled.footer`
    background: #222;
    color: #fff;
    text-align: center;

    .phone-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
    }

    .footer {
        background: #111;
        margin: 0;
        flex-direction: column-reverse;
    }

    .links {
        padding: 1.5rem 0;
    }

    .links a {
        color: #fff;
        text-decoration: none;
        padding: 0.5rem;
    }

    .links a:hover {
        color: #6b6b6b;
    }

    .copyright {
        color: #6b6b6b;
    }

    .icons-container {
        padding-top: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .icons {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
        padding: 0.5rem;
        margin: 0 0.5rem;
        height: 2.5rem;
        width: 2.5rem;
        border-radius: 100%;
    }

    .icons:hover {
        background: ${props => props.theme.iconsColor};
    }

    @media only screen and (min-width: 48rem) {
        .phone-info {
            flex-direction: row;
        }
    }

    @media only screen and (min-width: 62rem) {
        .footer {
            flex-direction: row;
        }
        .icons-container {
            padding-top: 0;
        }
    }
`;
