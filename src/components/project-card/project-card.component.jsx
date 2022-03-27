import React from "react";

import CustomButton from "../custom-button/custom-button.component";
import "./project-card.styles.scss";

const ProjectCard = ({items}) => {
    const {title, description, userName, password, url, github} = items
    const handleClick = (siteUrl) => {
        window.open(siteUrl);
    };

    return (
        <div className="project-card">
            <h3 className="title">{title}</h3>
            <span><b>Description: </b>{description}</span><br />
            <div className="project-links">
                {userName? (<span><b>Email: </b> {userName}</span>) : null}
                {password? (<span><b>Password: </b> {password}</span>) : null}<br />
                {url? (<CustomButton onClick={() => handleClick(url)}>Link to site</CustomButton>)
                : null}<br/>           
                <CustomButton onClick={() => handleClick(github)}>Link to Github</CustomButton>
            </div>            
        </div>
    );
}

export default ProjectCard;