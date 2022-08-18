import React from "react";
import "./Landing.css";
import profile from "../../images/profile.jpg";
const Landing = () => {
    return (
        <section className="landing-container">
            <div>
                <img src={profile} alt="profile" />
                <h1 className="landing-welcome">Khaing Khant Htun</h1>
                <p className="landing-description">
                    Hello, I'm a software developer/student from Myanmar. I am
                    interested in science and technology. I'm trying to improve
                    my skills in computer science and software engineering. I'm
                    also an enthusiast of other sciences, physics and anything
                    technology-related. I hope to be an advocate in tech one
                    day. Currently, I'm pursuing my studies in many related
                    fields. Nice to meet you.
                </p>
            </div>
        </section>
    );
};

export default Landing;
