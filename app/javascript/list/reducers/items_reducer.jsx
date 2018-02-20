import { FETCH_ITEMS, UPDATE_ITEM } from '../actions/index';

const itemsReducer = (state, action) => {
  console.log("hello", action.payload);
  if (state === undefined) {
    return {
      morning: [],
      lunch: [],
      afternoon: [],
      evening: [],
    };
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
