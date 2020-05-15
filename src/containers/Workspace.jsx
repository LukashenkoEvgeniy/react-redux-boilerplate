import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import routes from '@/config/routes';
import { ConnectedRouter } from 'connected-react-router';
import Header from '@/components/Header';
import { connect } from 'react-redux';
import { fetchCart } from '@/store/reducers/cart/actions';


const Workspace = ({ history }) => {
  const getRoutes = () => Object.entries(routes).map(([routeName, routeConfig]) => (
    <Route
      key={routeName}
      path={routeConfig.path}
      exact={routeConfig.exact}
      component={routeConfig.component}
    />
  ));

  return (
    <ConnectedRouter history={history}>
      <div className="workspace__page">
        <div className="workspace__header">
          <Header />
        </div>
        <div className="workspace__content">
          <Switch>
            {getRoutes()}
          </Switch>
        </div>
      </div>
    </ConnectedRouter>
  );
};


export default connect(null, null)(Workspace);
