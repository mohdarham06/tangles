import React from 'react'

import { useState } from "react"
import { Link } from 'react-router-dom';
import { OutlineSearch, VerifiedIcon } from '../assets/CustomIcons'
import userProfiles from '../data/userProfiles';
import noUserImage from '../data/avatars/noimage.jpg';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, SetSearchResults] = useState(userProfiles);

    const handleSearch = (query) => {
        setSearchQuery(query)
        const filteredUsers = userProfiles.filter((user) => {
            const usernameMatch = user.username.toLowerCase().includes(query.toLowerCase());
            const nameMatch = user.name.toLowerCase().includes(query.toLowerCase());
            return usernameMatch || nameMatch;
        })
        SetSearchResults(filteredUsers)
    }

    const handleFollow = (userId) => {
        SetSearchResults((prevUsers) => {
            return prevUsers.map((user) =>
                (user.username === userId)
                    // Update
                    ? {
                        ...user,
                        followers: user.isFollowing ? (user.followers - 1) : (user.followers + 1),
                        isFollowing: !user.isFollowing
                    }
                    // No Update
                    : user
            )
        });
    };


    const formatNumberScale = (number) => {
        if (number >= 1e12) {
            return `${Math.floor(number / 1e12)}T`; // Convert to trillions
        } else if (number >= 1e9) {
            return `${Math.floor(number / 1e9)}B`; // Convert to billions
        } else if (number >= 1e6) {
            return `${Math.floor(number / 1e6)}M`; // Convert to millions
        } else if (number >= 1e4) {
            return `${Math.floor(number / 1e3)}K`; // Convert to thousands
        } else {
            return `${number}`; // Keep it as is if less than 10,000
        }
    };

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (

        <section className='section section--search'>
            <div className="search">
                <div className="search__input-container">
                    <label className="search__label" htmlFor="searchInput">
                        <div className="search__icon">
                            <OutlineSearch />
                        </div>
                        <input
                            className="search__input"
                            id="searchInput"
                            type="text"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={(e) => handleSearch(e.target.value)}
                        />
                        <div className="search__icon search__icon--clear">
                            x
                        </div>
                    </label>
                </div>





                <div className="search__results">
                    {searchResults.length === 0 ? (
                        <div className="search__results__empty">No results found.</div>
                    ) : (
                        searchResults.map((user) => (
                            <Link
                                className="user"
                                to={`/${user.username}`}
                                key={user.username}
                            >
                                <div className="user__avatar-box">
                                    <img
                                        className="user__avatar"
                                        src={user.avatar ? user.avatar : noUserImage}
                                        alt={user.username}
                                    />
                                </div>

                                <div className="user__info">
                                    <div className="user__header">
                                        <div className="user__names-box">
                                            <div className="user__username">
                                                {user.username}
                                                <span className="user__verified">
                                                    {user.verified ? <VerifiedIcon /> : null}
                                                </span>
                                            </div>
                                            <div className="user__name">{user.name}</div>
                                        </div>


                                        <div
                                            className="user__follow-btn"
                                            onClick={(e) => {
                                                e.preventDefault()
                                                handleFollow(user.username)
                                            }}
                                        >
                                            {!user.isFollowing
                                                ? <div>Follow</div>
                                                : <div className="following">Following</div>
                                            }
                                        </div>
                                    </div>


                                    <div className="user__followers">
                                        {numberWithCommas(formatNumberScale(user.followers))} followers
                                    </div>
                                </div>

                            </Link>
                        ))
                    )}
                </div>


            </div>
        </section>
    )
}

export default Search