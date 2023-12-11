
import AppLayout from './AppLayout';

import Home from './routes/Home';
import Search from './routes/Search'
import Explore from './routes/Explore';
import Saved from './routes/Saved';
import Profile from './routes/Profile';
import NotFound from './routes/NotFound';

import { ToastProvider } from './context/ToastContext';

import { Routes, Route } from 'react-router-dom';




function App() {
    return (
        <>
            <ToastProvider>

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

                        <Route path='*' element={<NotFound />} />
                    </Route>

                </Routes>

            </ToastProvider>
        </>
    );
}

export default App;
