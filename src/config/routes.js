import PageNotFound from '@/containers/pages/PageNotFound/index';
import Main from '@/containers/pages/Main';

/**
 * Routes config for each route
 */
export default {

  MAIN: {
    path: '/',
    exact: true,
    component: Main,
  },

  NOT_FOUND: {
    path: '/*',
    component: PageNotFound,
  },
};
