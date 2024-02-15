import { useState, useEffect } from 'react';
import axios from 'axios';

function useBlogPosts() {
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/blog-posts');
                setBlogPosts(response.data);
            } catch (error) {
                console.error('Error fetching blog posts:', error);
            }
        };

        fetchData();
    }, []);

    return {blogPosts};
}

export default useBlogPosts;