import React from 'react'
import Navbar from '../layout/Navbar'
import UserTable from '../component/UserTable'


const Home = () => {
  
  return (
    <div className='home'>
        <Navbar/>
        <UserTable />
    </div>
  )
}

export default Home