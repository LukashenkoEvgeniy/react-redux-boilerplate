import {fetchCartFromApi, addProductToCartApi, decrementProductApi, removeProductFromCartApi} from '@/api/cart';
import * as types from './types';

export function requestCart() {
  return {
    type: types.REQUEST_CART,
  };
}

export function receiveCart(cart) {
  return {
    type: types.RECEIVE_CART,
    payload: cart,
  };
}

export function failureCart(message) {
  return {
    type: types.FAILURE_CART,
    payload: {
      message,
    },
  };
}

export function clearCart() {
  return {
    type: types.CLEAR_CART,
  };
}

/**
 * MIDLEWARES
 */

export const addProductToCart = (id, quantity = 1) => async (dispatch, getState) => {
  requestCart();
  try {
    const cart = await addProductToCartApi(id, quantity);
    dispatch(receiveCart(cart));
  } catch (e) {
    failureCart(e.message);
  }
};

export const removeProductFromCart = (id, quantity = 1) => async (dispatch) => {
  requestCart();
  try {
    const cart = await removeProductFromCartApi(id, quantity);
    dispatch(receiveCart(cart));
  } catch (e) {
    failureCart(e.message);
  }
};

export const fetchCart = () => async (dispatch) => {
  requestCart();
  try {
    const cart = await fetchCartFromApi();
    dispatch(receiveCart(cart));
  } catch (e) {
    failureCart(e.message);
  }
};
