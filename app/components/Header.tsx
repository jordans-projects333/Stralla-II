import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className='w-full border-b border-black'>
        <div className='flex'>
            <h1 className='text-3xl ml-2 mt-2 font-semibold tracking-wide'>Stralla</h1>
            <button className='ml-auto text-white bg-black rounded-lg px-3 mr-2 py-1 mt-2'>Sign in</button>
        </div>
        <Navbar/>
    </header>
  )
}

export default Header