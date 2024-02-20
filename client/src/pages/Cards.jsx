import React, { useContext } from 'react'
import { AuthContext } from '../context/userContext'

import Sidebar from '../components/common/Sidebar'

function Cards() {
  const { user } = useContext(AuthContext)
  return (
    <>
    <div className='flex '>
    <Sidebar/>
    <div>
    <h1 className='text-4xl font-bold mb-4'>Cards</h1>
    <p className='text-lg'>Welcome back, {user.name}</p>
    </div>
    </div>
    </>
  )
}

export default Cards