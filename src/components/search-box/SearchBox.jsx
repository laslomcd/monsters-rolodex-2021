import React from 'react';

import './searchbox.css';

const SearchBox = ({ handleChange, placeholder }) => {
    return (
        <div className="search-box">
            <input
                onChange={handleChange}
                type="search"
                className="search"
                placeholder={placeholder} />
        </div>
    )
};

export default SearchBox;