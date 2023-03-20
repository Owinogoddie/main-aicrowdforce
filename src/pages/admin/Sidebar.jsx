import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillDashboard } from 'react-icons/ai';
import { FaWallet,FaBitcoin,FaBiohazard,FaBookOpen,FaBriefcase,FaBullseye,FaBraille } from 'react-icons/fa';

const Sidebar = () => {
    const openSidebar=()=>{
        alert('yyyy')
    
    }
    
    const closeSidebar=()=>{
        alert('yyyy')
    
    }
  return (
    <>
      

      <aside id="sidebar">
        <div class="sidebar-title">
          <div class="sidebar-brand">
            <span class="material-icons-outlined"></span> Crowdforce
          </div>
          <span class="material-icons-outlined" onclick={closeSidebar}>close</span>
        </div>
        <ul class="sidebar-list">

 

          <li class="sidebar-list-item">
            <Link to="/admin/dashboard">
              <span class="material-icons-outlined"><AiFillDashboard/></span> Dashboard
            </Link>
          </li>
          <li class="sidebar-list-item">
            <Link to="/admin/case-categories">
              <span class="material-icons-outlined"><FaWallet/></span> Use caseCategories
            </Link>
          </li>
          <li class="sidebar-list-item">
            <Link to="/admin/usecases">
              <span class="material-icons-outlined"><FaBitcoin/></span> Use Cases
            </Link>
          </li>
          <li class="sidebar-list-item">
            <Link to="/admin/expertise">
              <span class="material-icons-outlined"><FaBiohazard/></span> Industries
            </Link>
          </li>
          <li class="sidebar-list-item">
            <Link to="/admin/partner-benefits">
              <span class="material-icons-outlined"><FaBookOpen/></span> Partner Benefits
            </Link>
            </li>
          <li class="sidebar-list-item">
            <Link to="/admin/annotation-types">
              <span class="material-icons-outlined"><FaBookOpen/></span> Annotation Types
            </Link>
             </li>
          <li class="sidebar-list-item">
            <Link to="/admin/our-advantages">
              <span class="material-icons-outlined"><FaBullseye/></span> Why us
            </Link>
          </li>
          <li class="sidebar-list-item">
            <Link to="/admin/vision-categories">
              <span class="material-icons-outlined"><FaBullseye/></span> Vision Categories
            </Link>
            </li>
          <li class="sidebar-list-item">
            <Link to="/admin/image-visions">
              <span class="material-icons-outlined"><FaBullseye/></span> Image Visions
            </Link>
          </li>
        </ul>
      </aside>
    
    </>
  )
}

export default Sidebar