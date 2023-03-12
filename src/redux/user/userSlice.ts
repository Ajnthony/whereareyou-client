import {createSlice} from '@reduxjs/toolkit';
import {Dispatch} from 'redux';
import Api from 'api';
import {logger} from 'helpers';

const initialState = {
  user: {}
};

// Slice
const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    register: (state, action) => {
      state.user = action.payload;
    }
  }
});

export default slice.reducer;

// Actions
const {login, register} = slice.actions;

export const loginUser = () => async (dispatch: Dispatch) => {
  try {
    logger('Not implemented yet');
    // return true;
  } catch (err) {
    logger('Error from loginUser():', err);
    return {};
  }
};

export const registerUser = () => async (dispatch: Dispatch) => {
  try {
  } catch (err) {
    logger('Error from registerUser():', err);
    return {};
  }
};
