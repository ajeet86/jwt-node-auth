const usercontroller = require('../controllers/users');
const bcrypt = require('bcrypt');
const validateToken = require('../utils').validateToken;

module.exports = (router) => {
  router.route('/users')
    .post(usercontroller.add)
    .get(validateToken, usercontroller.getAll); // This route is now protected
    //.get(controller.getAll) // This route will be protected shortly


    router.route('/ms_login')
    .post(usercontroller.mysql_login);
     
    router.route('/dashboard')
    .post(usercontroller.getDashboard);

};