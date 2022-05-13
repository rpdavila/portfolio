import React, {useEffect, useState} from "react";
import axios from "axios";

import BlogItems from "../../components/blog-items/blog-items.component";
import "./blog-page.styles.scss"

const BlogPage = () => { 
    const [postData, setPostData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            try {
                const response =  await axios.get('https://jsonplaceholder.typicode.com/posts')
                setPostData(response.data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false);
            }
        }
        getData()
    },[]);

    console.log(loading)
    return (
       <div className="project-page">

           {loading? (
               <div>Loading....</div>
           ):(postData.map((item, index)=>(
               <BlogItems key={index} items={item} />
           )))}
           {error && <div>{error}</div>}
       </div>
    );
}

export default BlogPage;