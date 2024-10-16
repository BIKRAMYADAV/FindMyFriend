import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-black text-white top-0 sticky flex p-6'>
        <Link to='/home' className='w-1/2'>FMF</Link>
        <div className=' flex space-x-6 justify-end w-1/2'>
        <Link to='/profile' >profile</Link>
        <Link to='/friends' >friends</Link>
        </div>
       
    </div>
  )
}

export default Navbar