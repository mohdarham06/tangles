import React from 'react'

import { Link } from 'react-router-dom';
import user1avatar from '../assets/jasonstotham.jpg'


import { OutlineHome, FillHome, OutlineSearch, OutlineExplore, OutlineSaved, FillSaved, OutlineAdd } from '../assets/CustomIcons'

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">

                <div className="header__brand">Brand</div>

                <nav className="header__nav">
                    <ul className="nav__list">
                        <Link to={`/`}>
                            <li className="nav__item">
                                <span className="nav__item__icon"><OutlineHome /></span>
                                <span className="nav__item__text">Home</span>
                            </li>
                        </Link>
                        <Link to={`/search`}>
                            <li className="nav__item">
                                <span className="nav__item__icon"><OutlineSearch /></span>
                                <span className="nav__item__text">Search</span>
                            </li>
                        </Link>
                        <Link to={`/explore`}>
                            <li className="nav__item">
                                <span className="nav__item__icon"><OutlineExplore /></span>
                                <span className="nav__item__text">Explore</span>
                            </li>
                        </Link>
                        <Link to={`/saved`}>
                            <li className="nav__item">
                                <span className="nav__item__icon"><OutlineSaved /></span>
                                <span className="nav__item__text">Saved</span>
                            </li>
                        </Link>
                        <Link to={`/post`}>
                            <li className="nav__item">
                                <span className="nav__item__icon"><OutlineAdd /></span>
                                <span className="nav__item__text">Post</span>
                            </li>
                        </Link>
                        <Link to={`/profile`}>
                            <li className="nav__item">
                                <img className="nav__item__image" src={user1avatar} alt="" />
                                <span className="nav__item__text">Profile</span>
                            </li>
                        </Link>
                    </ul>
                </nav>

                <div className="header__logout">Logout</div>

            </div>
        </header>
    )
}

export default Header