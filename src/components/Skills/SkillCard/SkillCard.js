import React from "react";
import "./SkillCard.css";
const SkillCard = ({ skill }) => {
    const { title, image } = skill;
    return (
        <div className="skill-card">
            <img src={image} alt={title} />
            <div className="skill-title">{title}</div>
        </div>
    );
};

export default SkillCard;
