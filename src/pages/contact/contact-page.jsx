import React, { useState } from "react";

import "./contact-page.styles.scss";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

const ContactPage = () => {
    const [contactDetails, setContactDetails] = useState({
        name:"",
        email:"",
        message: ""
    });

    const { name, email, message } = contactDetails
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`)

    const handleChange = (e) => {
        const {value, name} = e.target
        setContactDetails({...contactDetails, [name]: value })
    };

    const handleSubmit = (e) => {
        e.preventDefault()

    };

    
    return (
        <div className="contact">
            <form onSubmit={handleSubmit}>
                <FormInput
                    input='input'
                    name='name'
                    type='text'
                    value={name}
                    handleChange={handleChange}
                    label='Name'
                    required
                />

                <FormInput
                    input='input'
                    name='email'
                    type='email'
                    value={email}
                    handleChange={handleChange}
                    label='E-Mail'
                    required
                />

                <FormInput
                    textarea='textarea'
                    name='message'
                    value={message}
                    handleChange={handleChange}
                    label='Message'
                    required
                />

                <CustomButton type='submit'>send</CustomButton>
            </form>
        </div>
    )
}

export default ContactPage;