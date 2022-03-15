import React from "react";

import myImage from "../../assets/P3.jpg";
import './image-portrait.styles.scss';

const ImagePortrait = () => (
    <div className="portrait-container">
        <img className="personal-image" src={myImage} alt="developer"/>
    </div>
);

export default ImagePortrait;