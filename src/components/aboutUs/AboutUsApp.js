import React from "react";
import { Styles } from "./style";
import { Row, Col } from "react-bootstrap";
import aboutIcon from "./img/about_icon.png";

const AboutUsApp = props => {
    return (
        <Styles themeColor={props.themeColor} id="about">
            <h2>
                About Us <img src={aboutIcon} />
            </h2>
            <h5 className="subtitle">`Good Food` Restaurant</h5>
            <Row>
                <Col xs={12} md={6}>
                    <h5>Our Psyhology</h5>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled.
                    </p>
                </Col>
                <Col xs={12} md={6}>
                    <h5>Our Motivation</h5>
                    <p>
                        It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially
                        unchanged. It was popularised in the 1960s with the
                        release of Letraset sheets containing Lorem Ipsum
                        passages
                    </p>
                </Col>
            </Row>
        </Styles>
    );
};

export default AboutUsApp;
