import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../navbar/Navbar'
import Footer from '../Footer'

export const DashboardLayout: React.FC = () => {
    return (
        <div>
            <Navbar/>
            <Outlet />
            <Footer />
        </div>
    )
}
