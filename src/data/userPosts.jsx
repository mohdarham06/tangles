
import user2avatar from '../data/avatars/jasonstotham.jpg';
import user2post1 from '../data/avatars/jasonstothampost1.jpg';
import user2post2 from '../data/avatars/jasonstothampost2.jpg';



const userPosts = [
    {
        id: 1,
        username: 'mohdarham',
        verified: false,
        avatar: null,
        text: 'I do not believe in tired.\n\nI do not believe in low energy.\n\nI AM BINARY.\n\nI am either AWAKE or I AM ASLEEP.\n\nDo you understand?',
        image: null,
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
        text: 'Shanghai 🇨🇳',
        image: user2post1,
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
        text: '#Meg2 #freedive 📸@danielsmithphotography',
        image: user2post2,
        liked: true,
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
    {
        id: 4,
        username: 'mohdarham',
        verified: false,
        avatar: null,
        text: 'If you cannot trust yourself.\n\nThere is no one left to rely on.',
        image: null,
        liked: true,
        likes: 2548257,
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
        id: 5,
        username: 'mohdarham',
        verified: false,
        avatar: null,
        text: "Once I realised,\n\nI dont have to impress you.\n\n You dont have to impress me.\n\nI dont have to be subjugated to the idealogies of the people around me or what television is telling me.\n\n I can be who I was created to be; I can be my authentic self.\n\n Now, you begin to live life with no pressure.\n\nNow the question is, what do you want to become?",
        image: null,
        liked: true,
        likes: 2548257,
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
        id: 6,
        username: 'mohdarham',
        verified: false,
        avatar: null,
        text: 'Once you accept everything is your fault.\n\nYou accept everything is in your control.\n\nYOU decide your future,\n\n You decide how you will catch the wind.',
        image: null,
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

]

export default userPosts;
