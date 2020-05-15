import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import routerHelper from '@/store/reducers/routerHelper/reducer';
import cities from '@/store/reducers/cities/reducer';
import cart from '@/store/reducers/cart/reducer';
import checkout from '@/store/reducers/checkout/reducer';

export default (history) => combineReducers({
  routerHelper,
  cities,
  cart,
  checkout,
  router: connectRouter(history),
});
