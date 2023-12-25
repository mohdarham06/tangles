
import AppLayout from './AppLayout';

import Home from './routes/Home';
import Search from './routes/Search'
import Explore from './routes/Explore';
import Saved from './routes/Saved';
import Profile from './routes/Profile';
import NotFound from './routes/NotFound';

import { useTheme } from './context/ThemeContext';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';




function App() {
    const { theme, accentColor } = useTheme();

    useEffect(() => {
        const body = document.querySelector("body");
        
        if (theme === 'light') {
            body.setAttribute("data-theme", 'light')
        }
        if (theme === 'dark') {
            body.setAttribute("data-theme", 'dark')
        }

        return () => {
            // Reset any other attributes as needed
            body.removeAttribute("data-theme");
        };
    }, [theme])

    useEffect(() => {
        const body = document.querySelector("body");

        switch (accentColor) {
            case 'blue':
                body.setAttribute("data-accent", accentColor)

                break;
            case 'yellow':
                body.setAttribute("data-accent", accentColor)

                break;
            case 'pink':
                body.setAttribute("data-accent", accentColor)

                break;
            case 'purple':
                body.setAttribute("data-accent", accentColor)

                break;
            case 'orange':
                body.setAttribute("data-accent", accentColor)

                break;
            case 'green':
                body.setAttribute("data-accent", accentColor)

                break;
            default:
                break;
        }
    }, [accentColor])



    return (
        <div className='App'>

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


        </div>
    );
}

export default App;
