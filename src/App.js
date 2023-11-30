
import AppLayout from './AppLayout';

import Home from './routes/Home';
import Search from './routes/Search'
import Explore from './routes/Explore';
import Saved from './routes/Saved';
import Profile from './routes/Profile';
import Post from './routes/Post';
import NotFound from './routes/NotFound';

import { Routes, Route } from 'react-router-dom';


// import { GoHome } from 'react-icons/go'
// import { GoHomeFill } from 'react-icons/go'
// import { FaRegBookmark } from 'react-icons/fa'
// import { FaBookmark } from 'react-icons/fa'



function App() {
    return (
        <>
            <Routes>
            
                <Route path='/' element={<AppLayout />} >
                    <Route index element={<Home />} />

                    <Route path='search' element={<Search />} />

                    <Route path='explore' element={<Explore />} />

                    <Route path='saved' element={<Saved />} />

                    <Route path=':profileName' >
                        <Route index element={<Profile />} />
                        <Route path='videos' element={<Profile />} />
                    </Route>

                    <Route path='post' element={<Post />} />

                    <Route path='*' element={<NotFound />} />
                </Route>

            </Routes>
        </>
    );
}

export default App;
