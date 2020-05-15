import { fetchCitiesFromApi } from '@/api/cities';
import * as types from './types';

export function requestCities() {
  return {
    type: types.REQUEST_CITIES,
  };
}

export function receiveCities(category) {
  return {
    type: types.RECEIVE_CITIES,
    payload: category,
  };
}

export function failureCities(message) {
  return {
    type: types.FAILURE_CITIES,
    payload: {
      message,
    },
  };
}

/**
 * MIDLEWARES
 */
export const fetchCities = () => async (dispatch) => {
  requestCities();
  try {
    const category = await fetchCitiesFromApi();
    dispatch(receiveCities(category));
  } catch (e) {
    failureCities(e.message);
  }
};
