import React from "react";
import { Styles } from "./style";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterApp = props => {
    return (
        <Styles>
            <h2 className="pt-4">You have other questions?</h2>
            <span className="phone-info pb-4">
                <span>Please call the following telephone number </span>
                <span>+1 504-123-1234</span>
            </span>

            <Row className="footer">
                <Col xs="12" lg="6">
                    <div className="links">
                        <a href="#home">Home</a>
                        <a href="#about">About Us</a>
                        <a href="#menu">Menu</a>
                        <a href="#location">Location</a>
                        <a href="#chef">Chef</a>
                        <a href="#contact">Contact us</a>
                    </div>
                    <p className="copyright">
                        &copy; Copyright 2013. "GoodFood" All rights reserved.
                    </p>
                </Col>
                <Col xs="12" lg="6" className="icons-container">
                    <span className="icons">
                        <FontAwesomeIcon
                            icon={["fas", "wifi"]}
                            size="lg"
                            style={{ color: "#000" }}
                        />
                    </span>
                    <span className="icons">
                        <FontAwesomeIcon
                            icon={["fab", "facebook"]}
                            size="lg"
                            style={{ color: "#000" }}
                        />
                    </span>
                    <span className="icons">
                        <FontAwesomeIcon
                            icon={["fab", "twitter"]}
                            size="lg"
                            style={{ color: "#000" }}
                        />
                    </span>
                    <span className="icons">
                        <FontAwesomeIcon
                            icon={["fab", "google-plus-g"]}
                            size="lg"
                            style={{ color: "#000" }}
                        />
                    </span>
                </Col>
            </Row>
        </Styles>
    );
};
export default FooterApp;
