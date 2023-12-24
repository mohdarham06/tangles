import React from 'react'

import { Link, NavLink, useLocation } from 'react-router-dom';
import user1avatar from '../data/avatars/jasonstotham.jpg'
import noUserImage from '../data/avatars/noimage.jpg'

import { OutlineHome, FillHome, OutlineSearch, OutlineExplore, FillExplore, OutlineSaved, FillSaved, OutlineAdd, OutlineBoldSearch } from '../assets/CustomIcons'

import { useTheme } from '../context/ThemeContext';

const Header = ({ openPostModal }) => {
    const location = useLocation();
    const { accentColor, toggleTheme, changeAccentColor } = useTheme();

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
                        <Link onClick={openPostModal}>
                            <li className="nav__item">
                                <span className="nav__item__icon"><OutlineAdd /></span>
                                <span className="nav__item__text">Post</span>
                            </li>
                        </Link>
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
                </nav>

                <div className="header__">
                    <div className="header__">
                        <button className="header__" onClick={toggleTheme}>Toggle</button>
                        
                        <select
                            name="Accent"
                            onChange={(e) => changeAccentColor(e.target.value)}
                        >
                            <option value="blue">blue</option>
                            <option value="yellow">yellow</option>
                            <option value="pink">pink</option>
                            <option value="purple">purple</option>
                            <option value="orange">orange</option>
                            <option value="green">green</option>
                        </select>
                    </div>
                    <div className="header__logout">Logout</div>
                </div>

            </div>
        </header>
    )
}

export default Header