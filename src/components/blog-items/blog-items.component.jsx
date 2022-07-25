import React from "react";

import './blog-items.styles.scss'

const BlogItems = ({items})=> {
    const {title, body, createdAt} = items;

    return (
        <div className={'blog-items-card'}>
            <div className={'blog-items-header'}>
                <h3 className={'blog-items-title'}>Title: {title}</h3>
                <h3 className={'blog-items-date'}>date: {createdAt}</h3>
            </div>
            <p className="body">{body}</p>
        </div>
    )
}

export default BlogItems;