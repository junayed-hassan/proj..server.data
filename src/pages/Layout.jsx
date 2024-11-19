import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <header className='my-7 pb-96'>
            <nav>
                <ul className='flex items-center justify-center gap-5'>
                    <li className='py-2 px-6 bg-green-600 text-yellow-100'><Link to="/">Home</Link></li>
                    <li className='py-2 px-6 bg-green-600 text-yellow-100'><Link to="/about">About</Link></li>
                    <li className='py-2 px-6 bg-green-600 text-yellow-100'><Link to="/contact">Contact</Link></li>
                    <li className='py-2 px-6 bg-green-600 text-yellow-100'><Link to="/gallery">Gallery</Link></li>
                </ul>
            </nav>
            <main className='ps-7'>
                <h2 className='text-2xl font-semibold my-4'>Page Content Below</h2>
                <Outlet/>
            </main>
        </header>
        <footer className='text-center'>
            <strong>This is Footer</strong>
        </footer>
    </div>
  )
}

export default Layout