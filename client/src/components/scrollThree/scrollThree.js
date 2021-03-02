import React from "react"; 
import "./style.css";
import Logo from './images/happypaws.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//The fixed and scroll 1-3 components are for the fancy fixed scroll effect to render////
//THIS ALSO CONTAINS A CONTACT FORM WHICH COULD BE ITS OWN COMPONENT BUT IT BREAKS THE EFFECT.


function ScrollThree() {
    return (



<Container fluid className="conty">
          <Row className="no-padding">
            <Col id="contact" md={{ span: 6, offset: 3 }} className="overflow-auto contact mb-5 text-white border border-light rounded-lg shadow-lg">
              <h1 className="text-left border-bottom mt-2 pt=2 pb=2">Contact us</h1>
              <address className="b-5">
                <img id="dog" alt="/" src={Logo} className="float-right mb-lg-4 border border-light"/>
                <form className="text-left" action="mailto:jsmithbootcamp2020@gmail.com" method="post">
                    Name:<br/>
                    <input type="text" name="name"/><br/>
                    E-mail:<br/>
                    <input type="text" name="mail"/><br/>
                    Comment:<br/>
                    <input type="text" name="comment" size="30"/><br/><br/>
                    <input type="submit" value="Send"/>
                    <input type="reset" value="Reset"/>
                </form>
                </address>
            </Col>
          </Row>
</Container>
 

  

)
}

export default ScrollThree;