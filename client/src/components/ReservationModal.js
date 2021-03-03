import React, { Component } from 'react';
// import ImageUpload from "./ImageUpload"; ---Not in use
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addReservation } from '../actions/reservationActions';
import PropTypes from 'prop-types';


class ReservationModal extends Component {
  state = {
    modal: false,
    name: '',
    service: '',
    time: '',
    date: ''
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value,
                    // [e.target.service]: e.target.value,
                    [e.target.time]: e.target.value,
                    [e.target.date]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const newReservation = {
      name: this.state.name,
      // service: this.state.service,
      time: this.state.time,
      date: this.state.date
    };

    // Add item via addItem action
    this.props.addReservation(newReservation);

    // Close modal
    this.toggle();
  };

  render() {
    return (
      <div> 
        <h1>Your Reservations</h1>
        {this.props.isAuthenticated ? (
          <Button
            color='dark'
            style={{ marginTop: '2rem', marginBottom: '2rem' }}
            onClick={this.toggle}
          >
            Add Reservation
          </Button>
        ) : (
          <h4 className='mb-3 ml-4'>Please log in to manage items</h4>
        )}

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Book a Reservation</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='item'>Dog Name</Label>
                <Input
                  type='text'
                  name='name'
                  id='item'
                  placeholder='Dog Name'
                  onChange={this.onChange}
                />
                {/* <br />
                <Label for='service'>Select service type:
                <select value = {this.state.value} onChange={this.onChange}>
                  <input type='radio'
                  name='service'
                  id='service'
                  placeholder='Service Type'/>
  
                  
                  <option value="boarding">Boarding</option>
                  <option value="daycare">Day Care</option>
                  <option value="grooming">Grooming</option>
                  </select>
               </Label>
               <br /> */}
                <Label for='item'>Time</Label>
                <Input
                  type='time'
                  name='time'
                  id='item'
                  placeholder='Time'
                  onChange={this.onChange}
                />
                <Label for='item'>Date</Label>
                <Input
                  type='date'
                  name='date'
                  id='item'
                  placeholder='Date'
                  onChange={this.onChange}
                />
                
                
               
                <Button color='dark' style={{ marginTop: '2rem' }} block>
                  Add Reservation
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reservation: state.reservation,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { addReservation }
)(ReservationModal);
