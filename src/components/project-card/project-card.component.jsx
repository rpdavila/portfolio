import React from "react";

import CustomButton from "../custom-button/custom-button.component";
import "./project-card.styles.scss";

const ProjectCard = ({items}) => {
    const {title, description, userName, password, url, github} = items

    const handleClick = (siteUrl) => {
        window.open(siteUrl);
    }

    return (
        <div className="project-card">
            <h3 className="title">{title}</h3>
            <span>{description}</span>
            <div className="project-links">
                {userName? (<span><b>Email: </b> {userName}</span>) : null}
                {password? (<span><b>Password: </b> {password}</span>) : null}
                <CustomButton onClick={() => handleClick(github)}>Link to Github</CustomButton>
                {url? (<CustomButton onClick={() => handleClick(url)}>Link to site</CustomButton>)
                : null}        
            </div>            
        </div>
    );
}

export default ProjectCard;