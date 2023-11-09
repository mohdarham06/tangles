


// import Home from './routes/Home';
// import { Routes, Route } from 'react-router-dom';




function App() {
    return (
        <>

            <header className="header">
                <div className="header__container">

                    <div className="header__brand">Brand</div>

                    <nav className="header__nav">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <span className="nav__item__icon"></span>
                                <span className="nav__item__text">Home</span>
                            </li>
                            <li className="nav__item">
                                <span className="nav__item__icon"></span>
                                <span className="nav__item__text">Search</span>
                            </li>
                            <li className="nav__item">
                                <span className="nav__item__icon"></span>
                                <span className="nav__item__text">Chats</span>
                            </li>
                            <li className="nav__item">
                                <span className="nav__item__icon"></span>
                                <span className="nav__item__text">Bookmarks</span>
                            </li>
                            <li className="nav__item">
                                <span className="nav__item__icon"></span>
                                <span className="nav__item__text">Profile</span>
                            </li>
                        </ul>
                    </nav>


                </div>
            </header>


            <main>
                    <h1>Main</h1>
                    

            </main>







            {/* <Routes>
                <Route path='/' element={<Home />} />
            </Routes> */}
        </>
    );
}

export default App;
