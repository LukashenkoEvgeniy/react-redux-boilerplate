import * as types from './types';


const initialState = {
  locale: 'uk',
  city: 'kyiv',
};

export default function routerHelper(state = initialState, action) {
  switch (action.type) {
    case '@@router/LOCATION_CHANGE':
      console.log(action.payload.location.pathname);
      return {
        ...state,
      };
    case types.LOCALE_CHANGE:
      return {
        ...state,
        locale: action.payload,
      };

    default:
      return state;
  }
}
