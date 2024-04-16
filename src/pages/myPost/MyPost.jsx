import './MyPost.css';
import useBlog from "../../hooks/useBlogUser.jsx";
import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import SearchContext from "../../context/SearchContext.jsx";
import axios from "axios";
import {AuthContext} from "../../context/AuthContextProvider.jsx";
import html2canvas from "html2canvas";
import {jsPDF} from "jspdf";


function MyPost() {
    const {blogPostsUser} = useBlog();

    //Telt hoeveel blogs de user heeft
    const totalPosts = blogPostsUser.length;

    const {user} = useContext(AuthContext);

    //Hier komt de zoekterm uit de zoekbalk binnen
    const {searchQuery, setSearchQuery} = useContext(SearchContext);

    // Filter en keer de blogposts om
    // const [filteredPosts, setFilteredPosts] = useState([]);

    const reversedPosts = blogPostsUser.slice().reverse();
    const token = localStorage.getItem("token")

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

    const handleDelete = (postId) => {
        console.log(postId)
        axios.delete(`http://localhost:8080/blog-posts/${user.username}/${postId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                console.log('Post deleted successfully');
                window.location.reload();
            })
            .catch(error => {
                console.error('Error deleting post:', error);
            })
    };

    const capture = () => {
        const element = document.querySelector('.blog-post');

        html2canvas(element)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                const imgWidth = 210; // A4 size: 210mm x 297mm
                const imgHeight = (canvas.height * imgWidth) / canvas.width;
                pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
                pdf.save('myposts.pdf');
            })
            .catch((error) => {
                console.error('Error capturing canvas', error);
            });
    };



    return (
        <>
            <main className="pimsouterbox">
                <article className="postContainerOuter">

                    <section className="inner-content-container">

                        <ul>{filteredPosts.map((post) => (

                            <li key={post.id} className="blog-post">
                                <h2>{post.caption}</h2>
                                <p>Posted by: {post.username}</p>

                                <img src={"data:image/png;base64," + post.fileContent} alt={post.caption}/>

                                <p> Category: {post.categories}</p>
                                <p>Price: {post.price}</p>

                                <p> Satisfied: {post.yesNoOption ? 'Yes' : 'No'}</p>

                                <Link to={`/ProfilePost/${post.id}`}><p className="postlink"> see post </p></Link>

                                <form onSubmit={(e) => { e.preventDefault(); handleDelete(post.id) }}>
                                    <button type="submit" className="simpleButtonsRemove1">Delete post</button>
                                </form>
                                <button type="button" className="downloadButton" onClick={capture}>Download</button>
                            </li>
                        ))}
                        </ul>
                    </section>

                </article>
            </main>
        </>
    );
}

export default MyPost;