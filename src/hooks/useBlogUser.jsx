import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {AuthContext} from "./../context/AuthContextProvider.jsx";

// Deze hook haalt de blog posts op en geeft deze door aan de andere pagina`s waar nodig

function useBlogPosts() {
    const [blogPostsUser, setBlogPosts] = useState([]);

    const {user} = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/blog-posts/${user.username}`);
                setBlogPosts(response.data);
            } catch (error) {
                console.error('Error fetching blog posts:', error);
            }
        };

        fetchData();
    }, []);

    return { blogPostsUser };
}

export default useBlogPosts;