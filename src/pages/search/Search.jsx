import React from 'react';
import SearchBar from './SearchBar';
import toTop from '../../hooks/toTop';

const Search = () => {
    toTop();
    return (
        <div>
            <SearchBar></SearchBar>
        </div>
    );
};

export default Search;