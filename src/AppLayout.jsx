import React from 'react'

import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import Header from './components/Header'
import PostEditorModal from './components/PostEditorModal'



const AppLayout = () => {
    
    return (
        <>
            <Header openPostModal={openPostModal} />

            <main>
                <Outlet />

            </main>

        </>
    )
}

export default AppLayout