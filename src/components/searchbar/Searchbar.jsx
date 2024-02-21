import './Searchbar.css';
import {useEffect, useState} from "react";
import useBlogPosts from "../../hooks/useBlogPosts.jsx";

function Searchbar() {

    const { blogPosts } = useBlogPosts();

    const [searchTerm, setSearchTerm] = useState('');
    // Initialiseer filteredPosts met de blogposts
    const [filteredPosts, setFilteredPosts] = useState(blogPosts);

    const handleChange = (event) => {
        const newSearchTerm = event.target.value;
        setSearchTerm(newSearchTerm);

        // Filter de blogposts
        const filtered = blogPosts.filter(post =>
            post.title.toLowerCase().includes(newSearchTerm.toLowerCase()) ||
            post.price.toLowerCase().includes(newSearchTerm.toLowerCase()) ||
            post.content.toLowerCase().includes(newSearchTerm.toLowerCase()) ||
            post.username.toLowerCase().includes(newSearchTerm.toLowerCase())
        );
        setFilteredPosts(filtered);
    };

    // Update filteredPosts wanneer blogPosts verandert
    useEffect(() => {
        setFilteredPosts(blogPosts);
    }, [blogPosts]);


    return (
        <>
            <div className="search">
                <form action="">
                    <input className="searchbar" type="search" placeholder="Search ConsumerGram" value={searchTerm} onChange={handleChange}/>
                </form>
            </div>
        </>
    );
}

export default Searchbar;