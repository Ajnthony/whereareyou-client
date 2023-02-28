import {combineReducers} from 'redux';
import user from './user/userSlice';

const rootReducer = combineReducers({
  user
});

export default rootReducer;
