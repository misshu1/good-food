import React from "react";
import { Styles, Logo } from "./style";
import { Container } from "react-bootstrap";

const LoadingAnimation = props => {
    return (
        <Styles className="loading-screen">
            <Container className="container1">
                <Logo className="logo" logo={props.logo}>
                    <span className="text">Good</span>
                    <span className="text">Food</span>
                </Logo>
            </Container>
            <Container className="container2">
                <Logo className="logo" logo={props.logo}>
                    <span className="text">Good</span>
                    <span className="text">Food</span>
                </Logo>
            </Container>
            <Container className="container3">
                <Logo className="logo" logo={props.logo}>
                    <span className="text">Good</span>
                    <span className="text">Food</span>
                </Logo>
            </Container>
            <Container className="container4">
                <Logo className="logo" logo={props.logo}>
                    <span className="text">Good</span>
                    <span className="text">Food</span>
                </Logo>
            </Container>
        </Styles>
    );
};

export default LoadingAnimation;
