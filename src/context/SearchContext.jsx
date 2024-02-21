import React, { createContext, useState, useEffect } from 'react';
import useBlog from "../hooks/useBlogPosts.jsx";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const { blogPosts } = useBlog();
    const [filteredPosts, setFilteredPosts] = useState(blogPosts);

    useEffect(() => {
        const filtered = blogPosts.filter(post =>
            post.caption.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.price.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.username.toLowerCase().includes(searchQuery.toLowerCase())


        );
        setFilteredPosts(filtered);
    }, [searchQuery, blogPosts]);

    const handleChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <SearchContext.Provider value={{searchQuery, setSearchQuery, handleChange, filteredPosts }}>
            {children}
        </SearchContext.Provider>
    );
};

export default SearchContext;