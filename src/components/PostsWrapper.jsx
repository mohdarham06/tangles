import React from 'react'

import { Link } from 'react-router-dom';

import noUserImage from '../data/avatars/noimage.jpg';
// custom icons
import { OutlineHeart, FillHeart } from '../assets/CustomIcons';
import { OutlineComment } from '../assets/CustomIcons';
import { OutlineShare } from '../assets/CustomIcons';
import { OutlineSave, FillSave } from '../assets/CustomIcons';
import { VerifiedIcon } from '../assets/CustomIcons';

const PostsWrapper = ({ posts, setPosts }) => {
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // Like
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
                    // No update
                    : post
            )
        });
    };

    // Save
    const handleSave = (postId) => {
        setPosts((prevPosts) => {
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


    return (
        <div className="posts-wrapper">

            {posts.map((post) => (
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
                            ? <div className="post__media">
                                <img className="post__image" src={post.image} alt="" />
                            </div>
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
    )
}

export default PostsWrapper