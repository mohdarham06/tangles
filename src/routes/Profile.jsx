import React from 'react'

import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

import NotFound from './NotFound';
import userProfiles from '../data/userProfiles';
import userPosts from '../data/userPosts'
import { VerifiedIcon } from '../assets/CustomIcons';
import noUserImage from '../data/avatars/noimage.jpg';




import PostsWrapper from '../components/PostsWrapper';




const Profile = () => {
    const { profileName } = useParams();
    const filteredProfile = (username) => {
        return userProfiles.find((profile) => profile.username === username);
    }
    const [profile, setProfile] = useState(filteredProfile(profileName));

    const [profilePosts, setProfilePosts] = useState(
        userPosts.filter((post) => post.username === profile?.username)
    );

    const [postType, setPostType] = useState('posts');

    const switchPostType = (type) => {
        setPostType(type)
    }

    useEffect(() => {
        if (postType === 'posts') {
            const filteredPosts = userPosts.filter((post) => post.username === profile?.username);
            setProfilePosts(filteredPosts);

        } else if (postType === 'videos') {
            const filteredVideos = userPosts.filter((post) => post.username === profile?.username && post.liked);
            setProfilePosts(filteredVideos);
        }
    }, [postType, profile]);


    // Follow
    const handleFollow = () => {
        setProfile((prevProfile) => ({
            ...prevProfile,
            followers: profile.isFollowing ? (profile.followers - 1) : (profile.followers + 1),
            isFollowing: !profile.isFollowing
        }))
    };


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
                                        handleFollow()
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
                            <div className="profile__post__nav">



                                <div
                                    className="profile__post__nav__type"
                                    onClick={() => switchPostType('posts')}
                                >
                                    <span className={
                                        `post__nav__type__text ${postType === 'posts' ? "active" : "inactive"}`
                                    }>Posts</span>
                                </div>

                                <div
                                    className="profile__post__nav__type"
                                    onClick={() => switchPostType('videos')}
                                >
                                    <span className={
                                        `post__nav__type__text ${postType === 'videos' ? "active" : "inactive"}`
                                    }>Videos</span>
                                </div>
                            </div>




                            {/* Posts */}
                            <PostsWrapper
                                posts={profilePosts}
                                setPosts={setProfilePosts}
                            />

                            {
                                (profilePosts.length === 0)
                                    ? <div className="no-posts">No Posts Yet</div>
                                    : null
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