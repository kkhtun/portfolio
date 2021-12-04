import React from "react";
import "./Navbar.css";
const Navbar = ({ page, setPage }) => {
    return (
        <section className="navbar-container">
            <div className="navbar-wrapper">
                <div
                    className={`navbar-item ${
                        page === "projects" ? "active" : ""
                    }`}
                    onClick={() => setPage("projects")}
                >
                    Projects
                </div>
                <div
                    className={`navbar-item ${
                        page === "skills" ? "active" : ""
                    }`}
                    onClick={() => setPage("skills")}
                >
                    Skills
                </div>
                <div
                    className={`navbar-item ${
                        page === "services" ? "active" : ""
                    }`}
                    onClick={() => setPage("services")}
                >
                    Services
                </div>
            </div>
        </section>
    );
};

export default Navbar;
