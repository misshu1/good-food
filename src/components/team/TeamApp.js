import React from "react";
import { Styles } from "./style";
import chef1 from "./img/chef1.png";
import hatIcon from "./img/hat_icon.png";

const TeamApp = props => {
    return (
        <Styles id="chef">
            <h2>
                meet our chef <img src={hatIcon} alt="hat icon" />
            </h2>
            <div className="team-container">
                <div>
                    <img src={chef1} alt="chef1" />
                    <h5>John Doe - Chef Leader</h5>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry dummy text
                    </p>
                </div>
                <div>
                    <img src={chef1} alt="chef1" width="100%" height="80%" />
                    <h5>John Doe - Chef Leader</h5>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry dummy text
                    </p>
                </div>
                <div>
                    <img src={chef1} alt="chef1" width="100%" height="80%" />
                    <h5>John Doe - Chef Leader</h5>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry dummy text
                    </p>
                </div>
                <div>
                    <img src={chef1} alt="chef1" width="100%" height="80%" />
                    <h5>John Doe - Chef Leader</h5>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry dummy text
                    </p>
                </div>
            </div>
        </Styles>
    );
};
export default TeamApp;
