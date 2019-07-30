import React from "react";
import { Styles } from "./style";

const ShowcaseApp = props => {
    return (
        <Styles data>
            <h2>GoodFood Restaurant</h2>
            <p>is the place where you can hold</p>
            <p>meetings and business dinners,</p>
            <p>anniversaries or any important</p>
            <p>event of your life</p>
            <span className="wrapper">
                <span>
                    <h3>Open Daily</h3>
                    Mon-Fri: 10am - 09pm
                    <br />
                    Sat-Sun: 08am - 10pm
                </span>
            </span>
        </Styles>
    );
};

export default ShowcaseApp;
