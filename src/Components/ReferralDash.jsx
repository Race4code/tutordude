import React from 'react'
import './ReferralDash.css'
import {enrollment,Card,arrow} from '../AllExports'


const FriendsEnroll = ({setFlag,flag,setRoute}) => {
  const handleClick=()=>{
    setFlag(!flag)
    setRoute("")
  }
  return (
    <div className='container'>
      <div className='goBack' ><img src={arrow} alt="arrow" onClick={handleClick}/><p>go back</p></div>
        <div className='referalCodeNWallet'>
            <div className='referrCode'>
                <p className='yourReferralCode'>Your Referral Code</p>
                <p className='referralCod'>EDCH54</p>
            </div>
            <div className='wallet'>
                <p className='walletBalance'>Wallet Balance</p>
                <p className='balance'>&#x20B9; 500</p>
            </div>
        </div>
        <p className='friendsWhoEnrolled'>Friends who enrolled <span className='friendsWhoEnrolledCount'>({enrollment.length})</span></p>
        <div className='friendsEnrolled'>
          {
            enrollment.map((item)=>{
              return <Card key={item.id} item={item} />
            })
          }
        </div>
    </div>
  )
}

export default FriendsEnroll