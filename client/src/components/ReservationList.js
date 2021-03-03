import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getReservations, deleteReservation } from '../actions/reservationActions';
import PropTypes from 'prop-types';

class ReservationList extends Component {
  static propTypes = {
    getReservation: PropTypes.func.isRequired,
    reservation: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  };

  componentDidMount() {
    this.props.getReservations();
  }

  onDeleteClick = id => {
    this.props.deleteReservation(id);
  };

  render() {
    const { reservations } = this.props.reservation;
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className='shopping-list'>
            {reservations.map(({ _id, name, time, date  }) => (
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

                    <li>Time: {time}</li>
                    <li>Date: {date}</li>
                  </ul>
                  {/* <input type="radio" id="service" name="service" value="service">
                    <label for ="service">Service Type: </label>
                    </input> */}
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
  reservation: state.reservation,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { getReservations, deleteReservation }
)(ReservationList);
