import React from "react"; 
import "./style.css";
import Scroll1 from "./images/dogs3.jpg"

//The fixed and scroll 1-3 components are for the fancy fixed scroll effect to render////

function ScrollOne() {
    return (



<div className="scroll pb-5 border-top border-light">
    <img src={Scroll1} alt="/" className="pups float-right border border-light mb-3 ml-4"/>
    <p className="display-3 text-right text-md-left text-justify">
      Your dog will be well taken care of with lots of enrichment!
    </p>
  </div>

)
}

export default ScrollOne;