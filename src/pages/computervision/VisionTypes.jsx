 
import React, { useState ,useEffect} from 'react';





const VisionTypes = () => {
  const [categories, setCategories] = useState([]);
  const [item, setItem] = useState([]);

  const [items, setItems] = useState([]);


  const url=import.meta.env.VITE_REACT_APP_API_URL2
  
  const filterData = async(id) => {
    const response = await fetch(`${url}allvisions/${id}`);
    const data = await response.json();
    console.log(data)
    
    setItem(data)
    };
  

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(`${url}allvisions`);
      const data = await response.json();
      setItems(data);
      // console.log(data)
  
      const response2 = await fetch(`${url}allvisions`);
      const data2 = await response2.json();
      setItem(data2[0]);
    };
  
    
  
    fetchItems();
  }, []);
    
  return (
    <div class="row-fluid-wrapper row-depth-1 row-number-11 ">
<div class="row-fluid ">
<div class="span12 widget-span widget-type-cell services-expertise"  data-widget-type="cell" data-x="0" data-w="12">

<div class="row-fluid-wrapper row-depth-1 row-number-12 ">
<div class="row-fluid ">
<div class="span12 widget-span widget-type-custom_widget sec-title"  data-widget-type="custom_widget" data-x="0" data-w="12">
<div id="hs_cos_wrapper_module_1602125456892528" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-rich_text"  data-hs-cos-general-type="widget" data-hs-cos-type="module"><span id="hs_cos_wrapper_module_1602125456892528_" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_rich_text"  data-hs-cos-general-type="widget" data-hs-cos-type="rich_text"><h2>Computer Vision Expertise</h2>
<p>From object recognition and tracking to semantic segmentation and 3-D point cloud annotations, we bring a greater understanding of the visual world with detailed, accurately labeled images and videos to improve the performance of your computer vision models.</p></span></div>

</div>
</div>
</div>

<div class="row-fluid-wrapper row-depth-1 row-number-13 ">
<div class="row-fluid ">
<div class="span12 widget-span widget-type-custom_widget "  data-widget-type="custom_widget" data-x="0" data-w="12">
<div id="hs_cos_wrapper_module_1602126000960698" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module"  data-hs-cos-general-type="widget" data-hs-cos-type="module"><div class="main-hs-tabs">
  <ul class="main-hs-tabs__nav">

    {
      items.map((item)=>(
        <li onClick={() => filterData(item._id)}> 
      <a  class="main-hs-tabs__navitem main-hs-tabs__navitem--active">
       
        <img src={item.icon} alt="Bounding Box" width="400" height="400"/>
      
      <h3><div id="hs_cos_wrapper_module_1602126000960698_" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_inline_text" 
       data-hs-cos-general-type="widget" data-hs-cos-type="inline_text" data-hs-cos-field="tab_label">{item.title}</div></h3>
      </a>
      </li>

      ))
    }  
    
  </ul>
  
  
	
	
	
	{ item?

<div id="main-tab-1" class="main-hs-tabs__item main-hs-tabs__item--active">
      
<div class="tabber-content-whole-wrap">
  
<div class="tcww-block-one">
  <div class="tabber-summary-title">
    
      <h2>
       <div id="hs_cos_wrapper_module_1602126000960698_" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_inline_rich_text"  data-hs-cos-general-type="widget" data-hs-cos-type="inline_rich_text" data-hs-cos-field="tab_content_title">{item.title}</div>
       
      </h2>
   
  </div>
  <div class="tabber-summary">
    <p></p><div id="hs_cos_wrapper_module_1602126000960698_" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_inline_rich_text"  data-hs-cos-general-type="widget" data-hs-cos-type="inline_rich_text" data-hs-cos-field="content"><p>Drawing a box around a target object in visual data. Bounding boxes can be 2-D or 3-D.</p></div><p></p>
  </div>
  <div class="tabber-cta-btn">
    
  </div>
</div>
<div class="tcww-block-two">
  <div id="hs_cos_wrapper_module_1602126000960698_" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_inline_rich_text"  data-hs-cos-general-type="widget" data-hs-cos-type="inline_rich_text" data-hs-cos-field="image_gif_video"><p>
      <img src={item.image} alt={item.title}/></p></div>
</div>
  
  </div>

</div>
: ""

  }
	  
  
  
	
  
  
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

export default VisionTypes