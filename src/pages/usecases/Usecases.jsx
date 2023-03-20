import {React,useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import './usecases.css'

const Usecases = () => {
  
  const url=import.meta.env.VITE_REACT_APP_API_URL2

  const[items,setItems]=useState([])
  const[categories,setCategories]=useState([])
  const[link,setLink]=useState('')


const handleLink=(category)=>{
  // if(category=='641729d99c8636ff40017d90'){
  //   setLink('financial-services')
  // }
  // if(category=='641729d99c8636ff40017d90'){
  //   setLink('agricultural-services')
  // }
  // if(category=='641729e69c8636ff40017d92'){
  //   setLink('insurance-services')
  // }
  // if(category=='64172a0b9c8636ff40017d97'){
  //   setLink('health-services')
  // }
  // if(category=='641729d99c8636ff40017d90'){
  //   setLink('financial-services')
  // }
  // if(category=='641729e69c8636ff40017d92'){
  //   setLink('financial-services')
  // }
  // else{

  // setLink('retail-services')
  // }
  
    
}
  
   
  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(`${url}usecases`);
      const data = await response.json();
      setItems(data);

      const response2 = await fetch(`${url}casecategory`);
      const data2 = await response2.json();
      setCategories(data2);
      
     

    };

   

    fetchItems();
  }, []);

  const filterData = async(id) => {
    const response = await fetch(`${url}usecases/${id}`);
    const data = await response.json();
    
    setItems(data)
    };
   

  const handleAll=async()=>{
    const response = await fetch(`${url}usecases`);
    const data = await response.json();
    setItems(data);
    
  }
  return (
    
    <div class="row-fluid-wrapper row-depth-1 row-number-5 ">
<div class="row-fluid ">
<div class="span12 widget-span widget-type-cell usecase-module-whole-wrap" sdata-widget-type="cell" data-x="0" data-w="12">

<div class="row-fluid-wrapper row-depth-1 row-number-6 ">
<div class="row-fluid ">
<div class="span12 widget-span widget-type-custom_widget "  data-widget-type="custom_widget" data-x="0" data-w="12">
<div id="hs_cos_wrapper_module_166969442964086" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" 
 data-hs-cos-general-type="widget" data-hs-cos-type="module"><div class="ufm-wrapper">
  <div class="filter-mob-icon">
    <p>
      Filter
    </p>
  </div>
  <div class="uf-section">
    <div id="myBtnContainer">
        <button class="btn-m active all " onClick={()=>handleAll()}> All</button>
      <div class="filter-nav-block-wrap">
      <h2 class="usecase-first-title active">Solution Area</h2>
          
    
        <div class="filter-nav-btn-wrap active">
          {
            categories.map((item)=>(
              <button class="btn-m computer-vision "  onClick={() => filterData(item._id)} style={{paddingBottom:'10px'}}> {item.category}</button>
            ))
          }
       
     
      
      
        </div>
      </div>
    
    </div>
    
  </div>
  
  
  <div class="ufmc-wrapper">
    
    
    {
      items.map((item)=>(
       
        

        <div class="filterDiv  computer-vision   healthcare   2D  video  show">
   
   {handleLink(item.category)}
   
   
   
        <Link to={link}>
          <img src={item.image} alt="Medical Devices" />
        </Link>
    
        <h3>
          <a  target="_self">
          <div id="hs_cos_wrapper_module_166969442964086_" 
        class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_inline_text" s data-hs-cos-general-type="widget" 
        data-hs-cos-type="inline_text" data-hs-cos-field="use_case_title">{item.title}s</div>
        </a>
        </h3>
        <div class="ufm-sd"><div id="hs_cos_wrapper_module_166969442964086_" 
        class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_inline_rich_text" s data-hs-cos-general-type="widget" data-hs-cos-type="inline_rich_text" data-hs-cos-field="short_description">
          <p><span>{item.description}.</span></p></div></div>
  
      </div>
      ))
    }


   

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

export default Usecases