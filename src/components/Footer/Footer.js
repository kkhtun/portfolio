import React from "react";
import "./Footer.css";
import Facebook from "../../images/social/facebook.png";
import Github from "../../images/social/github.png";
import Gmail from "../../images/social/gmail.png";
import Linkedin from "../../images/social/linkedin.png";
import Instagram from "../../images/social/instagram.png";

const Footer = () => {
    return (
        <footer>
            <div className="contact">
                <h2>Contact Me On</h2>
                <div className="social">
                    <a
                        href="https://www.facebook.com/khaingkhant.htun/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={Facebook} alt="facebook link" />
                    </a>
                    <a
                        href="https://github.com/kkhtun"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={Github} alt="github link" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/khaing-khant-htun-880898148"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={Linkedin} alt="linkedin link" />
                    </a>
                    <a
                        href="mailto:khaingkhanthtun@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        title="khaingkhanthtun@gmail.com"
                    >
                        <img src={Gmail} alt="gmail link" />
                    </a>
                    <a
                        href="https://www.instagram.com/khaingkhanthtun/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={Instagram} alt="instagram link" />
                    </a>
                </div>
                <p>
                    Made by KKHtun with &hearts;
                    <br />
                    (and of course React!)
                </p>
                <div className="resume">
                    <a href="https://github.com/kkhtun/portfolio/blob/main/resume.pdf">
                        Download My Resume PDF
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
