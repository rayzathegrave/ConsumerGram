import './MyPost.css';
import useBlog from "../../hooks/useBlogUser.jsx";
import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import SearchContext from "../../context/SearchContext.jsx";


function MyPost() {
    const {blogPostsUser} = useBlog();

    //Telt hoeveel blogs de user heeft
    const totalPosts = blogPostsUser.length;

    //Hier komt de zoekterm uit de zoekbalk binnen
    const {searchQuery, setSearchQuery} = useContext(SearchContext);

    // Filter en keer de blogposts om
    // const [filteredPosts, setFilteredPosts] = useState([]);

    const reversedPosts = blogPostsUser.slice().reverse();

    useEffect(() => {
        if (blogPostsUser) {
            const reversedPosts = blogPostsUser.slice().reverse();
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
    }, [searchQuery, blogPostsUser]);

    //Hier worden de gefilterde blogs in een state gezet om te kunnen worden gebruikt in de tekst
    // const [filteredPosts, setFilteredPosts] = useState(reversedPosts);\

    const [filteredPosts, setFilteredPosts] = useState(reversedPosts);









    return (
        <>
            <div className="pimsouterbox">
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
            </div>
        </>
    );
}

export default MyPost;