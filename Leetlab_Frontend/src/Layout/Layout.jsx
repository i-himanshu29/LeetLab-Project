import React from 'react'
import { Outlet } from 'react-router-dom'
// import Navbar from '../components/Navbar'
import Navbar from '../components/LandingPage/Navbar'
import Footer from '../components/LandingPage/Footer'
const Layout = () => {
  return (
    <div  className='w-full'>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  )
}

export default Layout