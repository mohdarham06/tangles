import React from 'react'

const Home = () => {
    return (

        <>

            <header className="header">
                <div className="header__container">

                    <div className="header__brand">Brand</div>

                    <nav className="header__nav">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <span className="nav__item__icon"></span>
                                <span className="nav__item__text">Home</span>
                            </li>
                            <li className="nav__item">
                                <span className="nav__item__icon"></span>
                                <span className="nav__item__text">Search</span>
                            </li>
                            <li className="nav__item">
                                <span className="nav__item__icon"></span>
                                <span className="nav__item__text">Explore</span>
                            </li>
                            <li className="nav__item">
                                <span className="nav__item__icon"></span>
                                <span className="nav__item__text">Saved</span>
                            </li>
                            <li className="nav__item">
                                <span className="nav__item__icon"></span>
                                <span className="nav__item__text">Profile</span>
                            </li>
                            <li className="nav__item">
                                <span className="nav__item__icon"></span>
                                <span className="nav__item__text">Post</span>
                            </li>
                        </ul>
                    </nav>

                    <div className="header__logout">Logout</div>


                </div>
            </header>


            <main>
                <div className="post">
                    <div className="post__header">
                        <div className="post__user-avatar">
                            <img src="user-avatar.jpg" alt="User Avatar" />
                        </div>

                        <div className="post__user-info">
                            <div className="post__author">Jason Stotham</div>
                            <div className="post__username">jasonstotham</div>
                        </div>

                        <div className="post__content">
                            <p className="post__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        </div>

                        <div className="post__actions">
                            <button className="post__like-btn">Like</button>
                            <button className="post__comment-btn">Comment</button>
                            <button className="post__share-btn">Share</button>
                        </div>
                    </div>


                </div>


            </main>




        </>

    )
}

export default Home