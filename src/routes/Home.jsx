import React from 'react'

import user1avatar from '../assets/jasonstotham.jpg'
import user1post1 from '../assets/jasonstothampost1.jpg'

import { OutlineHeart, FillHeart } from '../assets/CustomIcons';
import { OutlineComment } from '../assets/CustomIcons';
import { OutlineShare } from '../assets/CustomIcons';
import { OutlineSave, FillSave } from '../assets/CustomIcons';

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
                        <button className="post__actions__btn"><OutlineHeart /></button>
                        <button className="post__actions__btn"><OutlineComment /></button>
                        <button className="post__actions__btn"><OutlineShare /></button>
                        <button className="post__actions__btn"><OutlineSave /></button>
                    </div>

                    <div className="post__likes">
                        4,548,258 Likes
                    </div>
                </article>
            </div>




        </section>

    )
}

export default Home