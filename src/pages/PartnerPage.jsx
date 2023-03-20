import React from 'react'
import PartnerBenefits from '../Components/partner/PartnerBenefits'
import PartnerSec from '../Components/partner/PartnerSec'
import Header1 from '../Components/header/Header1'
import img1 from '../assets/workforce-management-platform.jpg'

const PartnerPage = () => {
  return (
    <>
    
    <Header1 title="Partners Page" desc="Grow your AI and automation portfolio by adding a scalable human-in-the-loop solution" 
    image={img1} link1="/patners" linktext1="Partners " link2="/contact" linktext2="contact"/>
        <PartnerSec/>
        <PartnerBenefits/>
    </>
  )
}

export default PartnerPage