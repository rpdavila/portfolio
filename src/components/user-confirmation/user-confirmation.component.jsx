import React, { useState } from "react";

import { Auth } from "aws-amplify";

import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import "./user-confirmation.styles.scss"

const confirmCredentials = {
    username: "",
    code: "",
    success: false
}

const UserConfirmation = () => {
    const [confirmation, setConfirmation] = useState(confirmCredentials);

    const {username, code } = confirmation

    const handleChange = (e) => {
        const {value, name} = e.target
        setConfirmation({...confirmation, [name]: value})
    };

    const confirmSignUp = async () => {
        try {
            const user = await Auth.confirmSignUp(username, code);
            console.log(user)
        } catch (error) {
            console.log('error confirming signup', error)
        }
        
    };
     
    const handleSubmit = async (e) => {
        e.preventDefault()
        confirmSignUp()       
    };
    
    return(
        <div className="user-confirmation">
            <form className="form-container" onSubmit={handleSubmit}>
                <FormInput
                    input='input'
                    name='username'
                    type='text'
                    value={username}
                    onChange={handleChange}
                    label='E-Mail'
                    required
                />

                <FormInput
                    input='input'
                    name='code'
                    type='text'
                    value={code}
                    onChange={handleChange}
                    label='Confirmation Code'
                    required
                />
                <CustomButton type='submit'>Confirm</CustomButton>
            </form>                
        </div>
    )    
};

export default UserConfirmation;