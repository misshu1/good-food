import React, { PureComponent } from "react";
import { ThemeProvider } from "styled-components";
import RedTheme from "./components/theme/RedTheme";
import GreenTheme from "./components/theme/GreenTheme";
import { GlobalStyles } from "./components/style";
import { Container } from "react-bootstrap";
import NavBarApp from "./components/navbar/NavBarApp";
import ShowcaseApp from "./components/showcase/ShowcaseApp";
import AboutUsApp from "./components/aboutUs/AboutUsApp";
import OurMenuApp from "./components/ourMenu/OurMenuApp";
import LocationApp from "./components/location/LocationApp";
import FooterApp from "./components/footer/FooterApp";
import LoadingAnimation from "./components/loadingAnimation/LoadingAnimation";
import TeamApp from "./components/team/TeamApp";
import ReservationApp from "./components/reservation/ReservationApp";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faStar,
    faPhone,
    faWifi,
    faBars,
    faChevronCircleDown
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebookF,
    faTwitter,
    faGooglePlusG
} from "@fortawesome/free-brands-svg-icons";

library.add(
    faStar,
    faPhone,
    faWifi,
    faFacebookF,
    faTwitter,
    faGooglePlusG,
    faBars,
    faChevronCircleDown
);

class App extends PureComponent {
    state = {
        theme: localStorage.theme === "red" ? RedTheme : GreenTheme,
        logo: localStorage.theme === "red" ? "red" : "green",
        loading: sessionStorage.loading === "false" ? "false" : null
    };

    componentDidMount = () => {
        if (!localStorage.theme) {
            localStorage.setItem("theme", "green");
        }
        this.loadingAnimationHandler();
    };

    loadingAnimationHandler = () => {
        if (!sessionStorage.loading) {
            sessionStorage.setItem("loading", "false");
            setTimeout(() => {
                this.setState({
                    loading: "false"
                });
            }, 3000);
        }
    };

    changeTheme = () => {
        if (localStorage.theme === "green") {
            localStorage.setItem("theme", "red");
            this.setState({
                theme: RedTheme,
                logo: "red"
            });
        } else if (localStorage.theme === "red") {
            localStorage.setItem("theme", "green");
            this.setState({
                theme: GreenTheme,
                logo: "green"
            });
        }
    };

    render() {
        const { theme, logo, loading } = this.state;
        return (
            <ThemeProvider theme={theme}>
                <React.Fragment>
                    <GlobalStyles loading={loading} />
                    <LoadingAnimation logo={logo} />
                    <Container className="app">
                        <NavBarApp logo={logo} changeTheme={this.changeTheme} />
                        <ShowcaseApp />
                        <AboutUsApp themeColor={logo} />
                        <OurMenuApp />
                        <LocationApp theme={logo} />
                        <TeamApp />
                        <ReservationApp />
                        <FooterApp />
                    </Container>
                </React.Fragment>
            </ThemeProvider>
        );
    }
}

export default App;
