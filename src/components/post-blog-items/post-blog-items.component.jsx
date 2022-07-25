import React, { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";

import { createBlog } from "../../graphql/mutations";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";


import "./post-blog-items.styles.scss";

const blogCategories = {
    title: "",
    body: "",
    error: ""
}


const PostBlogItems = () => {
    const [blogInfo, setBlogInfo] = useState(blogCategories);
    const { title, body, error } = blogInfo

    const handleChange = (e) => {
        const { value, name } = e.target
        setBlogInfo({...blogInfo, [name]:value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const blogItems = { title, body };        
        try {
            await API.graphql(graphqlOperation(createBlog, {input: blogItems}));
            alert('posted!');
            clearForm();
        } catch (error) {
            console.log(error);            
        }
    }

    const clearForm = () => (setBlogInfo({...blogInfo, title: "", body: ""}));

    return(
       
        <div className="blog-container">
            <form className="blog-form-container" onSubmit={handleSubmit}>
                <FormInput
                    input='input'
                    name='title'
                    type='text'
                    value={title}
                    onChange={handleChange}
                    label='Title'
                    required
                />

                <FormInput
                    textarea='text'
                    name='body'
                    value={body}
                    handleChange={handleChange}
                    label='Body'
                    required
                />

                <CustomButton type='submit'>Submit</CustomButton>
            </form>
        </div>
    );
}

export default PostBlogItems;