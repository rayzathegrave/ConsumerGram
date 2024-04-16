import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './upvote.css';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContextProvider.jsx';

function UpVote({ blogId }) {
    const [upvotes, setUpvotes] = useState(0);
    const token = localStorage.getItem('token');
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchUpvotes = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/blog-posts/${blogId}/upvotes`);
                setUpvotes(response.data);
                console.log("response log", response.data);
            } catch (error) {
                console.error('Error fetching upvotes', error);
            }
        };

        fetchUpvotes();
    }, [blogId]);

    const handleUpvote = async () => {
        const inputUpvoteDto = {
            username: `${user.username}`,
            blogPostId: blogId,
        };

        try {
            await axios.post('http://localhost:8080/upvotes', inputUpvoteDto, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            // After the POST request, make a GET request to fetch the actual new data
            const response = await axios.get(`http://localhost:8080/blog-posts/${blogId}/upvotes`);
            // Update the state with the actual number of upvotes returned from the server
            setUpvotes(response.data);
        } catch (error) {
            console.error('Error upvoting blog post', error);
        }
    };

    return (
        <>
            <div>
                <button type="button" className="upvoteButton" onClick={handleUpvote}>
                    {upvotes} Upvote
                </button>
            </div>
        </>
    );
}

export default UpVote;