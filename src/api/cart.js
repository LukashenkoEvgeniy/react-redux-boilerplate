import { get, post } from '@/utils/axios';

export function fetchCartFromApi() {
  return get('/cart/').then((response) => response.data);
}

export function addProductToCartApi(id, quantity) {
  return post('/cart/add_product/', { id, quantity }).then((response) => response.data);
}

export function removeProductFromCartApi(id, quantity) {
  return post('/cart/remove_product/', { id, quantity }).then((response) => response.data);
}

export function removeProductApi(lineId) {
  return post('/cart/cart/remove_line/', { line_id: lineId }).then((response) => response.data);
}

export function incrementProductApi(lineId, quantity) {
  return post('/cart/inc_quantity/', { line_id: lineId, quantity }).then((response) => response.data);
}

export function decrementProductApi(lineId, quantity) {
  return post('/cart/dec_quantity/', { line_id: lineId, quantity }).then((response) => response.data);
}

export function clearCartApi() {
  return post('/cart/clear/').then((response) => response.data);
}
