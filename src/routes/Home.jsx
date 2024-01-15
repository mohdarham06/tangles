import React from 'react'

import { useState, useEffect } from 'react';

import PostEditor from '../components/PostEditor';
import PostsWrapper from '../components/PostsWrapper';
import { useData } from '../context/DataContext';


const Home = () => {
    const { posts, users } = useData();

    // Home
    const [postType, setPostType] = useState('foryou');
    const [foryouPosts, setForyouPosts] = useState([]);
    const [followingPosts, setFollowingPosts] = useState([]);

    const switchPostType = (type) => {
        setPostType(type)
    }

    useEffect(() => {
        // const shuffledPosts = () => {
        //     const shuffledPosts = posts.sort(() => Math.random() - 0.5);
        //     return shuffledPosts;
        // }

        setForyouPosts(posts)
    }, [posts])




    useEffect(() => {
        const followingUsersPost = () => {
            const filteredFollowingPosts = posts.filter(
                (post) => users.find(
                    (profile) => profile.username === post.username
                )?.isFollowing
            )
            return filteredFollowingPosts;
        }
        
        setFollowingPosts(followingUsersPost)
    }, [posts, users])




    return (
        <section id='home' className='section section--home'>
            <div className="home">
                <div className="home__header">
                    <div className="page-type__nav">
                        <div
                            className="page-type__nav__btn"
                            onClick={() => switchPostType('foryou')}
                        >
                            <span className={`page-type__nav__btn__text ${postType === 'foryou' ? "active" : "inactive"}`}>For you</span>
                        </div>
                        <div
                            className="page-type__nav__btn"
                            onClick={() => switchPostType('following')}
                        >
                            <span className={`page-type__nav__btn__text ${postType === 'following' ? "active" : "inactive"}`}>Following</span>
                        </div>
                    </div>
                </div>




                <div className="home__post-editor">
                    <PostEditor />
                </div>

                {
                    postType === 'foryou' ?
                        <PostsWrapper
                            posts={foryouPosts}
                        /> :
                        <PostsWrapper
                            posts={followingPosts}
                        />
                }

            </div>

        </section>

    )
}

export default Home