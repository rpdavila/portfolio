import {useState, useEffect} from "react";
import {API, graphqlOperation} from "aws-amplify";
import { listBlogs } from "../graphql/queries";


const useFetchBlogData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const getBlogData = async () => {
            try {
                setLoading(true);
                const getData = await API.graphql(graphqlOperation(listBlogs)); 
                setData(getData.data.listBlogs.items);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        getBlogData();
    }, []);

    return [data, loading, error];
}

export default useFetchBlogData;