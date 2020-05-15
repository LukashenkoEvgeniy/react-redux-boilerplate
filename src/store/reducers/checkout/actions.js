import { checkoutApi } from '@/api/checkout';
import { clearCart } from '@/store/reducers/cart/actions';
import { goTo, replace } from '@/store/reducers/routerHelper/actions';
import * as types from './types';


export function requestCheckout() {
  return {
    type: types.REQUEST_CHECKOUT,
  };
}
export function successCheckout(data) {
  return {
    type: types.SUCCESS_CHECKOUT,
    payload: data,
  };
}

export function failureCheckout(errors) {
  return {
    type: types.FAILURE_CHECKOUT,
    payload: errors,
  };
}

export function deleteCheckoutError(field) {
  return {
    type: types.DELETE_CHECKOUT_ERROR,
    payload: field,
  };
}

export const checkout = (phone, payLater = false) => async (dispatch) => {
  const formattedPhone = phone.replace(/ /g, '');
  requestCheckout();
  try {
    const checkoutData = await checkoutApi(formattedPhone, payLater);
    dispatch(successCheckout(checkoutData));
    dispatch(clearCart());
    if (checkoutData.redirect) {
      // HACK NAVIGATE TO PORTMONE PAYMENT
      window.location = checkoutData.redirect_link;
    } else {
      dispatch(goTo('thank-you-page'));
    }
  } catch (e) {
    console.error(e);
    if (e.response?.data?.code) {
      dispatch(failureCheckout(e.response.data));
    }
  }
};
