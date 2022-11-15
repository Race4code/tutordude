import React from 'react'
import './Card.css'
 

const Card = ({item}) => {
  return (
    <div className='referralCard'>
        <div className='referralCardHeader'>
          <p className='referreName'>{item.name}</p>
          <p>{item.date}</p>
        </div>
        <p className='coursesEnrolled'>Course Enrolled({item.courses.length})</p>
        <div className='courses'>
            {
                item.courses.map((item,index)=>{
                  return <p key={index} className='courseBtn'>{item}</p>
                })
            }
        </div>
        <p className='cardFooter'>Referral Amount<span className='earning'> &#x20B9; {item.referralAmount}</span></p>
    </div>
  )
}

export default Card