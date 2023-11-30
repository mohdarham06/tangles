import React from 'react'

import { useState } from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import NotFound from './NotFound';

import userProfiles from '../data/userProfiles';
import userPosts from '../data/userPosts'
import { VerifiedIcon } from '../assets/CustomIcons';
import noUserImage from '../data/avatars/noimage.jpg';


import { OutlineHeart, FillHeart } from '../assets/CustomIcons';
import { OutlineComment } from '../assets/CustomIcons';
import { OutlineShare } from '../assets/CustomIcons';
import { OutlineSave, FillSave } from '../assets/CustomIcons';

import { Outlet } from 'react-router-dom'




const Profile = () => {
    const { profileName } = useParams();
    const filteredProfile = (username) => {
        return userProfiles.find((profile) => profile.username === username);
    }
    const [profile, setProfile] = useState(
        filteredProfile(profileName) ? filteredProfile(profileName) : undefined
    );
    const [profilePosts, setProfilePosts] = useState(
        profile ? userPosts.filter((post) => post.username === profile.username) : null
    );



    // Follow
    const handleFollow = () => {
        setProfile((prevProfile) => ({
            ...prevProfile,
            followers: profile.isFollowing ? (profile.followers - 1) : (profile.followers + 1),
            isFollowing: !profile.isFollowing
        }))
    };

    // Like
    const handleLike = (postId) => {
        setProfilePosts((prevPosts) => {
            return prevPosts.map((post) =>
                (post.id === postId)
                    // Update post
                    ? {
                        ...post,
                        likes: post.liked ? (post.likes - 1) : (post.likes + 1),
                        liked: !post.liked
                    }
                    // No update
                    : post
            )
        });
    };

    // Save
    const handleSave = (postId) => {
        setProfilePosts((prevPosts) => {
            return prevPosts.map((post) =>
                (post.id === postId)
                    // Update post
                    ? {
                        ...post,
                        saved: !post.saved
                    }
                    // No update
                    : post
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
        <>
            {profile ?
                <section className='section section--profile'>
                    <div className="profile">
                        {/* header */}
                        <div className="profile__header">
                            <div className="profile__info">
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
                                className={`profile__actions-btn ${!profile.isFollowing ? "profile__follow-btn" : "profile__follow-btn--following"}`}
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
                            <div className="profile__actions-btn profile__share-btn">Share profile</div>
                        </div>

                        {/* content */}
                        <div className="profile__content">
                            <div className="profile__content__header">
                                <Link to={`/${profile.username}`}>
                                    <div className="content__header__type active">Posts</div>
                                </Link>
                                <Link to={`/${profile.username}/videos`}>
                                    <div className="content__header__type inactive">Videos</div>
                                </Link>
                            </div>





                            {/* Posts */}
                            <div className="posts-wrapper">
                                {profilePosts.map((post) => (
                                    <article className="post" key={post.id}>
                                        {/* Header */}
                                        <Link to={`/${post.username}`} className="post__header">
                                            <img
                                                className="post__user-avatar"
                                                src={post.avatar ? post.avatar : noUserImage}
                                                alt={post.username}
                                            />

                                            <div className="post__user-info">
                                                <div className="post__username">{post.username}</div>
                                                <div className="post__user-verified">
                                                    {post.verified ? <VerifiedIcon /> : null}
                                                </div>

                                            </div>
                                        </Link>

                                        {/* Content */}
                                        <div className="post__content">
                                            <p className="post__text">{post.text}</p>
                                            {post.image
                                                ? <img className="post__image" src={post.image} alt="" />
                                                : null
                                            }
                                        </div>

                                        {/* Actions */}
                                        <div className="post__actions">
                                            <button className="post__actions__btn" onClick={() => handleLike(post.id)}>
                                                {!post.liked ? <OutlineHeart /> : <FillHeart />}
                                            </button>

                                            <button className="post__actions__btn"><OutlineComment /></button>
                                            <button className="post__actions__btn"><OutlineShare /></button>

                                            <button className="post__actions__btn" onClick={() => handleSave(post.id)}>
                                                {!post.saved ? <OutlineSave /> : <FillSave />}
                                            </button>
                                        </div>
                                        <div className="post__likes">
                                            {numberWithCommas(post.likes)} Likes
                                        </div>
                                    </article>
                                ))}

                            </div>

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