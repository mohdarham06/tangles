


import Home from './routes/Home';
import { Routes, Route } from 'react-router-dom';

// import Loader from "./components/Loader";

// import { GoHome } from 'react-icons/go'
// import { GoHomeFill } from 'react-icons/go'
// import { FaRegBookmark } from 'react-icons/fa'
// import { FaBookmark } from 'react-icons/fa'



function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />

                
            </Routes>

            


        </>
    );
}

export default App;
