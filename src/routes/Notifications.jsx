import React from 'react'

import { useState } from 'react';
import { Link } from 'react-router-dom';

import { VerifiedIcon } from '../assets/CustomIcons';
import noUserImage from '../data/avatars/noimage.jpg';

const Notifications = () => {
    const [notificationType, setNotificationType] = useState('all');

    const switchType = (type) => {
        setNotificationType(type)
    }

    return (
        <section className='section section--notifications'>
            <div className="notifications">
                <div className="page-header">
                    <h3>Notifications</h3>
                </div>

                <div className="page-type__nav">
                    <div
                        className="page-type__nav__btn"
                        onClick={() => switchType('all')}
                    >
                        <span className={`page-type__nav__btn__text ${notificationType === 'all' ? "active" : "inactive"}`}>All</span>
                    </div>
                    <div
                        className="page-type__nav__btn"
                        onClick={() => switchType('mentions')}
                    >
                        <span className={`page-type__nav__btn__text ${notificationType === 'mentions' ? "active" : "inactive"}`}>Mentions</span>
                    </div>
                </div>
                


                <div className="notifictions__list">
                    <div className="notifictions__item">
                        <div className="notifictions__item__avatar">
                            <Link to={`/tangles`} className="notifictions__item__avatar">
                                <img
                                    className="post__user-avatar notifictions__item__avatar__img"
                                    src={false ? null : noUserImage}
                                    alt={`tangles`}
                                />
                            </Link>
                        </div>


                        <div className="notifictions__item__content">
                            <Link to={`/tangles`} className="post__header notifictions__item__header">
                                <div className="post__user-info notifictions__user-info">
                                    <div className="post__username notifictions__username">tangles</div>
                                    <div className="post__user-verified notifictions__user-verified">
                                        {true ? <VerifiedIcon /> : null}
                                    </div>
                                </div>
                            </Link>


                            <div className="notification__item__text">
                                We'll add a database soon!
                            </div>
                        </div>



                    </div>


                </div>
            </div>
        </section>

    )
}

export default Notifications