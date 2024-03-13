import {createReducer} from '@reduxjs/toolkit';
import {setAuth} from '../actions/authAction';

interface ITokenState {
  isAuth: boolean;
}

const initialState: ITokenState = {
  isAuth: false,
};

const authReducer = createReducer(initialState, builder => {
  builder.addCase(setAuth, (state, action) => {
    state.isAuth = action.payload;
  });
});

export default authReducer;
