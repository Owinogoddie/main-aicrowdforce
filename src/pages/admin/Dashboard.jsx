import React from 'react'
import Table from 'react-bootstrap/Table';
import Sidebar from './Sidebar';

import { FaWallet,FaBitcoin,FaBiohazard,FaBookOpen,FaBriefcase,FaBullseye,FaBraille } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';


const Dashboard = () => {
  return (
   
    <>
    
    <div class="grid-container">

     <Sidebar/>
      
      <main class="main-container" style={{minWidth:'900px',marginLeft:'1.5REM'}}>
     
      <div class="main-title">
          <p class="font-weight-bold">DASHBOARD</p>
        </div>

        <div class="main-cards">

          <div class="card">
            <div class="card-inner">
              <p class="text-primary">USERS</p>
              <span class="material-icons-outlined text-blue"><FaWallet/></span>
            </div>
            <span class="text-primary font-weight-bold">249</span>
          </div>

          <div class="card">
            <div class="card-inner">
              <p class="text-primary">USE CASE CATS</p>
              <span class="material-icons-outlined text-orange"><FaBiohazard/></span>
            </div>
            <span class="text-primary font-weight-bold">83</span>
          </div>

          <div class="card">
            <div class="card-inner">
              <p class="text-primary">USE CASES</p>
              <span class="material-icons-outlined text-green"><FaBookOpen/></span>
            </div>
            <span class="text-primary font-weight-bold">79</span>
          </div>

          <div class="card">
            <div class="card-inner">
              <p class="text-primary">EXPERTISE</p>
              <span class="material-icons-outlined text-red"><FaBriefcase/></span>
            </div>
            <span class="text-primary font-weight-bold">56</span>
          </div>

        </div>

    
    </main>
      

      </div>
    </>
  )
}


export default Dashboard