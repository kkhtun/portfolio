import React from "react";
import "./ServiceCard.css";
const ServiceCard = ({ bgColor, service }) => {
    const { title, desc, image } = service;
    return (
        <div className="service-card" style={{ backgroundColor: bgColor }}>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    );
};

export default ServiceCard;
