import * as types from './types';

const initialState = {
  errors: null,
  checkoutResult: {"redirect":false,"redirect_link":"","order_id":18,"order_price":180.0,"thank_you_page":{"title":"Thank you for ordering.","text":"Your order will be ready as soon as possible."}},
};

export default function checkout(state = initialState, action) {
  switch (action.type) {
    case types.FAILURE_CHECKOUT:
      return ({
        ...state,
        errors: action.payload,
      });
    case types.DELETE_CHECKOUT_ERROR:
      return ({
        ...state,
        errors: {
          ...state.errors,
          [action.payload]: null,
        },
      });
    case types.SUCCESS_CHECKOUT:
      return ({
        ...state,
        errors: null,
        checkoutResult: action.payload,
      });
    default:
      return state;
  }
}
