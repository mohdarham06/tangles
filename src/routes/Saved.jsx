import React from 'react'

import { useState } from 'react';

import userPosts from '../data/userPosts';

import PostsWrapper from '../components/PostsWrapper';


const Saved = () => {
    const [savedPosts, setSavedPosts] = useState(userPosts.filter((post) => post.saved));


    return (
        <section className='section section--saved'>
            <div className="saved">
                <div className="page-header">
                    <h3>Saved</h3>
                </div>


                <PostsWrapper
                    posts={savedPosts}
                    setPosts={setSavedPosts}
                />

            </div>
        </section>

    )
}

export default Saved