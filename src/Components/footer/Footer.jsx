import {useEffect, useContext, useState } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

  const url=import.meta.env.VITE_REACT_APP_API_URL2
  const [categories,setCategories]=useState([])

  
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

  return (
    
    <div class="row-fluid-wrapper row-depth-1 row-number-1 " style={{background:'#2d3e50'}}>
<div class="row-fluid ">
<div class="span12 widget-span widget-type-global_group "  data-widget-type="global_group" data-x="0" data-w="12">
<div class="" data-global-widget-path="generated_global_groups/84885212723.html"><div class="row-fluid-wrapper row-depth-1 row-number-1 ">
<div class="row-fluid ">
<div class="span12 widget-span widget-type-cell cf-global-footer21"  data-widget-type="cell" data-x="0" data-w="12">

<div class="row-fluid-wrapper row-depth-1 row-number-2 ">
<div class="row-fluid ">
<div class="span10 widget-span widget-type-custom_widget footer-global-menu"  data-widget-type="custom_widget" data-x="0" data-w="10">
<div id="hs_cos_wrapper_module_104228028" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-menu"  data-hs-cos-general-type="widget" data-hs-cos-type="module">
<span id="hs_cos_wrapper_module_104228028_" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_menu"  data-hs-cos-general-type="widget" data-hs-cos-type="menu"><div id="hs_menu_wrapper_module_104228028_" class="hs-menu-wrapper active-branch no-flyouts hs-menu-flow-horizontal" role="navigation" data-sitemap-name="default" data-menu-id="84884401932" aria-label="Navigation Menu">
 <ul role="menu" class="active-branch">
  <li class="hs-menu-item hs-menu-depth-1 hs-item-has-children" role="none"><a href="javascript:;.html" aria-haspopup="true" aria-expanded="false" role="menuitem">Solutions</a>
   <ul role="menu" class="hs-menu-children-wrapper">
    <li class="hs-menu-item hs-menu-depth-2" role="none"> <Link to="/computer-visions"><a  role="menuitem">Computer Visions</a></Link></li>
    <li class="hs-menu-item hs-menu-depth-2" role="none"><a  role="menuitem">Workforce Plus</a></li>
    <li class="hs-menu-item hs-menu-depth-2" role="none"><a  role="menuitem">Data Processing Managed Workforce</a></li>
   </ul></li>
  <li class="hs-menu-item hs-menu-depth-1 hs-item-has-children" role="none"><a href="javascript:;.html" aria-haspopup="true" aria-expanded="false" role="menuitem">Use Cases</a>
   <ul role="menu" class="hs-menu-children-wrapper">

    <li class="hs-menu-item hs-menu-depth-2" role="none">
      <a role="menuitem">
      {
              categories.map((item)=>(
                <li class="hs-menu-item hs-menu-depth-2" role="none">
                <Link to={`/${item.category.toLowerCase()}-services`} onClick={() => handleCategoryChange(item._id)}>
                  {item.category}
                </Link> 
                </li>
              ))
            }
        
        
        </a>
    </li>
   
   </ul></li>
  <li class="hs-menu-item hs-menu-depth-1 hs-item-has-children active-branch" role="none"><a href="javascript:;.html" aria-haspopup="true" aria-expanded="false" role="menuitem">Company</a>
   <ul role="menu" class="hs-menu-children-wrapper active-branch">
    <Link to='/about'>
    <li class="hs-menu-item hs-menu-depth-2 active active-branch" role="none"><a href="about.html" role="menuitem">About Us</a></li>
    </Link>

    <Link to='/certifications'>
    <li class="hs-menu-item hs-menu-depth-2 active active-branch" role="none"><a href="about.html" role="menuitem">Certifications</a></li>
    </Link>

    <Link to='/privacy'>
    <li class="hs-menu-item hs-menu-depth-2 active active-branch" role="none"><a href="about.html" role="menuitem">Privacy</a></li>
    </Link>
    <Link to='/partner'>
    <li class="hs-menu-item hs-menu-depth-2 active active-branch" role="none"><a href="about.html" role="menuitem">Partner with us</a></li>
    </Link>
   
    {/* <li class="hs-menu-item hs-menu-depth-2" role="none"><a  role="menuitem">Leadership Team</a></li>
    <li class="hs-menu-item hs-menu-depth-2" role="none"><a  role="menuitem">Partnerships</a></li>
    <li class="hs-menu-item hs-menu-depth-2" role="none"><a  role="menuitem">Newsroom</a></li>
    <li class="hs-menu-item hs-menu-depth-2" role="none"><a  role="menuitem" target="_blank" rel="noopener">Careers</a></li>
    <li class="hs-menu-item hs-menu-depth-2" role="none"><a role="menuitem">Compliance</a></li>
    <li class="hs-menu-item hs-menu-depth-2" role="none"><a role="menuitem">Data Security</a></li> */}
   </ul></li>
   <li>

   <ul class="footer-social-icons">
<li class="linkedin-icon"><a href="https://www.linkedin.com" target="_blank" rel="noopener">&nbsp;</a></li>
<li class="twitter-icon"><a href="https://twitter.com/" target="_blank" rel="noopener"> &nbsp;</a></li>
<li class="facebook-icon"><a href="https://www.facebook.com/" target="_blank" rel="noopener"> &nbsp;</a></li>
<li class="youtube-icon"><a href="https://www.youtube.com/" target="_blank" rel="noopener"> &nbsp;</a></li>
<li class="envelope-icon"><a href="mailto:job.mbuvi@aicrowdforce.com"> &nbsp;</a></li>
</ul>
   </li>
 </ul>
</div></span></div>

</div>
<div class="span2 widget-span widget-type-custom_widget footer-contact-block"  data-widget-type="custom_widget" data-x="10" data-w="2">
<div id="hs_cos_wrapper_module_86246743" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-rich_text"  data-hs-cos-general-type="widget" data-hs-cos-type="module"><span id="hs_cos_wrapper_module_86246743_" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_rich_text"  data-hs-cos-general-type="widget" data-hs-cos-type="rich_text"><h3 class="footer-contact-menu-cta"><a href="contact.html"> Contact Us</a></h3>
<ul class="footer-phone-no">
<li><a href="tel:254(714)045-777">+254(714)045-777</a></li>
</ul>
</span></div>

</div>
</div>
</div>

<div class="row-fluid-wrapper row-depth-1 row-number-3 ">
<div class="row-fluid ">
<div class="span12 widget-span widget-type-cell footer-copyright-wrap"  data-widget-type="cell" data-x="0" data-w="12">

<div class="row-fluid-wrapper row-depth-1 row-number-4 ">
<div class="row-fluid ">
<div class="span7 widget-span widget-type-custom_widget footer-copyright"  data-widget-type="custom_widget" data-x="0" data-w="7">
<div id="hs_cos_wrapper_module_698783871" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-rich_text"  data-hs-cos-general-type="widget" data-hs-cos-type="module"><span id="hs_cos_wrapper_module_698783871_" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_rich_text"  data-hs-cos-general-type="widget" data-hs-cos-type="rich_text"><p>© 2023 <a href="www.cloudfactory.html">AI Workforce </a> | 
<Link to="/privacy">
<a href="privacy.html">Privacy Policy</a>
</Link>


</p></span>

</div>

</div>
<div class="span5 widget-span widget-type-custom_widget footer-logo-block"  data-widget-type="custom_widget" data-x="7" data-w="5">
<div id="hs_cos_wrapper_module_924812045" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module widget-type-rich_text"  data-hs-cos-general-type="widget" data-hs-cos-type="module"><span id="hs_cos_wrapper_module_924812045_" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_rich_text"  data-hs-cos-general-type="widget" data-hs-cos-type="rich_text"><div class="mark-of-trust">
<ul>
<li title="ISO 9001 Quality Management Systems and ISO/IEC 27001 Information Security Management Certified">&nbsp;</li>
<li title="SOC 2 2020 Assure Professional">&nbsp;</li>
</ul>
</div></span></div>

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
</div>
</div>
  )
}

export default Footer