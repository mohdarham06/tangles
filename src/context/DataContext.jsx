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










    return (
        <DataContext.Provider
            value={{
                posts,
                handleLike, handleSave,
                users, handleFollow,
                handleSearch, searchResults, searchQuery,
                savedPosts,
                setProfileUsername,
                profile, profilePosts,
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