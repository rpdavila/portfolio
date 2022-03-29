import React from "react";
import { Link } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import "./header.styles.scss";

const Header = () => (
    <div className="header">
        <div className="options">            
            <Link className="option" to="/">Home</Link>        
            <Link className="option" to="/projects">Projects</Link>
            <CustomButton>Contact</CustomButton>            
        </div>
    </div>
);

export default Header;