import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import Dogs from "./pages/Dogs";
import AppNavbar from './components/AppNavbar';
import footer from './components/footer';


import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Reservations from './pages/Reservations';
import Footer from './components/footer';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <Router>
          <AppNavbar />
            
            <Route exact path="/" component={Dashboard} /> 
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/Dogs" component={Dogs} />
            <Route exact path="/Reservations" component={Reservations} />

          <Footer />
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
