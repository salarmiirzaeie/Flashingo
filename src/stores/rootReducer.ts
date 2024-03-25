import {combineReducers} from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import initialStepsReducer from './reducers/initialStepsReducer';
import {apiSlice} from '../services/apiSlice';

export const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,

  authorization: authReducer,
  initialSteps: initialStepsReducer,
});
