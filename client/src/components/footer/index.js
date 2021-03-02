import React from "react"; 
import "./style.css";

function Footer() {
    return (
        <footer className="footer fixed-bottom m-0  text-white border-top border-light mt-5">
        <div className="container text-center">
          <span className="text-center">
            <a className="m-3 fbl" href="https://www.facebook.com/detroitruffians/" rel="noreferrer" target="_blank" ><i className="fa fa-facebook-square" ></i></a>
            <a className="instl" href="https://www.instagram.com/detroitruffians/?hl=en" rel="noreferrer" target="_blank" ><i className="fa fa-instagram" ></i></a>
            <span className="ml-5 text-dark text-center">Copyright Make It Rain 2021</span>
          </span>
        </div>
      </footer>
)
}

export default Footer;