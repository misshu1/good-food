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

    handleActiveLink = name => {
        const newObj = {};
        Object.keys(this.state.activeLink).forEach(item => {
            newObj[item] = false;
        });

        const actived = Object.assign({}, newObj, { [name]: true });
        this.setState({ activeLink: actived });
        console.log(window.location.href);
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
                <Navbar bg="dark" className="navbar-custom">
                    <Navbar.Brand onClick={this.props.changeTheme}>
                        <Logo logo={this.props.logo}>
                            <span>Good</span>
                            <span>Food</span>
                        </Logo>
                    </Navbar.Brand>
                    <Nav className="ml-auto desktop-menu">
                        <a
                            href="#home"
                            onClick={() => this.handleActiveLink("home")}
                            id={home ? "active" : ""}
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            onClick={() => this.handleActiveLink("about")}
                            id={about ? "active" : ""}
                        >
                            About Us
                        </a>
                        <a
                            href="#menu"
                            onClick={() => this.handleActiveLink("menu")}
                            id={menu ? "active" : ""}
                        >
                            Menu
                        </a>
                        <a
                            href="#location"
                            onClick={() => this.handleActiveLink("location")}
                            id={location ? "active" : ""}
                        >
                            Location
                        </a>
                        <a
                            href="#chef"
                            onClick={() => this.handleActiveLink("chef")}
                            id={chef ? "active" : ""}
                        >
                            Chef
                        </a>
                        <a
                            href="#contact"
                            onClick={() => this.handleActiveLink("contact")}
                            id={contact ? "active" : ""}
                        >
                            Contact us
                        </a>
                    </Nav>
                </Navbar>
            </Styles>
        );
    }
}

export default NavBarApp;
