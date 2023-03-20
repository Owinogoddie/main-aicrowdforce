import React from 'react'
import { Link } from 'react-router-dom';
import './header.css'

const Header1 = ({title,image,desc,link1,linktext1,link2,linktext2}) => {
  
  const myStyle={
    backgroundImage: image,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
  return (
    
// .sbv1-banner.center {
//   text-align: center;
//   background-image:url('https://www.cloudfactory.com/hubfs/web19/images/partnership/partnership-banner-02.jpg');
// }
    // <Header1 title="About Page" image={ImgHeader} link1="patners" linktext1="Partners We Work With" link2="contact" linktext2="Become a partner"/>
    <div class="row-fluid-wrapper row-depth-1 row-number-1 ">
    <div class="row-fluid ">
    <div class="span12 widget-span widget-type-custom_widget " data-widget-type="custom_widget" data-x="0" data-w="12" >
    <div id="hs_cos_wrapper_module_1663606991769111" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" 
    data-hs-cos-general-type="widget" data-hs-cos-type="module" style={{background:'red'}}>
    
    <div class="sbv1-banner center ">
      <img src={image} alt="" height='490px' width='100%' style={{zIndex:"0",position:'absolute',top:0,left:0,backgroundPosition:'center'}} />
      <div class="sbv1-wrapper"> 
        <div class="sbv1-container" style={{backgroundImage: image}}>
          <div class="sbv1-content-wrapper">
            
           
              <h1>{title}</h1>
        
            <div class="sbv1-shot-detail">
             <p>{desc}</p>
            </div>
            <div class="sbv1-cta">
              
              
              
                <div class="sbv1-single-cta">
                  
                  
                  <Link to={link1}>
                    {linktext1}
                  </Link>
                </div>
              
                <div class="sbv1-single-cta">
                  
                  
                <Link to={link2}>
                    {linktext2}
                  </Link>
                </div>
              
    
            </div>
          </div>
        </div>
      </div>
    </div></div>
    
    </div>
    </div>
    </div>
  )
}

export default Header1