import {createSlice} from '@reduxjs/toolkit';
import Api from 'src/api';
import {logger} from 'src/helpers';

const initialState = {
  users: []
};

// Slice
const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUsers: (state, action) => {
      state.users = action.payload;
    }
  }
});

export default slice.reducer;

// Actions
const {getUsers} = slice.actions;

export const getAllUsers = () => async (dispatch) => {
  try {
    const slug = 'users/';
    const res = await Api(slug);
    if (!res) {
      throw new Error('Could not get users data');
    }

    const users = res.data;
    dispatch(getUsers(users));
    return users;
  } catch (err) {
    logger('Error from getAllUsers():', err);
    return {};
  }
};
