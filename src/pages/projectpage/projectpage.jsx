import React from "react";

import ProjectCard from "../../components/project-card/project-card.component";
import PROJECT_DATA from "../../components/project-card/project.data";
import "./projectpage.styles.scss";

const ProjectPage = () => {
    const data = Object.keys(PROJECT_DATA).map(
        key => PROJECT_DATA[key]
    );

    return (
        <div className="project-page">
            {data.map((items, index) => (
                <ProjectCard key={index} items={items} />
            )).reverse()}
        </div>
    )
};

export default ProjectPage;