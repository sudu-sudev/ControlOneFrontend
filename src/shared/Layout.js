import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'


const Layout = () => {
  return (
    <div className='container flex min-w-full'> 
        <Navbar/>
        <div className='flex-1'>{<Outlet/>}</div>
    </div>
  )
}

export default Layout