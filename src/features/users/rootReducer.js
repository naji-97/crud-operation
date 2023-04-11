import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  users: userReducer,
});

export default rootReducer;
