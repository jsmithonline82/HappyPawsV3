import React, { Component, Fragment } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RegisterModal from './auth/RegisterModal';
import LoginModal from './auth/LoginModal';
import Logout from './auth/Logout';
import Logo from "./images/logoSm.png"

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Fragment>
        <NavItem>
          <span className='navbar-text text-dark mr-3'>
            <strong>{user ? `Welcome ${user.name}` : ''}</strong>
          </span>
        </NavItem>
        <NavItem>
        <a className="navbar-text text-dark mr-3" href="/dashboard">Home <span class="sr-only">(current)</span></a>
        </NavItem>
        <NavItem>
        <a className="navbar-text text-dark mr-3" href="/Reservations">Reservations</a>
        </NavItem>
        <a className="navbar-text text-dark mr-3" href="/Dogs">Dogs</a>
        <NavItem>
          <Logout/>
        </NavItem>
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <NavItem>
          <RegisterModal />
        </NavItem>
        <NavItem>
          <LoginModal className="text-dark"/>
        </NavItem>
      </Fragment>
    );

    return (
      <div>
        <Navbar style={{backgroundColor: "#FFE4B5"}} dark expand='sm' className='mb-5 fixed-top'>
          <Container>
            <NavbarBrand img src={Logo} alt="" href='/dashboard' className='text-dark'>Happy Paws</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className='ml-auto' navbar>
                {isAuthenticated ? authLinks : guestLinks}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(AppNavbar);