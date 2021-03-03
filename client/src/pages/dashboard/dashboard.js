import React from 'react';
import "./style.css";

import FixedOne from "../../components/fixedOne/fixedOne";
import Jumbotron from "../../components/jumbotron/jumbotron";
import ScrollOne from "../../components/scrollOne/scrollOne";
import FixedTwo from '../../components/fixedTwo/fixedTwo';
import ScrollTwo from "../../components/scrollTwo/scrollTwo";
import FixedThree from '../../components/fixedThree/fixedThree';
import ScrollThree from '../../components/scrollThree/scrollThree'

function Dashboard() {
  return (
  
<div className="wrap">

  <Jumbotron />
  <FixedOne />
  <ScrollOne />
  <FixedTwo />
  <ScrollTwo />
  <FixedThree />
  <ScrollThree />

</div>

     );
}

export default Dashboard;
