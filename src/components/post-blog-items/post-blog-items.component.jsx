import React, { useState } from "react";
import { DataStore } from '@aws-amplify/datastore';
import { Blog } from '../../models';

import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import "./post-blog-items.styles.scss";

const d = new Date();
const blogCategories = {
    title: "",
    date: d.toDateString,
    body: "",
    error: ""
}

const PostBlogItems = () => {
    const [blogInfo, setBlogInfo] = useState(blogCategories);
    const { title, date, body, error } = blogInfo

    const handleChange = (e) => {
        const { value, name } = e.target
        setBlogInfo({...blogInfo, [name]:value});
    };

    const handleSubmit = async () => {
        try {
            await DataStore.save(
                new Blog({
                    "title": title,
                    "date": date,
                    "body": body
                })
            );
        } catch(e) {
            console.log(error);
            setBlogInfo({...blogInfo, error: e });
        }
    }

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