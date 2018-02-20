const dateReducer = (state) => {
  if (state === undefined) {
    const date = new Date();
    return date.toISOString();
  }
  return state;
  // switch (action.type) {
  //   case FETCH_ITEMS: {
  //     return action.payload;
  //   }
  //   case UPDATE_ITEM: {
  //     return action.payload;
  //   }
  //   default:
  //     return state;
  // }
};

export default dateReducer;
