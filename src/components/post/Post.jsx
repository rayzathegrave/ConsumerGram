// import React from 'react';
import {Link} from 'react-router-dom';
// import posts from '../../constans/Data.json';
import './Post.css';
import useProfileImage from "../../hooks/useProfileImage.jsx";
import useBlogPosts from "../../hooks/useBlogPosts.jsx";  // Zorg ervoor dat het juiste pad naar je CSS-bestand is opgegeven
import SearchContext from "../../context/SearchContext.jsx";
import {useContext} from "react";


function Post() {
    // const {blogPosts} = useBlogPosts();
    // const {handleFileChange, uploadImage, profileImage} = useProfileImage();
    // console.log(blogPosts)

    const {filteredPosts} = useContext(SearchContext);

    //
    // const filtered = blogPosts.filter((post) => {
    //     post.caption.toLowerCase().includes(searchQuery.toLowerCase())
    // });



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