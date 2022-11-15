import React,{useState} from 'react'
import { Navbar,Main,Footer,ReferralDash,Route } from '../AllExports'

const Home = () => {
    const[flag,setFlag] = useState(false)
    const[route,setRoute] = useState(["UI/UX","Refer & Earn"])
  return (
    <div>
        <Navbar/>
        <Route setRoute={setRoute} route={route} flag={flag} setFlag={setFlag}/>
        {flag?<ReferralDash setFlag={setFlag} flag={flag} setRoute={setRoute}/>:<Main />}
        <Footer flag={flag} setFlag={setFlag} setRoute={setRoute}/>
    </div>
  )
}

export default Home
