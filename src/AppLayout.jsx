import React from 'react'

import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import Header from './components/Header'
import ModalPostEditor from './components/ModalPostEditor'



const AppLayout = () => {
    const [isPostModalOpen, setIsPostModalOpen] = useState(false);

    const openPostModal = () => {
        setIsPostModalOpen(true);
    };

    const closePostModal = () => {
        setIsPostModalOpen(false);
    };

    return (
        <>
            <Header openPostModal={openPostModal} />

            <main>
                <Outlet />
            </main>

            {isPostModalOpen && <ModalPostEditor closePostModal={closePostModal} />}
        </>
    )
}

export default AppLayout