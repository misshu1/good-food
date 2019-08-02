import React, { Component } from "react";
import { Styles, LocationTitle, MapStyle } from "./style";
import { Row, Col } from "react-bootstrap";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import greenMarker from "./img/green_marker.png";
import redMarker from "./img/red_marker.png";

const mapSize = {
    wodth: "100%",
    height: "20rem"
};

const LoadingContainer = () => null;

class LocationApp extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        allMarkers: [],
        mapKey: Math.random(),
        infowWindowKey: Math.random() + 1,
        places: [
            {
                name: "Tweed Courthouse",
                id: "1",
                address: "52 Chambers St, NY 10007",
                state: "New York",
                coordonates: {
                    lat: 40.713466,
                    lng: -74.005517
                }
            },
            {
                name: "P.S. 89 Liberty",
                id: "2",
                address: "201 Warren St, NY 10282,",
                state: "New York",
                coordonates: {
                    lat: 40.7171033,
                    lng: -74.0134233
                }
            }
        ],
        markerRed: redMarker,
        markerGreen: greenMarker
    };

    componentDidMount = () => {
        this.renderMarkers();
    };

    componentDidUpdate = prevProps => {
        if (prevProps.theme !== this.props.theme) {
            this.setState(
                {
                    mapKey: Math.random(),
                    infowWindowKey: Math.random() + 1
                },
                this.renderMarkers
            );
        }
    };

    renderMarkers = () => {
        let markers = [];
        this.state.places.forEach(loc => {
            markers = [
                ...markers,
                <Marker
                    key={loc.id}
                    onClick={this.onMarkerClick}
                    name={loc.name}
                    address={loc.address}
                    position={loc.coordonates}
                    state={loc.state}
                    animation={window.google.maps.Animation.DROP}
                    options={{
                        icon:
                            this.props.theme === "green"
                                ? this.state.markerGreen
                                : this.state.markerRed
                    }}
                />
            ];
        });
        return this.setState({ allMarkers: markers });
    };

    onMarkerClick = async (props, marker, e) => {
        await this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

        let bounds = new window.google.maps.LatLngBounds();
        await bounds.extend(marker.position);

        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(window.google.maps.Animation.BOUNCE);
            setTimeout(() => {
                marker.setAnimation(null);
            }, 350);
        }
    };

    onClose = () => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {
        const { selectedPlace, activeMarker, showingInfoWindow } = this.state;
        return (
            <Styles id="location">
                <LocationTitle>
                    <h2>You Want To Stand Here?</h2>
                    <div className="button">
                        <div>
                            <h5>Seat Reservation</h5>
                            <p>Reserve a place in "Good Food" restaurant</p>
                        </div>
                    </div>
                </LocationTitle>
                <Map
                    key={this.state.mapKey}
                    google={this.props.google}
                    zoom={14}
                    style={mapSize}
                    styles={MapStyle}
                    initialCenter={{
                        lat: 40.7180088,
                        lng: -74.0128065
                    }}
                >
                    {this.state.allMarkers}
                    <InfoWindow
                        key={this.state.infowWindowKey}
                        marker={activeMarker}
                        visible={showingInfoWindow}
                        onClose={this.onClose}
                    >
                        <div>
                            <h4>{selectedPlace.name}</h4>
                            <p>State: {selectedPlace.state}</p>
                            <p>Address: {selectedPlace.address}</p>
                        </div>
                    </InfoWindow>
                </Map>
            </Styles>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API,
    LoadingContainer: LoadingContainer
})(LocationApp);
