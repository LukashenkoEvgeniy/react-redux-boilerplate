import React from 'react';
import { createBrowserHistory, createHashHistory } from 'history';
import { hot } from 'react-hot-loader/root';
import '@/scss/main.scss';
import { Provider } from 'react-redux';

import Workspace from '@/containers/Workspace';
import configureStore from '@/store';

const createHistory = process.env.NODE_ENV === 'development' ? createHashHistory : createBrowserHistory;

const history = (module.hot && module.hot.data && module.hot.data.history)
  ? module.hot.data.history
  : createHistory();

const store = configureStore(history);

const Root = () => (
  <Provider store={store}>
    <div className="window">
      <div className="window__content">
        <Workspace history={history} />
      </div>
    </div>
  </Provider>
);

if (module.hot) {
  module.hot.dispose((data) => {
    // eslint-disable-next-line no-param-reassign
    data.store = store;
    // eslint-disable-next-line no-param-reassign
    data.history = history;
  });
}

export default process.env.NODE_ENV === 'development' ? hot(Root) : Root;
