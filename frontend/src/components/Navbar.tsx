import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-black text-white top-0 sticky flex space-x-6 p-3'>
        <Link to='/profile' >profile</Link>
        <Link to='/friends' >friends</Link>
        <Link to='/add friend' >add friend</Link>
    </div>
  )
}

export default Navbar