import React from 'react'

import user1avatar from '../assets/jasonstotham.jpg'
import user1post1 from '../assets/jasonstothampost1.jpg'

const Home = () => {
    return (

        <section id='home' className='section section--home'>



            <div className="posts-wrapper">
                <article className="post">
                    <div className="post__header">
                        <img className="post__user-avatar" src={user1avatar} alt="jasonstotham" />

                        <div className="post__user-info">
                            {/* <div className="post__author">Jason Stotham</div> */}
                            <div className="post__username">jasonstotham</div>
                        </div>

                    </div>

                    <div className="post__content">
                        <p className="post__text">Shanghai 🇨🇳</p>

                        <img className="post__image" src={user1post1} alt="" />

                    </div>

                    <div className="post__actions">
                        <button className="post__like-btn">Like</button>
                        <button className="post__comment-btn">Comment</button>
                        <button className="post__share-btn">Share</button>
                    </div>

                </article>
            </div>




        </section>

    )
}

export default Home