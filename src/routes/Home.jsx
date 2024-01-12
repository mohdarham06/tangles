import React from 'react'

import { useState, useEffect } from 'react';

import userProfiles from '../data/userProfiles';
import userPosts from '../data/userPosts';


import PostEditor from '../components/PostEditor';
import PostsWrapper from '../components/PostsWrapper';

import axios from 'axios'


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

    useEffect(() => {





        const options = {
            method: 'GET',
            url: 'https://instagram130.p.rapidapi.com/account-feed',
            params: { username: 'adele' },
            headers: {
                'X-RapidAPI-Key': 'd9b652efb4msh6e4040368154c25p1c68bejsn16303a787b72',
                'X-RapidAPI-Host': 'instagram130.p.rapidapi.com'
            }
        };

        async function getData() {
            try {
                const response = await axios.request(options);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        getData();



    }, [])


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

                <PostsWrapper
                    posts={posts}
                    setPosts={setPosts}
                />
            </div>

        </section>

    )
}

export default Home