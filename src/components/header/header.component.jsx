import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";

import "./header.styles.scss";
import CustomButton from "../custom-button/custom-button.component";

const Header = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    const handleSignOut = async() => {
        try {
            
            
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="header">
            <div className="options">            
                <Link className="option" to="/">Home</Link>        
                <Link className="option" to="/projects">Projects</Link>
                <Link className="option" to="/blog">Blog</Link>
                <Link className="option" to="/contact">Contact</Link>
                {
                    currentUser?
                        (<Link className="option" to="/postblog">Post To Blog</Link>): null
                }
                {
                    currentUser? 
                        (<CustomButton type='button' onClick={handleSignOut}>Sign Out</CustomButton>)
                        :
                        (<Link className="option" to="/signin">Sign In</Link>)
                }                                       
            </div>
        </div>
    )
};

export default Header;