import React from "react";

import "./custom-button.styles.scss";


const CustomButton = ({children, wireframe, ...otherProps}) => (
    <button className={`${wireframe? 'wire-frame': ''} custom-button`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;