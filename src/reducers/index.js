import { combineReducers } from 'redux';
import loginActivity from './loginReducer';
import toDolist from './toDoReducer';

const allReducers = combineReducers({
  loginActivity,
  toDolist
});

const rootReducer = (state, action) => {
  if (action.type === 'LOG_OUT') {
    state = undefined;
  }

  return allReducers(state, action);
}

export default rootReducer;