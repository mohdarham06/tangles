
import AppLayout from './AppLayout';

import Home from './routes/Home';
import Search from './routes/Search'
import Notifications from './routes/Notifications';
import Saved from './routes/Saved';
import Profile from './routes/Profile';
import NotFound from './routes/NotFound';

import './styles/mediaqueries.css';

import { useTheme } from './context/ThemeContext';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';




function App() {
    const { theme, accentColor } = useTheme();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);


    useEffect(() => {
        const rootElement = document.documentElement;

        if (theme === 'light') {
            rootElement.setAttribute("data-theme", 'light')
        }
        if (theme === 'dark') {
            rootElement.setAttribute("data-theme", 'dark')
        }

        return () => {
            // Reset any other attributes as needed
            rootElement.removeAttribute("data-theme");
        };
    }, [theme])

    useEffect(() => {
        const rootElement = document.documentElement;

        switch (accentColor) {
            case 'purple':
                rootElement.setAttribute("data-accent", accentColor)

                break;
            case 'yellow':
                rootElement.setAttribute("data-accent", accentColor)

                break;
            case 'pink':
                rootElement.setAttribute("data-accent", accentColor)

                break;
            case 'blue':
                rootElement.setAttribute("data-accent", accentColor)

                break;
            case 'orange':
                rootElement.setAttribute("data-accent", accentColor)

                break;
            case 'green':
                rootElement.setAttribute("data-accent", accentColor)

                break;
            default:
                break;
        }
    }, [accentColor])



    return (
        <>

            <Routes>
                <Route path='/' element={<AppLayout />} >
                    <Route index element={<Home />} />

                    <Route path='search' element={<Search />} />

                    <Route path='notifications' element={<Notifications />} />

                    <Route path='saved' element={<Saved />} />

                    <Route path=':profileName' >
                        <Route index element={<Profile />} />
                        <Route path='videos' element={<Profile />} />
                    </Route>

                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>

        </>
    );
}

export default App;
