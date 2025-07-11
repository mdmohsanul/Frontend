const initialState = {
  cart: [],
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action?.type) {
    case "UPDATE_LOADER": {
      return { ...state, isLoading: action.value };
    }
    case "UPDATE_DATA": {
      return { ...state, products: action.value };
    }
    case "UPDATE_ERROR": {
      return { ...state, isError: action.value };
    }
    case "UPDATE_CART": {
      return { ...state, cart: [...state.cart, action.value] };
    }
    default:
      return state;
  }
};
export default productReducer;
