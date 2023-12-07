import React from 'react'

import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify'; // Import DOMPurify

// icons
import { OutlineImage, OutlineClose } from '../assets/CustomIcons';

import noUserImage from '../data/avatars/noimage.jpg';



const PostEditor = () => {
    const [postText, setPostText] = useState('');
    const [mediaFile, setMediaFile] = useState(null);
    const [mediaPreview, setMediaPreview] = useState(null);
    const editableTextRef = useRef(null);
    const mediaInputRef = useRef(null);



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
        // or if the character count is more than 280
    return (text.length === 0 && !mediaFile) || (text.length > 280);
    };

    const handlePostButtonClick = () => {
        console.log('post')
    }



    return (
        <div className="post-editor">
            <div className="post-editor__admin-avatar-box">
                <Link to={`/${"mohdarham"}`} className="post-editor__admin-avatar-link">
                    <img
                        className="post-editor__admin-avatar"
                        src={true ? noUserImage : noUserImage}
                        alt={''}
                    />
                </Link>
            </div>


            <div className="post-editor__form">
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
    )
}

export default PostEditor