import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import reservationReducer from './reservationReducer'

export default combineReducers({
  item: itemReducer,
  error: errorReducer,
  auth: authReducer,
  reservation: reservationReducer
});
