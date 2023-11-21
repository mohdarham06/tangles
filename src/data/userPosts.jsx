
import user2avatar from '../data/avatars/jasonstotham.jpg';
import user2post1 from '../data/avatars/jasonstothampost1.jpg';
import user2post2 from '../data/avatars/jasonstothampost2.jpg';



const userPosts = [
    {
        id: 1,
        username: 'mohdarham',
        verified: false,
        avatar: null,
        image: null,
        text: 'I do not believe in tired.\n\nI do not believe in low energy.\n\nI AM BINARY.\n\nI am either AWAKE or I AM ASLEEP.\n\nDo you understand?',
        liked: false,
        likes: 2548257,
        saved: false,
        comments: [
            {
                id: 101,
                username: 'user1',
                text: 'Amazing shot!',
            },
            // More comments...
        ],
    },
    {
        id: 2,
        username: 'jasonstotham',
        verified: true,
        avatar: user2avatar,
        image: user2post1,
        text: 'Shanghai 🇨🇳',
        liked: false,
        likes: 4548257,
        saved: true,
        comments: [
            {
                id: 101,
                username: 'user1',
                text: 'Amazing shot!',
            },
            // More comments...
        ],
    },
    {
        id: 3,
        username: 'jasonstotham',
        verified: true,
        avatar: user2avatar,
        image: user2post2,
        text: '#Meg2 #freedive 📸@danielsmithphotography',
        liked: false,
        likes: 1297324,
        saved: false,
        comments: [
            {
                id: 201,
                username: 'user2',
                text: 'Awesome freediving!',
            },
            // More comments...
        ],
    },

]

export default userPosts;
