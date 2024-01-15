import React from 'react'

import PostsWrapper from '../components/PostsWrapper';
import { useData } from '../context/DataContext';


const Saved = () => {
    const { savedPosts } = useData();

    return (
        <section className='section section--saved'>
            <div className="saved">
                <div className="page-header">
                    <h3>Saved</h3>
                </div>


                <PostsWrapper
                    posts={savedPosts}
                />

            </div>
        </section>

    )
}

export default Saved