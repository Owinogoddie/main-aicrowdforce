import React from 'react'
import HomeHeader from '../Components/homeheader/HomeHeader'
import AnnotationTypes from '../Components/annotationtypes/AnnotationTypes'
import Applications from '../Components/applications/Applications'
import CTA from '../Components/cta/CTA'
import ClientCompanies from '../Components/clientCompanies/ClientCompanies'

const Home = () => {
  return (
    <>
    <HomeHeader/>
    <AnnotationTypes/>
    <Applications/>
    <CTA/>
    <ClientCompanies/>
    
    </>
  )
}

export default Home