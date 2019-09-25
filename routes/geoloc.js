const geocontroller = require('../controllers/geolocation');
const bcrypt = require('bcrypt');
const validateToken = require('../utils').validateToken;
console.log('geolocation router');
module.exports = (router) => {
  router.route('/geoloc')
  .post(geocontroller.getAll)
    //.get(validateToken, usercontroller.getAll); // This route is now protected
    // This route will be protected shortly

};