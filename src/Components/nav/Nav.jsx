import {useEffect, useContext, useState } from 'react'
import './nav.css'
import { CategoryContext } from '../../CategoryContext'
import $ from 'jquery'
import { Link } from 'react-router-dom'

const Nav = () => {

  const { category, setCategory } = useContext(CategoryContext);
  const [categories,setCategories]=useState([])

  const url=import.meta.env.VITE_REACT_APP_API_URL2
  
  useEffect(() => {
    const fetchItems = async () => {
      

      const response2 = await fetch(`${url}casecategory`);
      const data2 = await response2.json();
      setCategories(data2);
      // console.log(data2)
     
      setCategories(data2)

    };

   

    fetchItems();
  }, []);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };
    const handleclick=()=>{
        $('.shgmv1-menu-bar-mobile').toggleClass('active');
          $('.shgmv1-navigation').toggleClass('active');
          $('.shgmv1-child-menu').removeClass('active');
          $('.shgmv1-has-child p.shgmv1-main-nav').removeClass('active');
          
      }

      function handleMainNavClick(event) {
        const mainNav = event.target;
        mainNav.classList.toggle('active');
        mainNav.parentNode.querySelector('.shgmv1-child-menu').classList.toggle('active');
      }
  return (
    
    <div class="header-container-wrapper">
    <div class="header-container container-fluid">

<div class="row-fluid-wrapper row-depth-1 row-number-1 ">
<div class="row-fluid ">
<div class="span12 widget-span widget-type-custom_widget "data-widget-type="custom_widget" data-x="0" data-w="12">
<div id="hs_cos_wrapper_module_166365070140491" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" data-hs-cos-general-type="widget" data-hs-cos-type="module"><div class="shgmv1-header-global">
  <div class="shgmv1-container">
    <div class="shgmv1-logo-wrap">
      
      <span id="hs_cos_wrapper_module_166365070140491_" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_logo"  data-hs-cos-general-type="widget" data-hs-cos-type="logo"> <Link to='/'id="hs-link-module_166365070140491_" >
        <img src="images/logo-cf-logo-white-2022-500px.png" class="hs-image-widget " width="500" alt="CloudFactory" title="CloudFactory" loading="" /></Link></span>
    </div>
    <div class="shgmv1-navigation">
      <div class="shgmv1-nav-wrap">


        <div class="shgmv1-nav-list shgmv1-has-child" onClick={handleMainNavClick}>
          <p class="shgmv1-main-nav">
            Aproaches<span class="shgmv1-nav-arrow"></span>
          </p>
          <div class="shgmv1-child-menu">
            
            <div class="shgmv1-nav-split">
              <div class="shgmv1-one-half">
                <p class="shgmv1-sub-title">
                  Vision AI
                </p>
                <ul>
                  
                  <li>
                    
                      <Link to="computer-visions">
                      
                    Computer Vision
                    <span>
                       AI-assisted labeling with Managed Workforce for 2-D images
                    </span>
                    
                    </Link> 
                  </li>
                  
                </ul>
              </div>
               <div class="shgmv1-one-half">
                <p class="shgmv1-sub-title">
                  NLP
                </p>
                 
                <ul class="new-nav-bar">
                   
                  <li>
                   
                    
                    <a href="">
                   Workforce Plus
                    <span>
                      Our Managed Workforce bundled with tooling for text, audio, and more
                    </span>
                    </a>  
                  </li>
                  
                  
                </ul>

                  <p class="shgmv1-sub-title">
                  Data Processing
                </p>
                 <ul>
                  
                  <li>
                   	
                    
                    <a>
                   Managed Workforce
                    <span>
                     Workforce services for high-volume business processes
                    </span>
                    </a>  
                  </li>
                  
                </ul>

              </div>
            </div>
          </div>
        </div>

        <div class="shgmv1-nav-list shgmv1-has-child" onClick={handleMainNavClick}>
          <p class="shgmv1-main-nav">
            Use Cases<span class="shgmv1-nav-arrow"></span>
          </p>
          <div class="shgmv1-child-menu">
            <ul>
            {/* `http://localhost:4000/api/expertise/${id}` */}

            {
              categories.map((item)=>(
                <li>
                <Link to={`/${item.category.toLowerCase()}-services`} onClick={() => handleCategoryChange(item._id)}>
                  {item.category}
                </Link> 
                </li>
              ))
            }

{/* onClick={() => handleCategoryChange('Books')} */}
              {/* <li>
              <Link to="/financial-services">
                Finance
              </Link> 
              </li>
              
              <li>
                
                <Link to="aerial-services">
                Aerial geo-services
                </Link> 
              </li>
              <li>
                
                <Link to="autonomous-services">
                Autonomous vehicles
                </Link> 
              </li>
              <li>
                
                <Link to="agricultural-services">
                Agriculture
                </Link> 
              </li>
              <li>
          
        <Link to="retail-services">
                Retail
                </Link> 
              </li>
              <li>
          
        <Link to="insuarance-services">
                Insurance
                </Link> 
              </li>
              <li>
          
        <Link to="health-services">
                Health services
                </Link> 
              </li> */}
              
              
              <li class="shgmv1-explore-cta">
                
              <Link to="/use-cases">
                Use Cases
              </Link>
                 
              </li>
            </ul>
          </div>
        </div>

        <div class="shgmv1-nav-list">
          <p class="shgmv1-main-nav">
           <Link to="clients">Clients</Link>
          </p>
          
        </div>
        <div class="shgmv1-nav-list">
          <p class="shgmv1-main-nav">
           <Link to="/admin/dashboard">Admin</Link>
          </p>
        </div>

{/* 
        <div class="shgmv1-nav-list shgmv1-has-child" onClick={handleMainNavClick}>
          <p class="shgmv1-main-nav">
            Resources<span class="shgmv1-nav-arrow"></span>
          </p>
          <div class="shgmv1-child-menu">
            <div class="shgmv1-nav-split">
               <div class="shgmv1-one-half">
                <p class="shgmv1-sub-title">
                  Popular Guides
                </p>
                <ul>
   
                                   
                  <li>
                    
                    
                    <a href="data-labeling-guide.html">
                    Data Labeling Guide
                    <span>
                      The Ultimate Guide to Data Labeling for Machine Learning
                    </span>
                    </a>  
                  </li>
         
                                   
                  <li>
                    
                    
                    <a href="computer-vision-guide.html">
                    Computer Vision Guide
                    <span>
                      Vision AI Applications, Data Quality, and Your Workforce
                    </span>
                    </a>  
                  </li>
         
                                   
                  <li>
                    
                    
                    <a href="natural-language-processing-guide.html">
                    NLP Guide
                    <span>
                      Natural Language Processing Techniques, Workforces, and Use Cases
                    </span>
                    </a>  
                  </li>
         
                                   
                  <li>
                    
                    
                    <a href="data-processing-guide.html">
                    Data Processing Guide
                    <span>
                      Outsourcing Data Cleansing, Transcription, and Enrichment at Scale
                    </span>
                    </a>  
                  </li>
         
                   
                </ul>
              </div>
               <div class="shgmv1-one-half">
                <p class="shgmv1-sub-title">
                  Key Resources
                </p>
                <ul>
  
                   
                  <li>
                    
                    
                    <a href="https://blog.cloudfactory.com/">
                    Blog
                    </a>  
                  </li>      
                   
                  <li>
                    
                    
                    <a href="webinars.html">
                    Webinars
                    </a>  
                  </li>      
                   
                  <li>
                    
                    
                    <a href="use-cases.html">
                    Use Cases
                    </a>  
                  </li>      
                  
                       
                  <li class="shgmv1-explore-cta">
                    <a href="resources.html">
                    Explore All Resources
                    </a> 
                  </li>
                  
                </ul>
              </div>
            </div>
            
          </div>
        </div> */}

        <div class="shgmv1-nav-list shgmv1-has-child" onClick={handleMainNavClick}>
          <p class="shgmv1-main-nav">
            Company<span class="shgmv1-nav-arrow"></span>
          </p>
           <div class="shgmv1-child-menu">
            <div class="shgmv1-nav-split">
               <div class="shgmv1-one-half">
                <p class="shgmv1-sub-title">
                  Company Info
                </p>
                <ul>
                         
                  <li>
                    
                    <Link to="about">About Us
                    </Link> 
                  </li>  

                  <Link to="partner">Partner
                    </Link> 
                      
                  
                </ul>
              </div>
               <div class="shgmv1-one-half">
                <p class="shgmv1-sub-title">
                  Compliance
                </p>
                <ul>
                  
                <Link to="certifications">Certifications
                  </Link>
                  
                  
                <Link to="privacy">Privacy
                  </Link>
                  
                   
                <Link to="privacy">Data Security
                  </Link>
                  
                </ul>
              </div>
            </div>  
          </div>
        </div>

        <div class="shgmv1-nav-list shgmv1-CTA">
          <p>
            <a>Contact Us</a>
          </p>
        </div>

    
      </div>
    </div>
    <div class="shgmv1-menu-bar-mobile" onClick={handleclick}>
      <span class="nav-line-hr"></span>
      <span class="nav-line-hr"></span>
      <span class="nav-line-hr"></span>
    </div>
  </div>
</div></div>

</div>
</div>
</div>

    </div>
</div>
  )
}

export default Nav