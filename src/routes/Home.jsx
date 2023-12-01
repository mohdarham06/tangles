import React from 'react'

import { useState, useEffect } from 'react';

import userProfiles from '../data/userProfiles';
import userPosts from '../data/userPosts';
import PostsWrapper from '../components/PostsWrapper';


const Home = () => {
    const [posts, setPosts] = useState(userPosts);
    const [postType, setPostType] = useState('foryou');

    const switchPostType = (type) => {
        setPostType(type)
    }


    useEffect(() => {
        if (postType === 'foryou') {
            const shuffledPosts = userPosts.sort(() => Math.random() - 0.5);
            setPosts(shuffledPosts);

            // do this
        } else if (postType === 'following') {
            const followingPosts = userPosts.filter(
                (post) => userProfiles.find(
                    (profile) => profile.username === post.username
                )?.isFollowing
            )
            setPosts(followingPosts)
        }
    }, [postType])


    return (
        <section id='home' className='section section--home'>
            <div className="home">
                <div className="home__header">
                    <div className="home__post__nav">
                        <div
                            className="home__post__nav__btn"
                            onClick={() => switchPostType('foryou')}
                        >
                            <span className={
                                `post__nav__btn__text ${postType === 'foryou' ? "active" : "inactive"}`
                            }>For you</span>
                        </div>

                        <div
                            className="home__post__nav__btn"
                            onClick={() => switchPostType('following')}
                        >
                            <span className={
                                `post__nav__btn__text ${postType === 'following' ? "active" : "inactive"}`
                            }>Following</span>
                        </div>
                    </div>




                </div>




                <PostsWrapper
                    posts={posts}
                    setPosts={setPosts}
                />


            </div>
        </section>

    )
}

export default Home