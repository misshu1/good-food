import React, { PureComponent } from "react";
import { Styles } from "./style";
import { InputGroup, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import calendarIcon from "./img/calendar_icon.png";

class ReservationApp extends PureComponent {
    state = {
        showLocationModal: false,
        showtableNumberModal: false,
        showDateModal: false,
        showStartTime: false,
        showEndTime: false
    };

    render() {
        return (
            <Styles>
                <h2>
                    Reservation <img src={calendarIcon} alt="calendar icon" />
                </h2>
                <div className="inputs-container">
                    <InputGroup>
                        <FormControl
                            placeholder="Location"
                            aria-label="Location"
                            onKeyDown={e => e.preventDefault()}
                        />
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">
                                <FontAwesomeIcon
                                    icon="chevron-circle-down"
                                    size="lg"
                                />
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                    </InputGroup>
                    <InputGroup>
                        <FormControl
                            placeholder="Table Nr."
                            aria-label="Table number"
                            onKeyDown={e => e.preventDefault()}
                        />
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">
                                <FontAwesomeIcon
                                    icon="chevron-circle-down"
                                    size="lg"
                                />
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                    </InputGroup>
                    <InputGroup>
                        <FormControl
                            placeholder="Date"
                            aria-label="Date"
                            onKeyDown={e => e.preventDefault()}
                        />
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">
                                <FontAwesomeIcon
                                    icon="chevron-circle-down"
                                    size="lg"
                                />
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                    </InputGroup>
                    <InputGroup>
                        <FormControl
                            placeholder="7:00 PM"
                            aria-label="start hour"
                            onKeyDown={e => e.preventDefault()}
                        />
                        <InputGroup.Prepend className="mr-1">
                            <InputGroup.Text>
                                <FontAwesomeIcon
                                    icon="chevron-circle-down"
                                    size="lg"
                                />
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="8:00 PM"
                            aria-label="end hour"
                            className="ml-1"
                            onKeyDown={e => e.preventDefault()}
                        />
                        <InputGroup.Prepend>
                            <InputGroup.Text>
                                <FontAwesomeIcon
                                    icon="chevron-circle-down"
                                    size="lg"
                                />
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                    </InputGroup>
                    <button>Reserve a Table</button>
                </div>
            </Styles>
        );
    }
}

export default ReservationApp;
