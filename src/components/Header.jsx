import React from 'react'

import { Link, NavLink, useLocation } from 'react-router-dom';
import user1avatar from '../data/avatars/jasonstotham.jpg'
import noUserImage from '../data/avatars/noimage.jpg'

import {
    OutlineHome, OutlineSearch, OutlineNotification, OutlineSaved, OutlineFeatherPen,
    FillHome, OutlineBoldSearch, FillNotification, FillSaved,
    OutlineOptions,
    OutlineArtBrush, OutlineLogout
} from '../assets/CustomIcons'

const Header = ({ openPostModal, openDisplayModal }) => {
    const location = useLocation();

    return (
        <header className="header">

            {/* Header Desktop */}
            <div className="header__desktop">

                <Link
                    className="header__desktop__brand"
                    to={`/`}
                >
                    <span className="header__desktop__brand__icon"></span>
                    <span className="header__desktop__brand__text"></span>
                </Link>


                <nav className="header__desktop__nav">
                    <ul className="desktop__nav__list">
                        <NavLink to={`/`}>
                            <li className="desktop__nav__item">
                                <span className="desktop__nav__item__icon">
                                    {location.pathname !== '/' ? <OutlineHome /> : <FillHome />}</span>
                                <span className="desktop__nav__item__text">Home</span>
                            </li>
                        </NavLink>
                        <NavLink to={`/search`}>
                            <li className="desktop__nav__item">
                                <span className="desktop__nav__item__icon">
                                    {location.pathname !== '/search' ? <OutlineSearch /> : <OutlineBoldSearch />}</span>

                                <span className="desktop__nav__item__text">Search</span>
                            </li>
                        </NavLink>
                        <NavLink to={`/notifications`}>
                            <li className="desktop__nav__item">
                                <span className="desktop__nav__item__icon">
                                    {location.pathname !== '/notifications' ? <OutlineNotification /> : <FillNotification />}</span>
                                <span className="desktop__nav__item__text">Notifications</span>
                            </li>
                        </NavLink>
                        <NavLink to={`/saved`}>
                            <li className="desktop__nav__item">
                                <span className="desktop__nav__item__icon">
                                    {location.pathname !== '/saved' ? <OutlineSaved /> : <FillSaved />}</span>
                                <span className="desktop__nav__item__text">Saved</span>
                            </li>
                        </NavLink>

                        <NavLink to={`/${"mohdarham"}`}>
                            <li className="desktop__nav__item">
                                <img
                                    className="desktop__nav__item__avatar"
                                    src={user1avatar ? user1avatar : noUserImage}
                                    alt=""
                                />
                                <span className="desktop__nav__item__text">Profile</span>
                            </li>
                        </NavLink>
                    </ul>
                    <div onClick={openPostModal}>
                        <div className="primary-button desktop__nav__post-btn">
                            <span className="desktop__nav__post-btn__icon"><OutlineFeatherPen /></span>
                            <span className="desktop__nav__post-btn__text">Post</span>
                        </div>
                    </div>
                </nav>

                <div className="header__desktop__">
                    <div className="header__action-btn" onClick={openDisplayModal}>
                        <span className="header__action-btn__icon"><OutlineArtBrush /></span>
                        <span className="header__action-btn__text">Display</span>
                    </div>
                    <div className="header__action-btn header__logout">
                        <span className="header__action-btn__icon"><OutlineLogout /></span>
                        <span className="header__action-btn__text">Logout</span>

                    </div>
                </div>

            </div>



            {/* Header Mobile */}
            <div className="header__mobile">

                <div className="header__mobile__top">
                    <Link
                        className="header__mobile__brand"
                        to={`/`}
                    >
                        <span className="header__mobile__brand__icon"></span>
                        <span className="header__mobile__brand__text"></span>
                    </Link>
                </div>


                <nav className="header__mobile__nav">
                    <ul className="mobile__nav__list">
                        <NavLink to={`/`}>
                            <li className="mobile__nav__item">
                                {location.pathname !== '/' ? <OutlineHome /> : <FillHome />}
                            </li>
                        </NavLink>
                        <NavLink to={`/search`}>
                            <li className="mobile__nav__item">
                                {location.pathname !== '/search' ? <OutlineSearch /> : <OutlineBoldSearch />}
                            </li>
                        </NavLink>
                        <NavLink to={`/notifications`}>
                            <li className="mobile__nav__item">
                                {location.pathname !== '/notifications' ? <OutlineNotification /> : <FillNotification />}
                            </li>
                        </NavLink>
                        <NavLink to={`/saved`}>
                            <li className="mobile__nav__item">
                                {location.pathname !== '/saved' ? <OutlineSaved /> : <FillSaved />}
                            </li>
                        </NavLink>

                        <NavLink to={`/${"mohdarham"}`}>
                            <li className="mobile__nav__item">
                                <img
                                    className="mobile__nav__item__avatar"
                                    src={user1avatar ? user1avatar : noUserImage}
                                    alt=""
                                />
                            </li>
                        </NavLink>
                    </ul>
                   
                </nav>
            </div>

        </header>
    )
}

export default Header