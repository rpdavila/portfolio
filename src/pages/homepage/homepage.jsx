import React from "react";

import ImagePortrait from "../../components/image-portrait/image-portrait.component";
import Info from "../../components/info/info.component";
import "./homepage.styles.scss";

const HomePage = () => (
    <div className="home-page">
        <ImagePortrait />
        <Info />
    </div>
);

export default HomePage;