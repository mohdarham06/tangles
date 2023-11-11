import React from 'react'


const Home = () => {
    return (

        <>




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





        </>

    )
}

export default Home