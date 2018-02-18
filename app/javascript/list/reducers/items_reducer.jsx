import { FETCH_ITEMS, UPDATE_ITEM } from '../actions/index';

const itemsReducer = (state, action) => {
  if (state === undefined) {
    return [];
  }
  switch (action.type) {
    case FETCH_ITEMS: {
      return action.payload;
    }
    case UPDATE_ITEM: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default itemsReducer;
