import React from 'react'

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { OutlineImage } from '../assets/CustomIcons';

import userProfiles from '../data/userProfiles';
import userPosts from '../data/userPosts';

import noUserImage from '../data/avatars/noimage.jpg';

import PostsWrapper from '../components/PostsWrapper';


const Home = () => {
    const [posts, setPosts] = useState(userPosts);
    const [postType, setPostType] = useState('foryou');
    const [postText, setPostText] = useState('');
    const [mediaFile, setMediaFile] = useState(null);

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


    const handleFocus = () => {
        const placeHolderDiv = document.querySelector('.__textarea__placeholder');
        const editableDiv = document.querySelector('.__textarea__editable');

        if (editableDiv.innerHTML === '') {
            placeHolderDiv.innerHTML = '';
        }
    }

    const handleBlur = () => {
        const placeHolderDiv = document.querySelector('.__textarea__placeholder');
        const editableDiv = document.querySelector('.__textarea__editable');

        if (editableDiv.innerHTML === '') {
            placeHolderDiv.innerHTML = 'What is happening?!'; // Show the placeholder when blurred
        }
    }
    
    const handleTextChange = (e) => {
        setPostText(e.target.innerHTML);
        console.log(e.target.innerHTML)
    };


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




                <div className="home__post-option">
                    <div className="">
                        <Link to={`/${"mohdarham"}`} className="">
                            <img
                                className=""
                                src={true ? noUserImage : noUserImage}
                                alt={''}
                            />
                        </Link>

                        <div className="">

                            <div
                                className="__textarea"
                            >
                                <div className="textarea__placeholder">
                                    What is happening?!
                                </div>
                                <div
                                    contentEditable
                                    className="__textarea__editable"
                                    onInput={handleTextChange}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                >
                                </div>
                            </div>




                            <label htmlFor="media-input" className="custom-media-label">
                                <div className="custom-icon"><OutlineImage /></div>
                            </label>
                            <input
                                id="media-input"
                                className="media-input"
                                type="file"
                                accept="image/*, video/*"
                            // onChange={}
                            />


                            <button
                                className="post-button"
                            // onClick={''} 
                            >
                                Post
                            </button>
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