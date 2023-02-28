import {configureStore} from '@reduxjs/toolkit';
import reducer from 'src/redux/rootReducer';

const store = configureStore({
  reducer
});

export default store;
