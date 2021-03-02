import React from "react"; 
import "./style.css";
import BigLogo from "./images/happypaws.png"

//FOR THE FRONT PAGE

function Jumbotron() {
    return (

<div className="jumbotron border-light mb-0">
        
  <img id="logo" alt='/' className="mx-auto d-block mt-5 shadow-lg" src={BigLogo}/>
  <br/>
  <h2 className="mt-5 border border-bold rounded-lg shadow-lg text-center" ><span className="display-2 font-weight-normal m-3 text-dark">A safe place for play, grooming, boarding and Happy Paws</span></h2>
  <hr className="my-4"/>
</div>

)
    }

export default Jumbotron;