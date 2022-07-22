import React from 'react'
import Logo1 from '../Images/Logo1.png'
import Logo2 from '../Images/Logo2.png'

export default function Header() {
  return (
    <> 
    
     <div className='Header'>
     <div className='Scrobits'>
     <img src={Logo1}/> 
     </div>
      <h2 id="API">API Monitoring Web-app</h2>
    </div>
    <div className='ScrobitsLogo'>
         <img src={Logo2}/>
    </div>
    </>
  )
}
