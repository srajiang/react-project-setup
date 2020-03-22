import * as ItemAPIUtil from './api_util';
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';

/* action creators */
const receiveItems = items => (
  {
    type: RECEIVE_ITEMS,
    items: items
  }
)

/* thunk action creators */
export const fetchItems = () => dispatch => ItemAPIUtil.fetchItems()
  .then(
    items => dispatch(receiveItems(items),
    response => console.log('error: ', response)
    )
  )