import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar'

export const MainLayout = () => {
        return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    )
}
