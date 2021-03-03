import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReservationList from '../components/ReservationList';
import ReservationModal from '../components/ReservationModal';
import { Container } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

function Reservations() {

return (
    
        <Container style={{backgroundColor:'rgba(255, 255, 255, 0.8)', marginTop:'10%'}}>
          <ReservationModal />
          <ReservationList />
        </Container>   
  );
}

export default Reservations;
