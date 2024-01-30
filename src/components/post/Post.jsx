// import React from 'react';
import { Link } from 'react-router-dom';
import posts from '../../constans/Data.json';
import './Post.css';  // Zorg ervoor dat het juiste pad naar je CSS-bestand is opgegeven

function Post() {
    return (
        <>
            <section className="postContainerOuter">
                <div className="inner-content-container">
                    {posts.map((post) => (
                        <div key={post.id} className="blog-post">
                            {/*<h2>Blogpost #{post.id}</h2>*/}
                            <p>{post.caption}</p>
                            <img src={post.imgPath} alt={post.caption} />
                            <p>Posted by: {post.postedBy}</p>

                            <p> Category: {post.categories}</p>
                            <Link to={`/blog/${post.id}`}>Go to profile</Link>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Post;