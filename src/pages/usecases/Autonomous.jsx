import {React,useState,useEffect} from 'react'
import Header1 from '../../Components/header/Header1'
import Single from './Single'
import Ourbenefits from '../../Components/ourbenefits/Ourbenefits'
import CompanyQuote from '../../Components/companyquote/CompanyQuote'
import VisionTypes from '../computervision/VisionTypes'
import './single.css'

import img from'../../assets/workforce-management-platform.jpg'

const Autonomous = () => {
  const [items, setItems] = useState([]);
  const[categories,setCategories]=useState([])

  const url=import.meta.env.VITE_REACT_APP_API_URL2
   
  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(`${url}usecases/641729e69c8636ff40017d92`);
      const data = await response.json();
      setItems(data);

    };

    

    fetchItems();
  }, []);
  return (
    <>   
    {/* import ImgHeader from'../../assets/hero-banner-image-01.jpg' */}
        <Header1 title="About Page" desc="Grow your AI and automation portfolio by adding a scalable human-in-the-loop solution" 
        image={img} link1="/patners" linktext1="Partners " link2="/contact" linktext2="Become a partner"/>
{/* 
    {
      items.map((item)=>(

        <Single imag={item.image} title={item.title} description={item.description}/>
      ))
    } */}


    
<div class="row-fluid-wrapper row-depth-1 row-number-3 ">
<div class="row-fluid ">
<div class="span12 widget-span widget-type-custom_widget " data-widget-type="custom_widget" data-x="0" data-w="12">
<div id="hs_cos_wrapper_module_165243583133870" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module"  data-hs-cos-general-type="widget" 
data-hs-cos-type="module">

<div class="sov1-section show-bg-image">
  
  <div class="sov1-container">
    <div class="srdv1-title-section">
      <h2>A Few Use Cases We Support</h2>
      <p class="srdv1-sub-heading"></p>
    </div>
 
    <div class="srdv1-list-wrapper">
   
    {
      items.map((item)=>(

        <Single image={item.image} title={item.title} description={item.description}/>
      ))
    }
 </div>
  </div>
</div></div>

</div>
</div>
</div>
<VisionTypes/>
<Ourbenefits/>
<CompanyQuote/>
    </>
  )
}

export default Autonomous