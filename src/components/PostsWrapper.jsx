import React from 'react'

import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';

import noUserImage from '../data/avatars/noimage.jpg';
// custom icons
import { OutlineHeart, FillHeart } from '../assets/CustomIcons';
import { OutlineComment } from '../assets/CustomIcons';
import { OutlineShare } from '../assets/CustomIcons';
import { OutlineSave, FillSave } from '../assets/CustomIcons';
import { VerifiedIcon } from '../assets/CustomIcons';

const PostsWrapper = ({ posts }) => {
    const { handleLike, handleSave } = useData();

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // Share Post
    const handleSharePost = async (post) => {
        try {
            if (navigator.share) {
                const shareData = {
                    title: `Checkout ${post.username}'s Post on Tangles`,
                    text: post.text,
                    url: `${window.location.origin}/${post.username}`,
                };

                // Check if the post has an image
                if (post.image) {
                    // Fetch the post image as a blob
                    const postImageBlob = await fetch(post.image).then((response) => response.blob());
                    // Create a File object for the post image
                    const postImageFile = new File([postImageBlob], `${post.username}-${post.id}.jpg`, { type: 'image/jpeg' });
                    // Add the post image to the share data
                    shareData.files = [postImageFile];
                }

                // Share post data along with the post image (if available)
                await navigator.share(shareData);

            } else {
                // Fallback for browsers that do not support the Web Share API
                alert('Sharing is not supported on this browser.');
            }
        } catch (error) {
            console.error('Error sharing post:', error);
        }
    };




    return (
        <>
            <div className="posts-wrapper">

                {posts.map((post) => (
                    <article className="post" key={post.id}>
                        <Link to={`/${post.username}`} className="post__side-avatar">
                            <img
                                className="post__user-avatar"
                                src={post.avatar ? post.avatar : noUserImage}
                                alt={post.username}
                            />
                        </Link>

                        <div className="post__content">
                            <Link to={`/${post.username}`} className="post__header">
                                <div className="post__user-info">
                                    <div className="post__username">{post.username}</div>
                                    <div className="post__user-verified">
                                        {post.verified ? <VerifiedIcon /> : null}
                                    </div>

                                </div>
                            </Link>



                            <p className="post__text">{post.text}</p>

                            {post.image
                                ? <div className="post__media">
                                    <img className="post__image" src={post.image} alt="" />
                                </div>
                                : null
                            }



                            {/* Actions */}
                            <div className="post__actions">
                                <button
                                    className="post__actions__btn"
                                    data-style="like"
                                    onClick={() => handleLike(post.id)}
                                >
                                    {!post.liked ? <OutlineHeart /> : <FillHeart />}
                                </button>

                                <button className="post__actions__btn"><OutlineComment /></button>

                                <button className="post__actions__btn" onClick={() => handleSharePost(post)}>
                                    <OutlineShare />
                                </button>

                                <button className="post__actions__btn" onClick={() => handleSave(post.id)}>
                                    {!post.saved ? <OutlineSave /> : <FillSave />}
                                </button>
                            </div>
                            <div className="post__likes">
                                {numberWithCommas(post.likes)} Likes
                            </div>

                        </div>
                    </article>
                ))}

            </div>


            {
                (posts.length === 0)
                    ? <div className="no-posts">No Posts Yet</div>
                    : null
            }
        </>

    )
}

export default PostsWrapper