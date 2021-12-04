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
                    focus is on backend development using PHP/Laravel and API
                    development. I also have experience developing frontend
                    applications with React environment. I am also eager to
                    tackle development in other languages.
                </p>
            </div>
        </section>
    );
};

export default Landing;
