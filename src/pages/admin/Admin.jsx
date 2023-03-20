import React from 'react'
import './admind.css'
import { Route, Routes } from 'react-router-dom';


import Dashboard from './Dashboard'
import Sidebar from './Sidebar'
import AnnotationTyoes from './AnnotationTyoes'
import AddAnnotations from './annotationtypes/AddAnnotations'
import WorkoutForm from './annotationtypes/WorkoutForm'
import Add from './annotationtypes/Add'
import AddExpertise from './ourexpertise/AddExpertise'
import AllExpertise from './ourexpertise/AllExpertise'

const Admin = () => {



  return (
    
    <div class="grid-container">

     <Sidebar/>
      
      <main class="main-container" style={{minWidth:'900px',marginLeft:'1.5REM'}}>
        
      </main>
      

    </div>
    
    // <div class="grid-container" >
    // <Sidebar/>
    // <main class="main-container" >
    // <AllExpertise/>
   

  //  </main>
  //   </div>
  )
}

export default Admin