 
import React, { useState ,useEffect} from 'react';
import './annotations.css'

const AnnotationTypes = () => {

  const url=import.meta.env.VITE_REACT_APP_API_URL2


    const [categories, setCategories] = useState([]);
    const [item, setItem] = useState([]);
  
    const [items, setItems] = useState([]);
  
  
    
    const filterData = async(id) => {
      const response = await fetch(`${url}annotations/${id}`);
      const data = await response.json();
     
      
      setItem(data)
      };
    
  
    useEffect(() => {
      const fetchItems = async () => {
        const response = await fetch(`${url}annotations`);
        const data = await response.json();
        setItems(data);
        // console.log(data)
    
        const response2 = await fetch(`${url}annotations`);
        const data2 = await response2.json();
        setItem(data2[0]);
      };
    
      
    
      fetchItems();
    }, []);
      
    
  return (
    
<div class="row-fluid-wrapper row-depth-1 row-number-2 ">
<div class="row-fluid ">
<div class="span12 widget-span widget-type-custom_widget "  data-widget-type="custom_widget" data-x="0" data-w="12">
<div id="hs_cos_wrapper_module_1676979694466234" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module"data-hs-cos-general-type="widget" data-hs-cos-type="module">
<div class="stmv1-section-wrapper" 
>
  <div class="stmv1-container">
    

<div class="main-hs-tabs">
  
  
   
      <div class="tabber-section-heading">
        <h2>Human-in-the-loop AI Solutions that Integrate People and Technology</h2>
        
      </div>
  
  
  <div class="stmv1-nav-wrap">
    
  
  <ul class="main-hs-tabs__nav"> 

  {
    items.map((item)=>(
      <li><a  class="main-hs-tabs__navitem main-hs-tabs__navitem--active" onClick={() => filterData(item._id)}>
       
      <span class="list-header-icon">
        <img src="images/icons-v1-accelerated-annotation-thin-01.svg" alt="Accelerated Annotation" width="400" height="400"/>
      </span>  
      
      <h3>{item.title}</h3>
      </a>
      </li>
    ))
  } 
    
  </ul>
  </div>
    <div class="main-tab-content-wrap">
  
  
    <div id="main-tab-1" class="main-hs-tabs__item main-hs-tabs__item--active">
      
      <div class="tabber-content-whole-wrap">
        
      <div class="tcww-block-one">
        <div class="tabber-summary-title">
          
            <h3>
              <a href="accelerated-annotation.html">
                 {item.title}
              </a>
            </h3>
            
            
        </div>
        <div class="tabber-summary">
          <p>{item.description}</p>
        </div>
        
        
          
        
        
      </div>
      <div class="tcww-block-two">
        	
            <a href="accelerated-annotation.html" class="tcww-block-two__graphic-link">
                <img src="images/accelerated-annotation-Accelerate-Annotation-segmentation-sample.png" alt="Accelerated Annotation" loading="lazy"/>
            </a>
            
      </div>
        
        
        
        </div>
  </div>
  
    <div id="main-tab-2" class="main-hs-tabs__item">
      
      <div class="tabber-content-whole-wrap">
        
      <div class="tcww-block-one">
        <div class="tabber-summary-title">
          
            <h3>
              <a href="computer-vision.html">
                 Vision AI 
              </a>
            </h3>
          
        </div>
        <div class="tabber-summary">
          <p>Simplify and accelerate Vision AI labeling using our Managed Workforce bundled with a best-in-class platform or using your own tool.</p>
        </div>
        
        
          
        
        
      </div>
      <div class="tcww-block-two">
        	
            <a href="computer-vision.html" class="tcww-block-two__graphic-link">
                <img src="images/accelerated-annotation-Accelerate-Annotation-segmentation-sample.png" alt="Accelerated Annotation" loading="lazy"/>
            </a>
            
      </div>
        
        
        
        </div>
      
  </div>
  
    <div id="main-tab-3" class="main-hs-tabs__item">
      
      <div class="tabber-content-whole-wrap">
        
      <div class="tcww-block-one">
        <div class="tabber-summary-title">
          
            <h3>
              <a href="nlp.html">
                 Natural Language Processing
              </a>
            </h3>
            
            
        </div>
        <div class="tabber-summary">
          <p>Scale your text and audio annotation using our Managed Workforce bundled with a best-in-class platform or using your own tool.</p>
        </div>
        
        
          
        
        
      </div>
      <div class="tcww-block-two">
        	
            <a href="nlp.html" class="tcww-block-two__graphic-link">
                <img src="images/images-NLP-Customer-Review-1200x900.jpg" alt="NLP" loading="lazy"/>
            </a>
            
      </div>
        
        
        
        </div>
      
  </div>
  
    <div id="main-tab-4" class="main-hs-tabs__item">
      
      <div class="tabber-content-whole-wrap">
        
      <div class="tcww-block-one">
        <div class="tabber-summary-title">
          
            <h3>
              <a href="data-processing.html">
                 Data Processing
              </a>
            </h3>
           
        </div>
        <div class="tabber-summary">
          <p>Optimize your business operations with our Managed Workforce services for data processing and other back-office tasks.</p>
        </div>
        
      </div>
      <div class="tcww-block-two">
        	
            <a href="data-processing.html" class="tcww-block-two__graphic-link">
                <img src="images/images-Data-Processing-thumbnail-1200x900.jpg" alt="Data Processing" loading="lazy"/>
            </a>
            
      </div>
        
        
        
        </div>
      
      
      
  </div>
  
      </div>  
</div>
  </div>
</div>
</div>

</div>
</div>
</div>
  )
}

export default AnnotationTypes