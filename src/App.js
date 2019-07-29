import React, { PureComponent } from "react";
import { ThemeProvider } from "styled-components";
import RedTheme from "./components/theme/RedTheme";
import GreenTheme from "./components/theme/GreenTheme";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
    faConciergeBell,
    faUtensils,
    faListAlt,
    faClipboardList,
    faMapMarkerAlt,
    faClock,
    faMitten,
    faCalendarCheck,
    faUserTie
} from "@fortawesome/free-solid-svg-icons";
import { GlobalStyles } from "./components/style";
import { Container } from "react-bootstrap";
import NavBarApp from "./components/navbar/NavBarApp";

library.add(
    fab,
    faConciergeBell,
    faUtensils,
    faListAlt,
    faClipboardList,
    faMapMarkerAlt,
    faClock,
    faMitten,
    faCalendarCheck,
    faUserTie
);

class App extends PureComponent {
    state = {
        theme: GreenTheme,
        logo: "green"
    };

    changeTheme = theme => {
        if (theme === "green") {
            this.setState({
                theme: GreenTheme,
                logo: "green"
            });
        } else if (theme === "red") {
            this.setState({
                theme: RedTheme,
                logo: "red"
            });
        }
    };

    render() {
        const { theme, logo } = this.state;
        return (
            <ThemeProvider theme={theme}>
                <React.Fragment>
                    <GlobalStyles />
                    <Container>
                        <NavBarApp logo={logo} />
                    </Container>
                </React.Fragment>
            </ThemeProvider>
        );
    }
}

export default App;
