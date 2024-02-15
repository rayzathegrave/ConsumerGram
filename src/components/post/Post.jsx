// import React from 'react';
import {Link} from 'react-router-dom';
// import posts from '../../constans/Data.json';
import './Post.css';
import useProfileImage from "../../hooks/useProfileImage.jsx";
import useBlogPosts from "../../hooks/useBlogPosts.jsx";  // Zorg ervoor dat het juiste pad naar je CSS-bestand is opgegeven


function Post() {
    const {blogPosts} = useBlogPosts();
    // const {handleFileChange, uploadImage, profileImage} = useProfileImage();


    return (
        <>
            <section className="postContainerOuter">
                <div className="inner-content-container">

                    <ul>{blogPosts.map((post) => (

                        <div key={post.id} className="blog-post">
                            <h2>{post.caption}</h2>
                            <p>Posted by: {post.username}</p>



                            {/*<img src={post.imgPath} alt={post.caption}/>*/}


                            <p> Category: {post.categories}</p>

                            {/*<Link to={`/blog/${post.id}`}>Go to profile</Link>*/}

                        </div>
                    ))}
                    </ul>
                </div>

            </section>
        </>
    );
}

export default Post;