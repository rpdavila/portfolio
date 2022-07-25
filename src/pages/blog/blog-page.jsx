import React from "react";
import useFetchBlogData from "../../custom-hooks/query";

import BlogItems from "../../components/blog-items/blog-items.component";
import "./blog-page.styles.scss"


const BlogPage = () => { 
    const [data, loading, error] = useFetchBlogData();  
    return (
       <div className="blog-page">
            {error? <>unauthorized</>: null}
            {loading? (
                <div>Loading....</div>
            ):(
                data.map((item, index)=>(
                    <BlogItems key={index} items={item} />
                )))
            }
           
       </div>
    );
}

export default BlogPage;