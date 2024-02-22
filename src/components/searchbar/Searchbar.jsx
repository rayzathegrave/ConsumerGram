import React, {useContext, useState} from 'react';
import SearchContext from './../../context/SearchContext.jsx';
import useBlog from "../../hooks/useBlogPosts.jsx";

const Searchbar = () => {
    const {searchQuery, setSearchQuery} = useContext(SearchContext);

    const handleChange = (event) => {
        setSearchQuery(event.target.value);

    };

    return (

        <div className="search">
            <form action="">
                <input className="searchbar" placeholder="Search ConsumerGram" type="text" value={searchQuery}
                       onChange={handleChange}/>

            </form>
        </div>


    );
};

export default Searchbar;