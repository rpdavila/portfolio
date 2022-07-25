import React, { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createContact } from "../../graphql/mutations";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import "./contact-page.styles.scss";

const ContactPage = () => {
    const [contactDetails, setContactDetails] = useState({
        name:"",
        email:"",
        telephone: "",
        message: ""
    });

    const { name, email, telephone, message } = contactDetails

    const handleChange = (e) => {
        const {value, name} = e.target
        setContactDetails({...contactDetails, [name]: value })
    };

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            await API.graphql(graphqlOperation(createContact, {
                input: {
                    name: name,
                    email: email,
                    telephone: telephone,
                    message: message
                }
            }))
        } catch (error) {
            console.log("There was an error: ", error);
        }
    };

    return (
        <div className="contact">
            <form className="form-container" onSubmit={handleSubmit}>
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
                    input='input'
                    name='telephone'
                    type='tel'
                    value={telephone}
                    handleChange={handleChange}
                    label='Telephone Number'
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

                <CustomButton type='submit'>Send</CustomButton>
            </form>
        </div>
    )
}

export default ContactPage;