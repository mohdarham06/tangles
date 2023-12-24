
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
    // theme--${theme} accent--${accentColor}

    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'light') {
            root.style.setProperty('--background', '#ffffff');
            root.style.setProperty('--font', '#000000');
        }
        if (theme === 'dark') {
            root.style.setProperty('--background', '#000000');
            root.style.setProperty('--font', '#ffffff');
        }
        return () => {
            // Reset CSS variables to their original values if needed
            root.style.setProperty('--background', '#ffffff');
            root.style.setProperty('--font', '#000000');
            // Reset other CSS variables as needed
        };
    }, [theme])

    useEffect(() => {
        const root = document.documentElement;
        const updateAccentColor = (color, rgb) => {
            root.style.setProperty('--accent-color', color);
            root.style.setProperty('--accent-rgb', rgb);
        };

        switch (accentColor) {
            case 'blue':
                updateAccentColor('#289df0', '40, 157, 240');
                break;
            case 'yellow':
                updateAccentColor('#ffd400', '255, 212, 0');
                break;
            case 'pink':
                updateAccentColor('#f91880', '249, 24, 128');
                break;
            case 'purple':
                updateAccentColor('#7856ff', '120, 86, 255');
                break;
            case 'orange':
                updateAccentColor('#ff7a00', '255, 122, 0');
                break;
            case 'green':
                updateAccentColor('#00ba7c', '0, 186, 124');
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
