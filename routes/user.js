const controller = require('../controllers/users');
const bcrypt = require('bcrypt');
const validateToken = require('../utils').validateToken;

module.exports = (router) => {
  router.route('/users')
    .post(controller.add)
    .get(validateToken, controller.getAll); // This route is now protected
    //.get(controller.getAll) // This route will be protected shortly


    router.route('/login')
    .post(controller.login);
};