import React from 'react'
import Navbar from './navbar'
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <>
    <div className="flex flex-row h-screen">
        {/* Sidebar */}
        <div className="basis-1/6">
          <Navbar />
        </div>
        {/* Content */}
        <Outlet/>
      </div>
    </>
  )
}

export default Layout