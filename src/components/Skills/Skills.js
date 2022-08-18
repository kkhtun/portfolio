import React from "react";
import "./Skills.css";
import SkillCard from "./SkillCard/SkillCard";
import skills from "../../data/Skills";
import experiences from "../../data/Experience";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
// import EducationCard from "./EducationCard/EducationCard";

const Skills = () => {
    return (
        <section className="skills-wrapper">
            <h2>Things I've experienced...</h2>
            <div className="experience-wrapper">
                {experiences.map((exp) => (
                    <ExperienceCard exp={exp} key={exp.id} />
                ))}
            </div>
            <h2>The technologies and skills I'm familiar with...</h2>
            <div className="skill-cards-wrapper">
                {skills.map((skill) => (
                    <SkillCard key={skill.id} skill={skill} />
                ))}
            </div>
            {/* <h2>My pursuit in education...</h2>
            <div className="education-wrapper">
                <EducationCard />
            </div> */}
        </section>
    );
};

export default Skills;
