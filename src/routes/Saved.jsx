import React from 'react'

import { useState } from 'react';

import userPosts from '../data/userPosts';

import PostsWrapper from '../components/PostsWrapper';


const Saved = () => {
    const [savedPosts, setSavedPosts] = useState(userPosts.filter((post) => post.saved));


    return (
        <section className='section section--saved'>

            <PostsWrapper 
                posts={savedPosts}
                setPosts={setSavedPosts}
            />

        </section>

    )
}

export default Saved