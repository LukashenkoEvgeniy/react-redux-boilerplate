import * as types from './types';

const initialState = {
  restaurants: [],
  total: 0,
};

export default function cart(state = initialState, action) {
  switch (action.type) {
    case types.REQUEST_CART:
      return {
        ...state,
        error: null,
        loading: true,
      };

    case types.RECEIVE_CART:
      return {
        ...state,
        ...action.payload,
        loading: false,
      };

    case types.FAILURE_CART:
      return {
        ...state,
        error: action.payload,
      };
    case types.CLEAR_CART:
      return {
        ...state,
        ...initialState,
      };

    default:
      return state;
  }
}
