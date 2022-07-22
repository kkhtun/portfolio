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
                    Welcome to my portfolio! I'm an IT student currently
                    self-learning in software engineering skills, seeking
                    real-world experience as a software engineer. My current
                    focus is on backend development using NodeJS and related
                    technologies focusing on API and service-oriented
                    architectures. I also have experience developing frontend
                    applications with React and Angular environments. I am eager
                    to tackle challenges in other languages and areas.
                </p>
            </div>
        </section>
    );
};

export default Landing;
