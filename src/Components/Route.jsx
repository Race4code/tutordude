import React from 'react'
import './Route.css'


const Route = ({setRoute,route,flag,setFlag}) => {
  const handleClick=()=>{
    setFlag(!flag)
    setRoute("")
  }
  return (
    <div className='route'>
      <span>{`UI/UX > `}</span>
      {!flag && <span style={{color:"black",fontWeight:"600",textDecoration:"underline"}}>Refer & Earn</span>}
      {
        flag && 
        <> 
          <span onClick={handleClick}>{`Refer & Earn >`}</span>
          <span style={{color:'black',fontWeight:"600",textDecoration:"underline"}}>{` ${route}`}</span>
        </>
      }
    </div>
  )
}

export default Route