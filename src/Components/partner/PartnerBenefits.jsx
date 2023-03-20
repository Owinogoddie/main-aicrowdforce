import {React,useEffect,useState} from 'react'
import './partnerbenefits.css'

const PartnerBenefits = () => {
  
  const[itemRight,setItemRight]=useState([])
  const[itemLeft,setItemLeft]=useState([])
  const[itemLeft2,setItemLeft2]=useState([])
  const[items,setItems]=useState([])
  

  const url=import.meta.env.VITE_REACT_APP_API_URL2
  
  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(`${url}benefits`);
      const data = await response.json();
      setItems(data);

      setItemLeft(data[0])
      setItemRight(data[1])
      setItemLeft2(data[2])

    };

    

    fetchItems();
  }, []);


  return (
    
    <div class="row-fluid-wrapper row-depth-1 row-number-5 ">
<div class="row-fluid ">
<div class="span12 widget-span widget-type-custom_widget " data-widget-type="custom_widget" data-x="0" data-w="12">
<div id="hs_cos_wrapper_module_1662965527278112" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module"  
data-hs-cos-general-type="widget" data-hs-cos-type="module">
    <div class="scesv1-section " >
  <h2 class="sec-title">
    <div id="hs_cos_wrapper_module_1662965527278112_" 
    class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_inline_text"  data-hs-cos-general-type="widget" data-hs-cos-type="inline_text" 
    data-hs-cos-field="text_field" style={{textAlign:'center',marginBottom:'4rem !important'}}>Partner Benefits</div>
  </h2>


  {itemRight ? 
  
  <div class="scesv1-container">
    <div class="scesv1-wrapper Right">
      
    <div class="scesv1-content-details">
        <div class="scesv1-content-wrap">
          
           
          <h3>{itemRight.title}</h3>
          <p class="scesv1_title-tag">
           
          </p>
           <p>{itemRight.description}</p>
        </div>
      </div>
      <div class="scesv1-thumbnail-wrap">
        <div class="scesv1-thumbnail-img">
          	
         <img src={itemRight.image} alt={itemLeft.title} loading="lazy"/>
            
        </div>
      </div>
    </div>
  </div>
  
  :""}
  {itemLeft ?
  
  <div class="scesv1-container">
    <div class="scesv1-wrapper Left">
      <div class="scesv1-content-details">
        <div class="scesv1-content-wrap">
          
           
          <h3>{itemLeft.title}</h3>
          <p class="scesv1_title-tag">
           
          </p>
           <p>{itemLeft.description}</p>
        </div>
      </div>
      <div class="scesv1-thumbnail-wrap">
        <div class="scesv1-thumbnail-img">
          	
         <img src={itemLeft.image} alt={itemLeft.title} loading="lazy"/>
            
        </div>
      </div>
    </div>
  </div>
  :""}
  
  {
    itemLeft2 ?
    
  <div class="scesv1-container">
  <div class="scesv1-wrapper Right">
    
    
  <div class="scesv1-content-details">
        <div class="scesv1-content-wrap">
          
           
          <h3>{itemLeft2.title}</h3>
          <p class="scesv1_title-tag">
           
          </p>
           <p>{itemLeft2.description}</p>
        </div>
      </div>
      <div class="scesv1-thumbnail-wrap">
        <div class="scesv1-thumbnail-img">
          	
         <img src={itemLeft2.image} alt={itemLeft.title} loading="lazy"/>
            
        </div>
      </div>

  </div>
</div>
:""
  }
  
</div></div>

</div>
</div>
</div>
  )
}

export default PartnerBenefits