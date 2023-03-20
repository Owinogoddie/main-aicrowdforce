import {React,useEffect, useState} from 'react'
import './ourbenefits.css'

const Ourbenefits = () => {
  const[items,setItems]=useState([])

  

  const url=import.meta.env.VITE_REACT_APP_API_URL2
  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(`${url}whyus`);
      const data = await response.json();
      console.log(data.data)
      setItems(data.data);
    };

    fetchItems();
  }, []);
  return (
    <div class="row-fluid-wrapper row-depth-1 row-number-4 ">
<div class="row-fluid ">
<div class="span12 widget-span widget-type-custom_widget " data-widget-type="custom_widget" data-x="0" data-w="12">
<div id="hs_cos_wrapper_module_1651837062083120" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" 
 data-hs-cos-general-type="widget" data-hs-cos-type="module">
    <div class="sfbv1-wrapper">
  <div class="sfbv1-container">
    <div class="sfbv1-title-section">
      <h2>Benefits Of working with us</h2>
    
    </div>
    
    
    <div class="sfbv1-single-block">     
          {
            items.map((item)=>(
                 
        <div class="sfbv1-repeat-block">
        <div class="sfbv1-header">
            
              <img src={item.image} alt={item.title} />
       
            <h3>{item.title}</h3>
        </div> 
        <div class="sfbv1-short-desc">
         
            <p>{item.description}</p>
        </div>
        
        <div class="sfbv1-link-cta">
            <a href="www.cloudfactory.html">
               
            </a>
        </div>
            
            
        </div>
            ))
          }          
               
            

       </div>
  </div>  
</div></div>

</div>
</div>
</div>
  )
}

export default Ourbenefits