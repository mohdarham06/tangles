import React from 'react'

import { useState } from 'react';
import { Link } from 'react-router-dom';

import userPosts from '../data/userPosts';
import noUserImage from '../data/avatars/noimage.jpg';

import { OutlineHeart, FillHeart } from '../assets/CustomIcons';
import { OutlineComment } from '../assets/CustomIcons';
import { OutlineShare } from '../assets/CustomIcons';
import { OutlineSave, FillSave } from '../assets/CustomIcons';
import { VerifiedIcon } from '../assets/CustomIcons';

const Home = () => {
    const [posts, setPosts] = useState(userPosts);

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const handleLike = (postId) => {
        setPosts((prevPosts) => {
            return prevPosts.map((post) =>
                (post.id === postId)
                    // Update post
                    ? {
                        ...post,
                        likes: post.liked ? (post.likes - 1) : (post.likes + 1),
                        liked: !post.liked
                    }
                    // No modification
                    : post
            )
        });
    };

    const handleSave = (postId) => {
        setPosts((prevPosts) => {
            return prevPosts.map((post) =>
                (post.id === postId)
                    // Update post
                    ? {
                        ...post,
                        saved: !post.saved
                    }
                    // No modification
                    : post
            )
        });
    };


    return (
        <section id='home' className='section section--home'>
            <div className="posts-wrapper">

                {posts.map((post) => (
                    <article className="post" key={post.id}>
                        {/* Header */}
                        <Link to={`/${post.username}`} className="post__header">
                            <img className="post__user-avatar" src={post.avatar ? post.avatar : noUserImage} alt={post.username} />

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
                            {
                                post.image ? <img src={post.image} alt="" />
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





        </section>

    )
}

export default Home