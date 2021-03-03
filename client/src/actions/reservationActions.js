import axios from 'axios';
import { GET_RESERVATIONS, ADD_RESERVATION, DELETE_RESERVATION, RESERVATIONS_LOADING } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getReservations = () => (dispatch, getState) => {
  dispatch(setReservationsLoading());
  axios
    .get('/api/reservations', tokenConfig(getState))
    .then(res =>
      dispatch({
        type: GET_RESERVATIONS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addReservation = reservation => (dispatch, getState) => {
  axios
    .post('/api/reservations', reservation, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: ADD_RESERVATION,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteReservation = id => (dispatch, getState) => {
  axios
    .delete(`/api/reservations/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: DELETE_RESERVATION,
        payload: id
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setReservationsLoading = () => {
  return {
    type: RESERVATIONS_LOADING
  };
};
