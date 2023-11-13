import React from 'react'

import Header from './components/Header'

import { Outlet } from 'react-router-dom'


const AppLayout = () => {
    return (
        <>
            <Header />

            <main>
                <Outlet />
            </main>

        </>
    )
}

export default AppLayout