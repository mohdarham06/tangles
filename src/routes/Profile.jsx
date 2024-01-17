import React from 'react'

import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

import NotFound from './NotFound';
import { VerifiedIcon } from '../assets/CustomIcons';
import noUserImage from '../data/avatars/noimage.jpg';


import { useData } from '../context/DataContext';
import PostsWrapper from '../components/PostsWrapper';


const Profile = () => {
    const {
        handleFollow,
        setProfileUsername,
        profile, profilePosts, userLikedPosts
    } = useData();

    const { profileName } = useParams();

    useEffect(() => {
        setProfileUsername(profileName)
    }, [profileName])


    const [postType, setPostType] = useState('posts');

    const switchType = (type) => {
        setPostType(type)
    }





    // Share Profile
    const handleShare = async () => {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: profile.name,
                    text: `Check out ${profile.name}'s profile on our app!`,
                    url: window.location.href,
                });
            } else {
                // Fallback for browsers that do not support the Web Share API
                alert('Sharing is not supported on this browser.');
            }
        } catch (error) {
            console.error('Error sharing:', error);
        }
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
        <>
            {profile ?
                <section className='section section--profile'>
                    <div className="profile">
                        <div className="profile__information">
                            {/* identity */}
                            <div className="profile__identity">
                                <div className="profile__">
                                    <h2 className="profile__name">
                                        {profile.name}
                                        <span className="profile__verified">
                                            {profile.verified ? <VerifiedIcon /> : null}
                                        </span>
                                    </h2>
                                    <div className="profile__username">{`@${profile.username}`}</div>
                                </div>

                                <div className="profile__avatar-box">
                                    <img
                                        className="profile__avatar"
                                        src={profile.avatar ? profile.avatar : noUserImage}
                                        alt={profile.username}
                                    />
                                </div>
                            </div>

                            {/* bio */}
                            <div className="profile__bio">{profile.bio}</div>

                            {/* stats */}
                            <div className="profile__stats">
                                <div className="stats__stat stats__followers">
                                    <div className="stat__count">
                                        {numberWithCommas(formatNumberScale(profile.followers))}
                                    </div>
                                    <div className="stat__label">followers</div>
                                </div>
                                <div className="stats__stat stats__following">
                                    <div className="stat__count">{profile.following}</div>
                                    <div className="stat__label">following</div>
                                </div>
                            </div>

                            {/* actions */}
                            <div className="profile__actions">
                                <div
                                    className={`profile__actions-btn 
                                    ${!profile.isFollowing ? "profile__follow-btn" : "profile__follow-btn--following"}`
                                    }
                                    onClick={(e) => {
                                        e.preventDefault()
                                        handleFollow(profile.username)
                                    }}
                                >
                                    {!profile.isFollowing
                                        ? <div>Follow</div>
                                        : <div>Following</div>
                                    }
                                </div>
                                <div
                                    className="profile__actions-btn profile__share-btn"
                                    onClick={() => handleShare()}
                                >Share profile</div>
                            </div>
                        </div>





                        {/* content */}
                        <div className="profile__posts">

                            <div className="page-type__nav">
                                <div
                                    className="page-type__nav__btn"
                                    onClick={() => switchType('posts')}
                                >
                                    <span className={`page-type__nav__btn__text ${postType === 'posts' ? "active" : "inactive"}`}
                                    >Posts</span>
                                </div>
                                <div
                                    className="page-type__nav__btn"
                                    onClick={() => switchType('liked')}
                                >
                                    <span className={`page-type__nav__btn__text ${postType === 'liked' ? "active" : "inactive"}`}
                                    >Liked</span>
                                </div>
                            </div>




                            {/* Posts */}
                            {
                                postType === 'posts' ?
                                    <PostsWrapper
                                        posts={profilePosts}
                                    /> :
                                    <PostsWrapper
                                        posts={userLikedPosts}
                                    />
                            }

                        </div>

                    </div>
                </section>
                :
                <NotFound />
            }


        </>

    )
}

export default Profile