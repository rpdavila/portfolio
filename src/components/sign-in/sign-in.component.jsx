import React, { useState, useContext } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { UserContext } from "../../contexts/user.context"
import "./sign-in.styles.scss"


const userCredentials = {
    username:"",
    password:""
}

const SignIn = () => {

    const [signInDetails, setSignInDetails] = useState(userCredentials);
    const { username, password } = signInDetails

    const { setCurrentUser } = useContext(UserContext);

    const handleChange = (e) => {
        const {value, name} = e.target
        setSignInDetails({...signInDetails, [name]: value})
    };

    const signIn = async () => {
        try {
            
        } catch (error) {
            alert('error signing up:', error)
        };
    };

    const signUp = async () => {
        try {
            

            console.log();
        } catch (error) {
            console.log('error signing up', error);
        }
    }

    const confirmSignUp = async () => {
        let code = ""
        try {
           
        } catch (error) {
            console.log('Error confirming sign up', error);
        }
    } 
    const clearForm = () => {
        setSignInDetails({...signInDetails, username:'', password:''})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        signUp();
        setTimeout(2000);
        clearForm();
    };

    return(
        <div className="sign-in">
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
                    name='password'
                    type='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required
                />

                <CustomButton type='submit'>Submit</CustomButton>
            </form>     
        </div>
    )
};

export default SignIn;