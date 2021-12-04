import React from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard/ProjectCard";
import Slider from "../Slider/Slider";
import liveProjects from "../../data/LiveProjects";
import practiceProjects from "../../data/PracticeProjects";
const Projects = () => {
    return (
        <>
            <h2 className="subheading">
                Live Projects ({liveProjects.length})
            </h2>
            <Slider slideData={liveProjects} SlideComponent={ProjectCard} />
            <h2 className="subheading">
                Practice Projects ({practiceProjects.length})
            </h2>
            <Slider slideData={practiceProjects} SlideComponent={ProjectCard} />
        </>
    );
};

export default Projects;
