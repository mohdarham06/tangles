
import jasonstotham from './avatars/jasonstotham.jpg';
import davidgoggins from './avatars/davidgoggins.jpg';
import cristiano from './avatars/cristiano.jpg';


const userProfiles = [
    {
        username: 'mohdarham',
        name: 'Mohd Arham',
        verified: false,
        avatar: null,
        bio: 'Software Developer | React Enthusiast',
        followers: 12410,
        following: 500,
        isFollowing: true
    },
    {
        username: 'jasonstotham',
        name: 'Jason Stotham',
        verified: true,
        avatar: jasonstotham,
        bio: 'Photographer | Traveler',
        followers: 5350000,
        following: 100,
        isFollowing: false
    },
    {
        username: 'davidgoggins',
        name: 'David Goggins',
        verified: true,
        avatar: davidgoggins,
        bio: 'Photographer | Traveler',
        followers: 9000000,
        following: 100,
        isFollowing: false
    },
    {
        username: 'cristiano',
        name: 'Cristiano Ronaldo',
        verified: true,
        avatar: cristiano,
        bio: '',
        followers: 613500000,
        following: 573,
        isFollowing: false
    },
];

export default userProfiles;
