import { RECEIVE_TODOS } from './actions';

const TodoReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_TODOS:
      return Object.assign({}, state, action.todos);
    default:
      return state;
  }

}

export default TodoReducer;