import React from 'react'
import './single.css'

const Single = ({title,description,image}) => {
  return (
    
    
    <div class="sov1-wrapper Left">
      <div class="sov1-content-details">
        <div class="sov1-content-wrap">
          
          
          <h3>
            <a href="finance-document-processing.html">
            {title}
            </a>
              </h3>
          <p>{description}</p>
          
{/*           
          <p>
            <a href="finance-document-processing.html">
            Learn more about document processing automation.
            </a>
          </p>	 */}
          
        </div>
      </div>
      <div class="sov1-thumbnail-wrap">
         <a href="finance-document-processing.html">
        <div class="sov1-thumbnail-img 	Yes">
      
          	
              
              
                
              
               
              <img src={image} alt={image} loading="lazy" />
            
          
        </div>
          </a>
      </div>
    </div>
  )
}

export default Single