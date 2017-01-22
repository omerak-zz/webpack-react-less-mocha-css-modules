export default {
  home: '/',
  login: '/login',
  auth: 'http://178.62.67.44:9999/brickly/account/user/token_auth'
};


// it's for url generating with parameters
String.prototype.url = function() {
  const params = this.match(/:([^\/]+)/ig);
  let str = this;

  if (params) {
    params.forEach((param, i) => {
      str = str.replace(param, arguments[i]);
    });
  }

  return '/#' + str;
};
