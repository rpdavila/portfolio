import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";

const Header = () => {
    
    return (
        <div className="header">
            <div className="options">            
                <Link className="option" to="/">Home</Link>        
                <Link className="option" to="/projects">Projects</Link>
                <Link className="option" to="/blog">Blog</Link>
                <Link className="option" to="/contact">Contact</Link>                         
            </div>
        </div>
    )
};

export default Header;