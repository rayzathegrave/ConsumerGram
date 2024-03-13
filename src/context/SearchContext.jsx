import React, { createContext, useState, useEffect } from 'react';


const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <SearchContext.Provider value={{searchQuery, setSearchQuery, handleChange}}>
            {children}
        </SearchContext.Provider>
    );
};

export default SearchContext;
