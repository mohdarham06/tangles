import React from 'react'

import { useEffect, useState } from "react"

import userProfiles from '../data/userProfiles';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, SetSearchResults] = useState([]);

    const handleSearch = (query) => {
        setSearchQuery(query)
    }

    return (

        <section className='section section--search'>
            <div>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                />
            </div>
        </section>
    )
}

export default Search