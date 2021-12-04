import React from "react";
import "./ProjectCard.css";
const ProjectCard = ({ data }) => {
    const { title, desc, image, project_url, github_url } = data;
    return (
        <div className="slide">
            <div className="project-card">
                <h2>{title}</h2>
                <p>{desc}</p>
                <hr />
                {image && <img width="80" src={image} alt={title} />}
                {project_url && (
                    <div>
                        Project URL:&nbsp;
                        <a href={project_url} target="_blank" rel="noreferrer">
                            See the project here
                        </a>
                    </div>
                )}
                {github_url && (
                    <div>
                        Github URL:&nbsp;
                        <a href={github_url} target="_blank" rel="noreferrer">
                            {github_url}
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
