import React, { useEffect ,useState} from 'react'
import './Applications.css'

const Applications = () => {
  
  const [items, setItems] = useState([]);

   
  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(`${url}expertise`);
      const data = await response.json();
      setItems(data);
      console.log(items)
    };

    fetchItems();
  }, []);
  return (
    
    <div class="row-fluid-wrapper row-depth-1 row-number-3 ">
<div class="row-fluid ">
<div class="span12 widget-span widget-type-custom_widget "  data-widget-type="custom_widget" data-x="0" data-w="12">
<div id="hs_cos_wrapper_module_167144763216479" 
class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module"  data-hs-cos-general-type="widget" data-hs-cos-type="module">
    <div class="sbfsv1-section-wrapper">
  
  <div class="sbfsv1-container">
    
    <div class="sbfsv1-section-header">
      <h2>Experience and Expertise Across Industries and Use Cases</h2>
      <p></p>
    </div>
    
    
    
    <div class="sbfsv1-featured-wrapper">
      

      {
        items.map((item)=>(
          
       <div class="sbfsv1-featured-single "  key={item._id}>
        
       <div class="sbfsv1-featured-image">
         
           
           <a href="geospatial.html">
             <img src={item.image} alt="Aerial and Geospatial" loading="lazy" width="853" height="640" />
            </a>  
         
       </div>
       <div class="sbfsv1-featured-content">
         <h3>
           
           <a href="geospatial.html">
           {item.title}
           </a>      
         </h3>
         <p>{item.description}</p>
         
       </div>
       
     </div>
        )
        )
      }
      
       
      
    </div>
    

  </div>
</div></div>

</div>
</div>
    </div>

  )
}

export default Applications