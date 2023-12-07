import React from 'react'

import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import Header from './components/Header'
import PostEditorModal from './components/PostEditorModal'



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

            {isPostModalOpen && <PostEditorModal closePostModal={closePostModal} />}
        </>
    )
}

export default AppLayout