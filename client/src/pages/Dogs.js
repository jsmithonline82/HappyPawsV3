import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import DogList from '../components/DogList';
import DogModal from '../components/DogModal';
import { Container } from 'reactstrap';



import 'bootstrap/dist/css/bootstrap.min.css';



function Dogs() {

  return (

    <Container style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', marginTop: '10%' }}>
      <DogModal />
      <DogList />
    </Container>

  );

}

export default Dogs;
