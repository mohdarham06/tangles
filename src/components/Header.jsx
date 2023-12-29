import React from 'react'

import { Link, NavLink, useLocation } from 'react-router-dom';
import user1avatar from '../data/avatars/jasonstotham.jpg'
import noUserImage from '../data/avatars/noimage.jpg'

import {
    OutlineHome, OutlineSearch, OutlineExplore, OutlineSaved, OutlineFeatherPen,
    FillHome, OutlineBoldSearch, FillExplore, FillSaved,
    OutlineArtBrush
} from '../assets/CustomIcons'

const Header = ({ openPostModal, openDisplayModal }) => {
    const location = useLocation();

    return (
        <header className="header">
            <div className="header__container">

                <Link
                    className="header__brand"
                    to={`/`}
                >Tangles</Link>


                <nav className="header__nav">
                    <ul className="nav__list">
                        <NavLink to={`/`}>
                            <li className="nav__item">
                                <span className="nav__item__icon">
                                    {location.pathname !== '/' ? <OutlineHome /> : <FillHome />}</span>
                                <span className="nav__item__text">Home</span>
                            </li>
                        </NavLink>
                        <NavLink to={`/search`}>
                            <li className="nav__item">
                                <span className="nav__item__icon">
                                    {location.pathname !== '/search' ? <OutlineSearch /> : <OutlineBoldSearch />}</span>

                                <span className="nav__item__text">Search</span>
                            </li>
                        </NavLink>
                        <NavLink to={`/explore`}>
                            <li className="nav__item">
                                <span className="nav__item__icon">
                                    {location.pathname !== '/explore' ? <OutlineExplore /> : <FillExplore />}</span>
                                <span className="nav__item__text">Explore</span>
                            </li>
                        </NavLink>
                        <NavLink to={`/saved`}>
                            <li className="nav__item">
                                <span className="nav__item__icon">
                                    {location.pathname !== '/saved' ? <OutlineSaved /> : <FillSaved />}</span>
                                <span className="nav__item__text">Saved</span>
                            </li>
                        </NavLink>

                        <NavLink to={`/${"mohdarham"}`}>
                            <li className="nav__item">
                                <img
                                    className="nav__item__avatar"
                                    src={user1avatar ? user1avatar : noUserImage}
                                    alt=""
                                />
                                <span className="nav__item__text">Profile</span>
                            </li>
                        </NavLink>
                    </ul>
                    <div onClick={openPostModal}>
                        <div className="primary-button nav__post-btn">
                            <span className="nav__post-btn__icon"><OutlineFeatherPen /></span>
                            <span className="nav__post-btn__text">Post</span>
                        </div>
                    </div>
                </nav>

                <div className="header__">
                    <div className="header__action-btn" onClick={openDisplayModal}>
                        <span className="header__action-btn__icon"><OutlineArtBrush /></span>
                        <span className="header__action-btn__text">Display</span>
                    </div>
                    <div className="header__logout">Logout</div>
                </div>

            </div>
        </header>
    )
}

export default Header