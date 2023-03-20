import React from 'react'
import whatsapp from '../../assets/whatsapp.png'
const Whatsapp = () => {
  return (
    <div className='whatsapp__icon'>
        
        <a href="https://wa.me/+254714045777" target="_blank" rel="noopener noreferrer">
            <img src={whatsapp} alt="whatsapp-logo" />
        </a>
     </div>
  )
}

export default Whatsapp