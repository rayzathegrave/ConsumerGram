import './MyPost.css';
import useBlog from "../../hooks/useBlogUser.jsx";
import {Link} from "react-router-dom";


function MyPost() {
    const {blogPostsUser} = useBlog();

    return (
        <>
            <div className="pimsouterbox">
                <section className="postContainerOuter">
                    <div className="inner-content-container">

                        <ul>{blogPostsUser.map((post) => (

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
            </div>
        </>
    );
}

export default MyPost;