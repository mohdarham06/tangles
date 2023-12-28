import React from 'react'

import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import Header from './components/Header'
import ModalPostEditor from './components/ModalPostEditor'
import ModalDisplayEditor from './components/ModalDisplayEditor'
import Toast from './components/Toast'



const AppLayout = () => {
    const [isPostModalOpen, setIsPostModalOpen] = useState(false);
    const [isDisplayModalOpen, setIsDisplayModalOpen] = useState(false);

    const openPostModal = () => {
        setIsPostModalOpen(true);
    };

    const closePostModal = () => {
        setIsPostModalOpen(false);
    };

    const openDisplayModal = () => {
        setIsDisplayModalOpen(true);
    };

    const closeDisplayModal = () => {
        setIsDisplayModalOpen(false);
    };



    return (
        <>
            <Header
                openPostModal={openPostModal}
                openDisplayModal={openDisplayModal}
            />

            <main>
                <Outlet />
            </main>

            {isPostModalOpen &&
                <ModalPostEditor closePostModal={closePostModal} />
            }

            {isDisplayModalOpen &&
                <ModalDisplayEditor closeDisplayModal={closeDisplayModal} />
            }
            <Toast />
        </>
    )
}

export default AppLayout