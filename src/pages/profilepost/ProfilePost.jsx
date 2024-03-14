import "./ProfilePost.css";
import {Link, useParams} from "react-router-dom";
import useBlogPosts from "../../hooks/useBlogPosts.jsx";

function profilePost() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {id} = useParams(); // Haal het ID uit de URL-parameters
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {blogPosts} = useBlogPosts();
    const post = blogPosts.find(post => post.id.toString() === id); // Zoek de blogpost met het overeenkomende ID


    if (!post) {
        return <div>Blogpost niet gevonden</div>; // Toon een foutmelding als de blogpost niet wordt gevonden
    }


    return (
        <>
            <article className="postContainerOuterSolo">
                <section className="inner-content-containerSolo">

                    <div className="blog-post-solo">
                        <h2>{post.caption}</h2>
                        <p>Posted by: {post.username}</p>

                        <img src={"data:image/png;base64," + post.fileContent} alt={post.caption}/>

                        <p> Category: {post.categories}</p>

                        <p> Satisfied: {post.yesNoOption ? 'Yes' : 'No'}</p>

                        <p>Price: {post.price}</p>


                        <Link to={`/PublicProfile/${post.username}`}><p>Visit the profile of this consumer</p> </Link>

                    </div>

                </section>
            </article>
        </>
    );
}

export default profilePost;