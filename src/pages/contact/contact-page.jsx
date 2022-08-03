import React, { useState } from "react";
import { API } from "aws-amplify";

import { createContact } from "../../graphql/mutations";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import "./contact-page.styles.scss";

const contactInitialState = {
    name:"",
    email:"",
    telephone: "",
    message: "",
    sent: false,
    error: null
};

const ContactPage = () => {
    const [contactDetails, setContactDetails] = useState(contactInitialState);
    const { name, email, telephone, message, sent, error } = contactDetails

    const handleChange = (e) => {
        const {value, name} = e.target
        setContactDetails({...contactDetails, [name]: value })
    };

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            API.graphql({
                query: createContact,
                variables: {
                    input: {
                        name: name,
                        email: email,
                        telephone: telephone,
                        message: message
                    }               
                }            
            });           
            
            setContactDetails({...contactDetails, name: '', email: '', telephone: '', message: '', sent: true});
            
        } catch (error) {
            setContactDetails({...contactDetails, error: error.errors});
        }
    };

    return (
        <div className="contact">
            {sent? (<div className="success">Message Sent</div>): null}
            {error? (<div className="fail">Failed to deliver</div>): null}
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