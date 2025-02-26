import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={assets.logo} alt="" />
      {/* <img className='profile' src={assets.profile_image} alt="" /> */}
      <img className='profile' src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt=''/>
    </div>
  )
}

export default Navbar
