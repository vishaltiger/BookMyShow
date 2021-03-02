import React from 'react';
import {images} from "./images";

function Slider() {
  return (

    <div className="Slider">
        <div className="carousel" data-flickity='{ "wrapAround": true,"autoPlay": true}'>
        {
            images.map(item=>{
                return(
                    <div className="carousel-cell"><img src={item.url}/></div>
                    )
            })
        }
   </div>
    </div>
  );
}

export default Slider;
