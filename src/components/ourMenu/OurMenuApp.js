import React from "react";
import { Styles } from "./style";
import menuIconGreen from "./img/menu-icon-green.png";
import menuIconRed from "./img/menu-icon-red.png";
import ourMenuIcon from "./img/ourMenuIcon.png";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OurMenuApp = () => {
    return (
        <Styles id="menu">
            <h2>
                Our Menu <img src={ourMenuIcon} alt="menu icon" />
            </h2>
            <h3>
                <img
                    src={
                        localStorage.theme === "red"
                            ? menuIconRed
                            : menuIconGreen
                    }
                    alt="menu icon"
                />{" "}
                Menu of the day
            </h3>
            <Row>
                <Col xs={12} lg={6} className="mb-2">
                    <Col xs={11} className="p-0">
                        <h4>Chilli Baked Potato Skins</h4>
                    </Col>
                    <Row>
                        <Col>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's
                            </p>
                        </Col>
                        <Col xs="auto">
                            <span className="circle selected">$12</span>
                        </Col>
                    </Row>
                    <FontAwesomeIcon icon="star" size="sm" />
                    <FontAwesomeIcon icon="star" size="sm" />
                    <FontAwesomeIcon icon="star" size="sm" />
                    <FontAwesomeIcon
                        icon="star"
                        size="sm"
                        style={{ color: "rgba(255,255,255,.4)" }}
                    />
                    <FontAwesomeIcon
                        icon="star"
                        size="sm"
                        style={{ color: "rgba(255,255,255,.4)" }}
                    />
                </Col>
                <Col xs={12} lg={6} className="mb-2 hide-mobile">
                    <Col xs={11} className="p-0">
                        <h4>Tuscan Spinach Dip</h4>
                    </Col>
                    <Row>
                        <Col>
                            <p>
                                Standard dummy text ever since the 1500s, when
                                an unknown printer took a galley of type and
                                scrambled it to make a type
                            </p>
                        </Col>
                        <Col xs="auto">
                            <span className="circle">$8</span>
                        </Col>
                    </Row>
                    <FontAwesomeIcon icon="star" size="sm" />
                    <FontAwesomeIcon icon="star" size="sm" />
                    <FontAwesomeIcon icon="star" size="sm" />
                    <FontAwesomeIcon icon="star" size="sm" />
                    <FontAwesomeIcon
                        icon="star"
                        size="sm"
                        style={{ color: "rgba(255,255,255,.4)" }}
                    />
                </Col>
            </Row>
            <span className="hr">
                <span className="hr-name">Traditional Food</span>
                <hr />
            </span>
            <Row>
                <Col xs={12} lg={6} className="mb-4">
                    <Col xs={11} className="p-0">
                        <h4>Caesar salad</h4>
                    </Col>
                    <Row>
                        <Col>
                            <p>
                                It has survived not only five centuries, but
                                also the leap into electronic typesetting,
                                remaining essentially unchanged.
                            </p>
                        </Col>
                        <Col xs="auto">
                            <span className="circle ">$25</span>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} lg={6} className="mb-4 hide-mobile">
                    <Col xs={11} className="p-0">
                        <h4>Steak Café de Paris</h4>
                    </Col>
                    <Row>
                        <Col>
                            <p>
                                It was popularised in the 1960s with the release
                                of Letraset sheets containing Lorem Ipsum
                                passages
                            </p>
                        </Col>
                        <Col xs="auto">
                            <span className="circle">$41</span>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row>
                <Col xs={12} lg={6} className="mb-2">
                    <Col xs={11} className="p-0">
                        <h4>Burger & Fries</h4>
                    </Col>
                    <Row>
                        <Col>
                            <p>
                                Passages, and more recently with desktop
                                publishing software like Aldus PageMaker
                                including versions of Lorem Ipsum.
                            </p>
                        </Col>
                        <Col xs="auto">
                            <span className="circle ">$18</span>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} lg={6} className="mb-2 hide-mobile">
                    <Col xs={11} className="p-0">
                        <h4>Bourbon Chicken</h4>
                    </Col>
                    <Row>
                        <Col>
                            <p>
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form
                            </p>
                        </Col>
                        <Col xs="auto">
                            <span className="circle">$68</span>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <span className="hr">
                <span className="hr-name">Beverage</span>
                <hr />
            </span>
            <Row>
                <Col xs={12} lg={6} className="mb-2">
                    <Col xs={11} className="p-0">
                        <h4>Iced Coffee</h4>
                    </Col>
                    <Row>
                        <Col>
                            <p>
                                If you are going to use a passage of Lorem
                                Ipsum, you need to be sure there isn't anything
                                embarrassing
                            </p>
                        </Col>
                        <Col xs="auto">
                            <span className="circle ">$1</span>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} lg={6} className="mb-2 hide-mobile">
                    <Col xs={11} className="p-0">
                        <h4>Southern Sweet Iced Tea</h4>
                    </Col>
                    <Row>
                        <Col>
                            <p>
                                All the Lorem Ipsum generators on the Internet
                                tend to repeat predefined chunks as necessary,
                                making this the first true generator
                            </p>
                        </Col>
                        <Col xs="auto">
                            <span className="circle">$1</span>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className="text-right">
                    <span className="view-more">View Our Menu</span>
                </Col>
            </Row>
        </Styles>
    );
};
export default OurMenuApp;
