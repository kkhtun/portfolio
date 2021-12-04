import React from "react";
import "./Services.css";
import ServiceCard from "./ServiceCard/ServiceCard";
import services from "../../data/Services";

const Services = () => {
    const bgColors = ["#FFDFD4", "#BDD4E6", "#AFEEEE"];
    return (
        <div className="services">
            <h2>My line of work...</h2>
            <div className="service-wrapper">
                {services.map((service, idx) => {
                    return (
                        <ServiceCard
                            service={service}
                            key={service.id}
                            bgColor={bgColors[idx % bgColors.length]}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Services;
