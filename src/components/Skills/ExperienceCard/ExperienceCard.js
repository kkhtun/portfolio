import React, { useState } from "react";
import "./ExperienceCard.css";
import nextIcon from "../../../images/experience/next.png";

const ExperienceCard = ({ exp }) => {
    const [active, setActive] = useState(false);
    const { title, desc, duration } = exp;
    return (
        <div
            className={`experience-card ${
                active ? "experience-card-active" : ""
            }`}
        >
            <h3 onClick={() => setActive((prev) => !prev)}>
                {title}
                <img
                    src={nextIcon}
                    alt="next icon"
                    className={`toggle-dropdown-icon ${
                        active ? "toggle-dropdown-icon-active" : ""
                    }`}
                />
            </h3>
            <div>
                {desc} <br /> {duration}
            </div>
        </div>
    );
};

export default ExperienceCard;
