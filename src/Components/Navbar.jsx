import React from 'react'
import {logo,profile,down,Whitedown} from '../AllExports'
import './Navbar.css'


const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="logo"/>
      <div className='navbuttons'>
        <ul>
          <li>My Assignment</li>
          <li>Chat with Mentor</li>
          <li><button className='profileBtn'><img src={profile} alt="profile"/><p>ProfileName</p><img src={down} alt="drop menu"/></button></li>
          <button className='mobBtn'><p>ProfileName</p><img src={Whitedown} alt="downBtn"/></button>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
