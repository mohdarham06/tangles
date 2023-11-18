import React from 'react'

import { useState } from 'react';

import user1avatar from '../assets/images/jasonstotham.jpg';
import user1post1 from '../assets/images/jasonstothampost1.jpg';
import user1post2 from '../assets/images/jasonstothampost2.jpg';

import { OutlineHeart, FillHeart } from '../assets/CustomIcons';
import { OutlineComment } from '../assets/CustomIcons';
import { OutlineShare } from '../assets/CustomIcons';
import { OutlineSave, FillSave } from '../assets/CustomIcons';

const Home = () => {


    const [posts, setPosts] = useState([
        {
            id: 1,
            username: 'mohdarham',
            verified: true,
            avatar: user1avatar,
            image: null,
            text: 'I do not believe in tired.\n\nI do not believe in low energy.\n\nI AM BINARY.\n\nI am either AWAKE or I AM ASLEEP.\n\nDo you understand?',
            liked: false,
            likes: 2548257,
            saved: false,
            comments: [
                {
                    id: 101,
                    username: 'user1',
                    text: 'Amazing shot!',
                },
                // More comments...
            ],
        },
        
        {
            id: 2,
            username: 'jasonstotham',
            verified: true,
            avatar: user1avatar,
            image: user1post1,
            text: 'Shanghai 🇨🇳',
            liked: false,
            likes: 4548257,
            saved: true,
            comments: [
                {
                    id: 101,
                    username: 'user1',
                    text: 'Amazing shot!',
                },
                // More comments...
            ],
        },
        {
            id: 3,
            username: 'jasonstotham',
            verified: true,
            avatar: user1avatar,
            image: user1post2,
            text: '#Meg2 #freedive 📸@danielsmithphotography',
            liked: false,
            likes: 1297324,
            saved: false,
            comments: [
                {
                    id: 201,
                    username: 'user2',
                    text: 'Awesome freediving!',
                },
                // More comments...
            ],
        },
        // More posts...
    ]);

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const handleLike = (postId) => {
        setPosts((prevPosts) =>
            prevPosts.map((post) =>
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
        );
    };

    const handleSave = (postId) => {
        setPosts((prevPosts) =>
            prevPosts.map((post) =>
                (post.id === postId)
                    // Update post
                    ? {
                        ...post,
                        saved: !post.saved
                    }
                    // No modification
                    : post
            )
        );
    };


    return (
        <section id='home' className='section section--home'>
            <div className="posts-wrapper">

                {posts.map((post) => (
                    <article className="post" key={post.id}>
                        <div className="post__header">
                            <img className="post__user-avatar" src={post.avatar} alt={post.username} />

                            <div className="post__user-info">
                                <div className="post__username">{post.username}</div>
                            </div>
                        </div>

                        <div className="post__content">
                            <p className="post__text">{post.text}</p>
                            {post.image ?
                                <img className="post__image" src={post.image} alt={post.username} />
                                : null
                            }
                        </div>

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