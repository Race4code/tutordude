import React from 'react'
import './Main.css'
import {Faq,data} from '../AllExports'

const Main = () => {
  return (
    <div>
    <div className='referral'>
            <div className='earnings'>
                <div className='referralDetails'>
                    <div className='compo'>
                        <p className='name'>Referral Earnings</p>
                        <p className='price'>&#x20B9; 2500</p>
                    </div>
                    <div className='compo'>
                        <p className='name'> Total Referrals</p>
                        <p className='price'>7</p>
                    </div>
                    <div className='compo'>
                        <p className='name'>Wallet Balance</p>
                        <p className='price'>&#x20B9; 500</p>
                    </div>
                    <button className='small'>Withdraw Balance</button>
                </div>
                <button className='btn'>Withdraw Balance</button>
            </div>
            <div className='referralCode'>
                <p className='referCode'>Your Referral Code</p>
                <div className='userReferralCode'><p>EDCH54</p></div>
            </div>
        </div>
        <div className='howItWorks'>
        <p>How does it work ?</p>
            <div className='faq'>
               
                {
                    data.map((item)=>{
                        return <Faq key={item.id} item={item}/>
                    })
                }
            </div>
        </div>
     </div>
  )
}

export default Main