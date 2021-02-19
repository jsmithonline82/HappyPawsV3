import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class DogList extends Component {
  static propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  };

  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = id => {
    this.props.deleteItem(id);
  };

  render() {
    const { items } = this.props.item;
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className='shopping-list'>
            {items.map(({ _id, name, breed, weight, age,  image }) => (
              <CSSTransition key={_id} timeout={500} classNames='fade'>
                <ListGroupItem style={{ marginBottom:'1rem'}}>
                  {this.props.isAuthenticated ? (
                    <Button
                      className='float-left remove-btn'
                      color='danger'
                      size='sm'
                      onClick={this.onDeleteClick.bind(this, _id)}
                    >
                      &times;
                    </Button>
                  ) : null}
                  <div className='row'>
                    <div className='col'>
                      <ul>
                        <li>Dog Name:  {name}</li>
                        <li>Dog Breed: {breed}</li>
                        <li>Weight: {weight}</li>
                        <li>Age: {age}</li>                       
                      </ul>
                    </div>
                    <div className='col'>
                        <img className='mt-5' src='https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg' alt="/" style={{ maxHeight:'300px'}}></img>
                    </div>
                  </div>
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { getItems, deleteItem }
)(DogList);
