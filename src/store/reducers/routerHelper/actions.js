import { push as routerPush, goBack as routerGoBack, replace as routerReplace } from 'connected-react-router';
import * as types from './types';

export function localeChange(locale) {
  return {
    type: types.LOCALE_CHANGE,
    payload: locale,
  };
}

export const goTo = (to) => (dispatch, getState) => {
  // const city = getCurrentCity(getState());
  // const locale = getCurrentLocale(getState());
  dispatch(routerPush(`/${to}`));
};

export const goBack = () => (dispatch) => {
  dispatch(routerGoBack());
};

export const replace = (url) => (dispatch) => {
  dispatch(routerReplace(url));
};
