import React from 'react'

import { useParams } from "react-router-dom";
import NotFound from './NotFound';

import userProfiles from '../data/userProfiles';
import { VerifiedIcon } from '../assets/CustomIcons';
import noUserImage from '../data/avatars/noimage.jpg';


const Profile = () => {
    const { profileName } = useParams();
    console.log(profileName)

    const filteredProfile = (username) => {
        return userProfiles.find((profile) => profile.username === username);
    }


    const profile = filteredProfile(profileName) ? filteredProfile(profileName) : undefined;
    console.log(profile)

    return (
        <>
            {profile ?
                <section className='section section--profile'>
                    <div className="profile">
                        {/* header */}
                        <div className="profile__header">
                            <div className="profile__info">
                                <div className="profile__name">
                                    {profile.name}
                                    <span className="profile__verified">
                                        {profile.verified ? <VerifiedIcon /> : null}
                                    </span>
                                </div>
                                <div className="profile__username">{profile.username}</div>
                            </div>

                            <div className="profile__avatar-box">
                                <img
                                    className="profile__avatar"
                                    src={profile.avatar ? profile.avatar : noUserImage} 
                                    alt={profile.username}
                                />
                            </div>
                        </div>

                        {/* bio */}
                        <div className="profile__bio">{profile.bio}</div>

                        {/* actions */}
                        <div className="profile__actions">
                            <div
                                className="profile__follow-btn"
                                onClick={(e) => {
                                    console.log(e)
                                }}
                            >
                                {!profile.isFollowing
                                    ? <div>Follow</div>
                                    : <div className="following">Following</div>
                                }
                            </div>
                            <div className="profile__share-btn">Share profile</div>
                        </div>

                        {/* stats */}
                        <div className="profile__stats">
                            <div className="stats__followers">
                                <div className="stats__count">{profile.followers}</div>
                                <div className="stats__label">followers</div>
                            </div>
                            <div className="stats__following">
                                <div className="stats__count">{profile.following}</div>
                                <div className="stats__label">following</div>
                            </div>
                        </div>

                        {/* content */}
                        <div className="profile__content">
                            <div className="profile__posts">
                                <div className="profile__posts__post">Post</div>
                                <div className="profile__posts__post">Post2</div>
                                <div className="profile__posts__post">Post3</div>
                            </div>
                        </div>

                    </div>


                </section>
                : <NotFound />
            }


        </>

    )
}

export default Profile