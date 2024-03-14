// import React from 'react';
import {Link} from 'react-router-dom';
import './Post.css';
import SearchContext from "../../context/SearchContext.jsx";
import {useContext, useEffect, useRef, useState} from "react";
import useBlog from "../../hooks/useBlogPosts.jsx";
import html2canvas from 'html2canvas';
import {jsPDF} from "jspdf";
import {
    EmailShareButton, EmailIcon,
    RedditShareButton, RedditIcon,
    TelegramIcon, TelegramShareButton,
    WhatsappIcon, WhatsappShareButton, LinkedinShareButton, LinkedinIcon,
} from "react-share";
import UpVote from "../upVote/UpVote.jsx";


function Post() {

    //Hier komt de zoekterm uit de zoekbalk binnen
    const {searchQuery, setSearchQuery, handleChange} = useContext(SearchContext);
    //Hier komen alle blogs binnen uit de Hook

    const {blogPosts} = useBlog();

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
    }

    // ----- Lazy loading start -----
    const [visiblePosts, setVisiblePosts] = useState(3); // Het aantal zichtbare blogposts
    const containerRef = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            if (
                containerRef.current &&
                window.innerHeight + window.scrollY >= containerRef.current.offsetTop + containerRef.current.clientHeight
            ) {
                // Wanneer de gebruiker de onderkant van de pagina bereikt, voeg 3 extra posts toe
                setVisiblePosts(prevVisiblePosts => prevVisiblePosts + 3);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
// ----- Lazy loading end -----


    return (
        <>

            <section className="postContainerOuter" ref={containerRef} >
                <div className="inner-content-container">

                    <ul>{filteredPosts.map((post) => (
                        <article key={post.id}>
                        <li >
                            <div key={post.id} className="blog-post">
                                <h2>{post.caption}</h2>
                                <p>Posted by: {post.username}</p>

                                <img src={"data:image/png;base64," + post.fileContent} alt={post.caption}/>

                                <div className="postBottomOuterContainer">

                                    <div className="postInnerContainer1">
                                        <p> Category: {post.categories}</p>
                                        <p>Price: {post.price}</p>

                                        <p> Satisfied: {post.yesNoOption ? 'Yes' : 'No'}</p>

                                        <button className="downloadButton" onClick={capture}>Download</button>

                                        <Link to={`/ProfilePost/${post.id}`}><p className="postlink"> see post </p>
                                        </Link>
                                    </div>

                                    <div className="postInnerContainer2">
                                        <UpVote blogId={post.id}/>
                                    </div>


                                </div>
                            </div>

                            <div>
                                <WhatsappShareButton
                                    className="ShareIcon"
                                    url={`/ProfilePost/${post.id}`}
                                    quote={'Hey! have you seen this? i fount this nature blog on Natuurverhaal.nl'}
                                    hashtag="#muo"
                                >
                                    <WhatsappIcon size={32} round/>
                                </WhatsappShareButton>
                                <EmailShareButton
                                    className="ShareIcon"
                                    url={`/ProfilePost/${post.id}`}
                                    quote={'Hey! have you seen this? i found this on ConsumeGram'}
                                    hashtag="#muo"
                                >
                                    <EmailIcon size={32} round/>
                                </EmailShareButton>
                                <TelegramShareButton
                                    className="ShareIcon"
                                    url={`/ProfilePost/${post.id}`}
                                    quote={'Hey! have you seen this? i found this on ConsumeGram'}
                                    hashtag="#muo"
                                >
                                    <TelegramIcon size={32} round/>
                                </TelegramShareButton>
                                <RedditShareButton
                                    className="ShareIcon"
                                    url={`/ProfilePost/${post.id}`}
                                    quote={'Hey! have you seen this? i found this on ConsumeGram'}
                                    hashtag="#muo"
                                >
                                    <RedditIcon size={32} round/>
                                </RedditShareButton>
                                <LinkedinShareButton
                                    className="ShareIcon"
                                    url={`/ProfilePost/${post.id}`}
                                    quote={'Hey! have you seen this? i found this on ConsumeGram'}
                                    hashtag="#muo"
                                >
                                    <LinkedinIcon size={32} round/>
                                </LinkedinShareButton>


                            </div>
                        </li>
                        </article>
                    ))}

                    </ul>
                </div>

            </section>
        </>
    );
}

export default Post;