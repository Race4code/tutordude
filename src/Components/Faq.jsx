import React from 'react'
import './Faq.css'


const Faq = ({item}) => {
  return (
    <div className='faqCard'>
        <div className='icons'>
          <img src={item.img} alt={item.title}/>
        </div>
        <div className='faqContent'>
          <p className='faqTitle'>{item.title}</p>
          <p className='faqDescription'>{item.description}</p>
        </div>
    </div>
  )
}

export default Faq