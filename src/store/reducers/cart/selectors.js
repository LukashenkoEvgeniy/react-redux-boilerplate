import { createSelector } from 'reselect';

import { currentRestaurantSlug } from '@/store/reducers/restaurants/selectors';

// Array of cart Restaurant
export const getRestaurantsCart = (state) => state.cart.restaurants;

export const getCartProducts = createSelector(currentRestaurantSlug, getRestaurantsCart, (restaurantSlug, carts) => {
  const restaurantCart = carts
    .find((cart) => cart.restaurant.slug === restaurantSlug);
  if (restaurantCart) {
    return restaurantCart.products;
  }
  return [];
});

export const cartTotal = (state) => state.cart.total;
