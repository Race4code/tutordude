import React from 'react'
import './Footer.css'


const Footer = ({flag,setFlag,setRoute}) => {
    const handleClick=()=>{
      window.scrollTo(0,0)
      console.log('flag changed')
      setFlag(!flag)
      setRoute("Friends Referred")
    }
  return (
    <div className='footer'>
      {!flag &&<p onClick={handleClick}>Friends Who Enrolled</p>}
      <p>Terms & Conditions</p>
    </div>
  )
}

export default Footer