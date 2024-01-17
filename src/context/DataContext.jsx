import React from 'react'

import {
    createContext, useContext,
    useState, useEffect
} from 'react';

import userPosts from '../data/userPosts';
import userProfiles from '../data/userProfiles';


const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [posts, setPosts] = useState(userPosts);
    const [users, setUsers] = useState(userProfiles);


    // HOME
    const [foryouPosts, setForyouPosts] = useState([]);
    const [followingPosts, setFollowingPosts] = useState([]);

    // For You Posts
    useEffect(() => {
        // const shuffledPosts = () => {
        //     const shuffledPosts = posts.sort(() => Math.random() - 0.5);
        //     return shuffledPosts;
        // }

        setForyouPosts(posts)
    }, [posts])


    // Following Posts
    useEffect(() => {
        const followingUsersPost = () => {
            const filteredFollowingPosts = posts.filter(
                (post) => users.find(
                    (profile) => profile.username === post.username
                )?.isFollowing
            )
            return filteredFollowingPosts;
        }
        
        setFollowingPosts(followingUsersPost)
    }, [posts, users])




    // POST ACTIONS
    // Like
    const handleLike = (postId) => {
        setPosts((prevPosts) => {
            return prevPosts.map((post) =>
                (post.id === postId)
                    // Update post
                    ? {
                        ...post,
                        likes: post.liked ? (post.likes - 1) : (post.likes + 1),
                        liked: !post.liked
                    }
                    // No update
                    : post
            )
        });
    };

    // Save
    const handleSave = (postId) => {
        setPosts((prevPosts) => {
            return prevPosts.map((post) =>
                (post.id === postId)
                    // Update post
                    ? {
                        ...post,
                        saved: !post.saved
                    }
                    // No update
                    : post
            )
        });
    };


    // PROFILE ACTIONS
    // Follow
    const handleFollow = (userId) => {
        setUsers((prevUsers) => {
            return prevUsers.map((user) =>
                (user.username === userId)
                    // Update
                    ? {
                        ...user,
                        followers: user.isFollowing ? (user.followers - 1) : (user.followers + 1),
                        isFollowing: !user.isFollowing
                    }
                    // No Update
                    : user
            )
        });
    };



    

    // SEARCH
    const [searchResults, setSearchResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query)
    }
    useEffect(() => {
        const filteredUsers = users.filter((user) => {
            const usernameMatch = user.username.toLowerCase().includes(searchQuery.toLowerCase());
            const nameMatch = user.name.toLowerCase().includes(searchQuery.toLowerCase());
            return usernameMatch || nameMatch;
        })
        setSearchResults(filteredUsers)
    }, [users, searchQuery])




    // SAVED
    const [savedPosts, setSavedPosts] = useState([]);

    useEffect(() => {
        setSavedPosts(posts.filter((post) => post.saved))
    }, [posts])




    // PROFILE
    const [profileUsername, setProfileUsername] = useState('');

    const [profile, setProfile] = useState([]);
    const [profilePosts, setProfilePosts] = useState([]);
    const [userLikedPosts, setUserLikedPosts] = useState([]);


    // Filtered Profile
    useEffect(() => {
        const filteredProfile = (username) => {
            return users.find((profile) => profile.username === username);
        }
        setProfile(filteredProfile(profileUsername))
    }, [profileUsername, users])


    // Profile Posts
    useEffect(() => {
        const filteredProfilePosts = (profile) => {
            return posts.filter((post) => post.username === profile?.username);
        }
        setProfilePosts(filteredProfilePosts(profile))
    }, [profile, posts])

    // Profile Liked Posts
    useEffect(() => {
        const filteredLikedPosts = () => {
            return (
                posts.filter((post) => post.username === profile?.username && post.liked)
            )
        }
        setUserLikedPosts(filteredLikedPosts)
    }, [profile, posts])











    return (
        <DataContext.Provider
            value={{
                foryouPosts, followingPosts,
                handleLike, handleSave,
                handleFollow,
                handleSearch, searchResults, searchQuery,
                savedPosts,
                setProfileUsername,
                profile, profilePosts, userLikedPosts
            }}
        >
            {children}
        </DataContext.Provider>
    )
}









export const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};