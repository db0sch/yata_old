import { FETCH_ITEMS, UPDATE_ITEM, UPDATE_ITEM_POSITION } from '../actions/index';

const itemsReducer = (state, action) => {
  console.log("helloooo")
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
    case UPDATE_ITEM_POSITION: {
      console.log("hello", action.payload)
      return action.payload;
    }
    default:
      return state;
  }
};

export default itemsReducer;
