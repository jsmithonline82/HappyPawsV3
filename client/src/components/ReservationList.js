import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/reservationActions';
import PropTypes from 'prop-types';

class ReservationList extends Component {
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
            {items.map(({ _id, name, service, time, weight, image }) => (
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
                  <ul>
                    <li>Dog Name:  {name}</li>
                    <li>Service:  {service}</li>
                    <li>Time: {time}</li>
                    <li>Date: {weight}</li>
                  </ul>
                  
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
)(ReservationList);
