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
import { addItem } from '../actions/itemActions';
import PropTypes from 'prop-types';
import DogName from './dogName';


class ItemModal extends Component {
  state = {
    modal: false,
    name: '',
    breed: '',
    weight: '',
    age: '',
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
                    [e.target.breed]: e.target.value,
                    [e.target.weight]: e.target.value,
                    [e.target.age]: e.target.value,
                    [e.target.image]: e.target.files
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      name: this.state.name,
      breed: this.state.breed,
      weight: this.state.weight,
      age: this.state.age,
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
        <h1>Your Dogs</h1>
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
          <ModalHeader toggle={this.toggle}>Add your Dog's information</ModalHeader>
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
                <Label for='item'>Dog Breed</Label>
                <Input
                  type='text'
                  name='breed'
                  id='item'
                  placeholder='Dog Breed'
                  onChange={this.onChange}
                />
                <Label for='item'>Weight</Label>
                <Input
                  type='number'
                  name='weight'
                  id='item'
                  placeholder='Weight'
                  onChange={this.onChange}
                />
                <Label for='item'>Age</Label>
                <Input
                  type='number'
                  name='age'
                  id='item'
                  placeholder='Age'
                  onChange={this.onChange}
                />
                
                {/* This seems like the best image upload option but non working as of now */}
                <Label for='item'>Image</Label>
                <Input
                  type='file'
                  name='image'
                  id='item'
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
)(ItemModal);