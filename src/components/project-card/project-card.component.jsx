import React from "react";

import CustomButton from "../custom-button/custom-button.component";
import "./project-card.styles.scss";

const ProjectCard = ({items}) => {
    const {title, description, progress, url, github} = items
    const handleClick = (siteUrl) => {
        console.log(siteUrl);
        window.location.href = siteUrl ;
    };
    console.log(handleClick)
    return (
        <div className="project-card">
            <h3>{title}</h3>
            <span><b>Description: </b>{description}</span>
            <span><b>Progress: </b>{progress}</span>
            {url ? (<CustomButton onClick={() => handleClick(url)}>Link to site</CustomButton>)
            : null
            }            
            <CustomButton onClick={() => handleClick(github)}>Link to Github</CustomButton>
        </div>
    )
};

export default ProjectCard;