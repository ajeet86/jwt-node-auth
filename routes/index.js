const users = require('./user');
const geoloc=require('./geoloc');

module.exports = (router) => {
  users(router);
  geoloc(router);
  return router;
};