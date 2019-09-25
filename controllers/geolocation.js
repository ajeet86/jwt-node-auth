const mongoose = require('mongoose');
const geolocation = require('../models/geoloc');
const bcrypt = require('bcrypt');
const sql = require('../models/db.js');
const jwt = require('jsonwebtoken');

const connUri = process.env.MONGO_LOCAL_CONN_URL;

module.exports = {
  
   getAll: (req, res) => {
    var user_data={};
    var new_loc = new geolocation(req.body);
    //console.log(new_loc);
    geolocation.findStore(new_loc,function(err,result){
            console.log('model call back');
            status = 200;
            user_data.status = 'all';
            user_data.error = err;
            user_data.result = result;
            res.status(status).send(user_data);

    })
                            //console.log(name);
                            /*
                        const sql_77 = "select * from users " ;
                            sql.query( sql_77, (err,sqlresult) => {
                            let result = {};
                            let status = 200;
                            //console.log(sqlresult);
                            
                            if (!err) {
                                const payload = req.decoded;
                                // TODO: Log the payload here to verify that it's the same payload
                                //  we used when we created the token
                                console.log('PAYLOAD', payload);
                                //console.log(payload.user);
                                if (payload && payload.user === name) {
                                    console.log('ffffff');
                                User.find({}, (err, users) => {
                                    if (!err) {
                                    result.status = status;
                                    result.error = err;
                                    result.result = users;
                                    } else {
                                    status = 500;
                                    result.status = status;
                                    result.error = err;
                                    }
                                    res.status(status).send('sssss');
                                });
                                
                                    res.status(status).send(sqlresult);
                                } else {
                                    console.log('ffffff123');
                                status = 401;
                                result.status = status;
                                result.error = `Authentication error`;
                                res.status(status).send(result);
                                }
                                    
                            } else {
                                status = 500;
                                result.status = status;
                                result.error = err;
                                res.status(status).send(result);
                            }
                            });*/
  }
  

}