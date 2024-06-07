import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
   <header className='bg-white '>
    <div className="container mx-auto max-w-container px-1 sm:px-2 py-3">
        <div className='flex justify-between items-center'>
     <Link to="/" className="left-part text-2xl font-bold">
       Dashboard
     </Link>
     <div className="right-part flex text-[18px] font-medium items-center">
      <span className='text-[#2148c0] mr-2'>
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="M18.5 20.247V16S16 14.5 12 14.5S5.5 16 5.5 16v4.247M1.5 12C1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12S17.799 22.5 12 22.5S1.5 17.799 1.5 12Zm10.426.5S8.5 10.68 8.5 8c0-1.933 1.569-3.5 3.504-3.5A3.495 3.495 0 0 1 15.5 8c0 2.68-3.426 4.5-3.426 4.5z"/></svg>
      </span>
      Admin
     </div>
     </div>
     </div>
   </header>
  )
}

export default Header