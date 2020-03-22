import { combineReducers } from 'redux';
import todos from './items/reducer';

const RootReducer = combineReducers({
  todos: todos
});

export default RootReducer;