// import React from 'react';
import {Link} from 'react-router-dom';
import './Post.css';
import useProfileImage from "../../hooks/useProfileImage.jsx";
import SearchContext from "../../context/SearchContext.jsx";
import {useContext, useEffect, useState} from "react";
import useBlog from "../../hooks/useBlogPosts.jsx";


function Post() {

    //Hier komt de zoekterm uit de zoekbalk binnen
    const { searchQuery, setSearchQuery, handleChange } = useContext(SearchContext);
    //Hier komen alle blogs binnen uit de Hook

    const { blogPosts } = useBlog();

    // Omkeren van de blogPostsAll array zodat de nieuwe blogposts bovenaan komen te staan
    const reversedPosts = blogPosts.slice().reverse();

    // Hier worden alle blogs door een filter gehaald
    useEffect(() => {
    if (blogPosts) {
        const reversedPosts = blogPosts.slice().reverse();
        const filtered = reversedPosts.filter(post =>
            post.caption.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.price.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (Array.isArray(post.categories) && post.categories.some(category =>
                (post.yesNoOption ? 'yes' : 'no').includes(searchQuery.toLowerCase()) ||
                category.toLowerCase().includes(searchQuery.toLowerCase())
            ))
        );

        setFilteredPosts(filtered);
    }
}, [searchQuery, blogPosts]);

    //Hier worden de gefilterde blogs in een state gezet om te kunnen worden gebruikt in de tekst
    const [filteredPosts, setFilteredPosts] = useState(reversedPosts);





    return (
        <>
            <section className="postContainerOuter">
                <div className="inner-content-container">

                    <ul>{filteredPosts.map((post) => (

                        <div key={post.id} className="blog-post">
                            <h2>{post.caption}</h2>
                            <p>Posted by: {post.username}</p>

                            <img src={"data:image/png;base64," + post.fileContent} alt={post.caption}/>

                            <p> Category: {post.categories}</p>
                            <p>Price: {post.price}</p>

                            <p> Satisfied: {post.yesNoOption ? 'Yes' : 'No'}</p>

                            <Link to={`/ProfilePost/${post.id}`}><p className="postlink"> see post </p></Link>

                        </div>
                    ))}
                    </ul>
                </div>

            </section>
        </>
    );
}

export default Post;