import React from 'react'

import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify'; // Import DOMPurify

import { OutlineImage, OutlineClose } from '../assets/CustomIcons';

import userProfiles from '../data/userProfiles';
import userPosts from '../data/userPosts';

import noUserImage from '../data/avatars/noimage.jpg';

import PostsWrapper from '../components/PostsWrapper';


const Home = () => {
    const [posts, setPosts] = useState(userPosts);
    const [postType, setPostType] = useState('foryou');
    const [postText, setPostText] = useState('');
    const [mediaFile, setMediaFile] = useState(null);
    const [mediaPreview, setMediaPreview] = useState(null);
    const editableTextRef = useRef(null);
    const mediaInputRef = useRef(null);

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



    const handleTextChange = (e) => {
        const text = e.target.innerHTML;
        // Replace newline characters with \n
        const sanitizedText = DOMPurify.sanitize(text, { ALLOWED_TAGS: [] }).replace(/<br>/g, '\n');
        setPostText(sanitizedText);
        console.log(sanitizedText);
    };

    const handleMediaInputChange = (e) => {
        const file = e.target.files[0];
        setMediaFile(file);
        console.log(file);

        // Create a preview URL for images and videos
        const previewURL = file.type.startsWith('image/') || file.type.startsWith('video/')
            ? URL.createObjectURL(file)
            : null;
        setMediaPreview(previewURL)
    };


    const isPostButtonDisabled = () => {
        const text = postText.trim();
        // Disable the button if there are 0 characters and no media
        if (text.length === 0 && !mediaFile) {
            return true;
        }
        // Disable the button if the character count is more than 280
        if (text.length > 280) {
            return true;
        }
        // Enable the button in all other cases
        return false;
    };

    const handlePostButtonClick = () => {
        console.log('post')
    }


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
                    <div className="post-option">
                        <div className="admin-avatar-box">
                            <Link to={`/${"mohdarham"}`} className="admin-avatar-link">
                                <img
                                    className="admin-avatar"
                                    src={true ? noUserImage : noUserImage}
                                    alt={''}
                                />
                            </Link>
                        </div>


                        <div className="post-option__form">
                            <div
                                className="form__textarea__wrapper"
                                onClick={() => editableTextRef.current.focus()}
                            >
                                <div className="form__textarea">
                                    <div className="form__textarea__placeholder">
                                        {postText === '' ? 'What is happening?!' : null}
                                    </div>
                                    <div
                                        contentEditable
                                        className="form__textarea__editable"
                                        ref={editableTextRef}
                                        onInput={handleTextChange}
                                    >
                                    </div>
                                </div>
                            </div>


                            {mediaPreview && (
                                <div className="form__media-preview">
                                    <div className="media-preview__box">
                                        <img className="media-preview__img" src={mediaPreview} alt="Media Preview" />


                                        <div
                                            className="media-preview__remove-btn"
                                            onClick={() => {
                                                setMediaFile(null)
                                                setMediaPreview(null)
                                            }}
                                        >
                                            <OutlineClose />
                                        </div>
                                    </div>
                                </div>
                            )}


                            <div className="form__footer">
                                {/* Media Select */}
                                <label
                                    htmlFor="form__media-input"
                                    className="form__media-label"
                                    onClick={() => mediaInputRef.current.click()}
                                >
                                    <div className="form__custom-icon"><OutlineImage /></div>
                                </label>
                                <input
                                    id="media-input"
                                    className="form__media-input"
                                    type="file"
                                    accept="image/*, video/*"
                                    onChange={handleMediaInputChange}
                                    ref={mediaInputRef}
                                />


                                {/* Post Button */}
                                <div
                                    className={
                                        `form__post-button ${isPostButtonDisabled() ? 'disabled' : ''}`
                                    }
                                    onClick={handlePostButtonClick}
                                >
                                    Post
                                </div>
                            </div>

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