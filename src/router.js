import { Router } from 'director';

import urls from 'src/urls';

import Login from 'ui/apps/Login';


const routerContainer = function(callback = function() {}) {
  let route = { props: {} };

  const container = {
    login() {
      // key is for animation
      route = { component: Login, props: { key: 'login' } };
    }
  };

  const allroutes = function() {
    window.scrollTo(0, 0);

    callback(route);
  };

  Router({ // eslint-disable-line
    [urls.home]: 'login',
    [urls.login]: 'login'
  }).configure({
    on: allroutes,
    resource: container
  }).init(['/']);
};


export default routerContainer;
