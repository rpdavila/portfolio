import React from "react";
import { Link } from "react-router-dom";

import CustomButton from "../../components/custom-button/custom-button.component";
import Info from "../../components/info/info.component";
import "./homepage.styles.scss";

const HomePage = () => (
    <div className="home-page">
        <Info />
        <Link to='/projects'>
            <CustomButton wireframe>View My Work</CustomButton>
        </Link>
        
    </div>
);

export default HomePage;