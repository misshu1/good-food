import React, { PureComponent } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Logo, Styles } from "./style";

class NavBarApp extends PureComponent {
    state = {
        activeLink: {
            home: true,
            about: false,
            menu: false,
            location: false,
            chef: false,
            contact: false
        }
    };

    activeLink = name => {
        const newObj = {};
        Object.keys(this.state.activeLink).forEach(item => {
            newObj[item] = false;
        });

        const actived = Object.assign({}, newObj, { [name]: true });
        this.setState({ activeLink: actived });
    };

    render() {
        const {
            home,
            about,
            menu,
            location,
            chef,
            contact
        } = this.state.activeLink;
        return (
            <Styles>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand>
                        <Logo logo={this.props.logo}>
                            <span>Good</span>
                            <span>Food</span>
                        </Logo>
                    </Navbar.Brand>
                    <Nav className="ml-auto desktop-menu">
                        <a
                            href="#home"
                            onClick={() => this.activeLink("home")}
                            id={home === true ? "active" : ""}
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            onClick={() => this.activeLink("about")}
                            id={about === true ? "active" : ""}
                        >
                            About Us
                        </a>
                        <a
                            href="#menu"
                            onClick={() => this.activeLink("menu")}
                            id={menu === true ? "active" : ""}
                        >
                            Menu
                        </a>
                        <a
                            href="#location"
                            onClick={() => this.activeLink("location")}
                            id={location === true ? "active" : ""}
                        >
                            Location
                        </a>
                        <a
                            href="#chef"
                            onClick={() => this.activeLink("chef")}
                            id={chef === true ? "active" : ""}
                        >
                            Chef
                        </a>
                        <a
                            href="#contact"
                            onClick={() => this.activeLink("contact")}
                            id={contact === true ? "active" : ""}
                        >
                            Contact Us
                        </a>
                    </Nav>
                </Navbar>
            </Styles>
        );
    }
}

export default NavBarApp;
