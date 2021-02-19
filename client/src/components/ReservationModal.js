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
import Select from 'react-select'
import SelectPage from '../components/ReservationService'
import { connect } from 'react-redux';
import { addItem } from '../actions/reservationActions';
import PropTypes from 'prop-types';


//FOR RESERVATION SERVICE DROPDOWN

// const options = [
//   { value: 'boarding', label: 'Boarding' },
//   { value: 'grooming', label: 'Grooming' },
//   { value: 'play date', label: 'Play Date' }
// ];

class ReservationModal extends Component {
  state = {
    modal: false,
    name: '',
    service: '',
    time: '',
    weight: '',
    image: ''
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
                    [e.target.service]: e.target.value,
                    [e.target.time]: e.target.value,
                    [e.target.weight]: e.target.value,
                    [e.target.image]: e.target.files,
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      name: this.state.name,
      service: this.state.service,
      time: this.state.time,
      weight: this.state.weight,
      image: this.state.image
    };

    // Add item via addItem action
    this.props.addItem(newItem);

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
            Add Dog
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
                <Label for='item'>Service</Label>
                {/* <select className="browser-default custom-select" for='item' onChange={this.onChange}>
                  <option>Choose your option</option>
                  <option type='text' id='item' value="1" name='service' onChange={this.onChange}>Option 1</option>
                </select> */}
                
                <Input
                  type='text'
                  name='service'
                  id='item'
                  placeholder='Sevice'
                  onChange={this.onChange}
                />
                

                {/* DROPDOWN FOR SERVICES */}
                {/* <Label for='item'>Service</Label>
                <Select options={options} name='service' onChange={this.onChange}/> */}

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
                  name='weight'
                  id='item'
                  placeholder='Date'
                  onChange={this.onChange}
                />
                <Button color='dark' style={{ marginTop: '2rem' }} block>
                  Add Item
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
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { addItem }
)(ReservationModal);
