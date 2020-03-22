import { combineReducers } from 'redux';
import ItemsReducer from './items/reducer';

const RootReducer = combineReducers({
  items: ItemsReducer
});

export default RootReducer;