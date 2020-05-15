
import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import reducers from './reducers';

export default function configureStore(history, initialState = {}) {
  let middlewares = [
    routerMiddleware(history),
    thunk,
  ];

  let composeEnhancers = compose;

  if (process.env.NODE_ENV === 'development') {
    const logger = createLogger({
      collapsed: true,
    });

    middlewares = [
      ...middlewares,
      logger,
    ];

    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }

  return createStore(
    reducers(history),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );
}
