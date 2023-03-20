import React from 'react'
import Header1 from '../Components/header/Header1'
import PartnerSec from '../Components/partner/PartnerSec'
import Usecases from './usecases/Usecases'

import img from'../assets/workforce-management-platform.jpg'

const UsecasePage = () => {
  return (
    <>
    <Header1 title="About Page" desc="Grow your AI and automation portfolio by adding a scalable human-in-the-loop solution" 
        image={img} link1="/patners" linktext1="Partners " link2="/contact" linktext2="Become a partner"/>
    
    <Usecases/>

    </>
  )
}

export default UsecasePage