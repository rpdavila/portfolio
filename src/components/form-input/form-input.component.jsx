import React from "react";
import "./form-input.styles.scss";

const FormInput = ({handleChange, label, input, textarea, ...otherProps}) => (

    <div className="group">
        { input ?
            (<input className="form-input" onChange={handleChange} {...otherProps} />)
            : null
        }
        { textarea ?
            (<textarea className="form-textarea" onChange={handleChange} {...otherProps} />)
            :null
        }
        {
            label ?
            (<label className={`${
                otherProps.value.length ? 'shrink' : ''
                } form-input-label`}
            >
                {label}
            </label>)
            : null
        }
    </div>
)

export default FormInput;
