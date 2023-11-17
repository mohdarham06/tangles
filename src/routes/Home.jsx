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


    const [instagramPosts, setInstagramPosts] = useState([
        {
            id: 1,
            username: 'jasonstotham',
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
            id: 2,
            username: 'jasonstotham',
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


    const handleLike = (postId) => {
        setInstagramPosts((prevPosts) =>
            prevPosts.map((post) =>
                (post.id === postId)
                    ? { ...post, likes: post.liked ? post.likes - 1 : post.likes + 1, liked: !post.liked }
                    : post
            )
        );
    };

    const handleSave = (postId) => {
        setInstagramPosts((prevPosts) =>
            prevPosts.map((post) =>
                post.id === postId
                    ? { ...post, saved: !post.saved }
                    : post
            )
        );
    };


    return (
        <section id='home' className='section section--home'>
            <div className="posts-wrapper">

                {instagramPosts.map((post) => (
                    <article className="post" key={post.id}>
                        <div className="post__header">
                            <img className="post__user-avatar" src={post.avatar} alt={post.username} />

                            <div className="post__user-info">
                                <div className="post__username">{post.username}</div>
                            </div>
                        </div>

                        <div className="post__content">
                            <p className="post__text">{post.text}</p>
                            <img className="post__image" src={post.image} alt="" />
                        </div>

                        <div className="post__actions">
                            <button className="post__actions__btn" onClick={() => handleLike(post.id)}>
                                {!post.liked ? <FillHeart /> : <OutlineHeart />}
                            </button>

                            <button className="post__actions__btn"><OutlineComment /></button>
                            <button className="post__actions__btn"><OutlineShare /></button>

                            <button className="post__actions__btn" onClick={() => handleSave(post.id)}>
                                {!post.saved ? <OutlineSave /> : <FillSave />}
                            </button>
                        </div>

                        <div className="post__likes">
                            {post.likes} Likes
                        </div>
                    </article>
                ))}

            </div>





        </section>

    )
}

export default Home