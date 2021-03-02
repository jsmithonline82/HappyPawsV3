import React from "react"; 
import "./style.css";
import Scroll2 from "./images/pexels-josh-hild-2820134.jpg"

//The fixed and scroll 1-3 components are for the fancy fixed scroll effect to render////

function ScrollTwo() {
    return (



<div className="scroll pb-5 border-top border-light">
    <img src={Scroll2} alt="/" className="dog2 float-right border border-light mt-3 mb-3 ml-4"/>
    <p className="display-3 text-right text-md-left text-justify">
      We love all dog breeds!
    </p>
  </div>

)
}

export default ScrollTwo;