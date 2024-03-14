import {combineReducers} from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import initialStepsReducer from './reducers/initialStepsReducer';

export const rootReducer = combineReducers({
  authorization: authReducer,
  initialSteps: initialStepsReducer,
});
