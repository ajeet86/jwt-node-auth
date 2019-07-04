const mongoose = require('mongoose');
const User = require('../models/users');
const Task = require('../models/appModel');
const bcrypt = require('bcrypt');
const sql = require('../models/db.js');

const jwt = require('jsonwebtoken');

const connUri = process.env.MONGO_LOCAL_CONN_URL;

module.exports = {

	  add: (req, res) => {
		  
	 let result = {};
      let status = 201;
	  
	//  console.log(req.body);

	  
  var new_task = new Task(req.body);
//console.log(new_task.task);
  //handles null error 
   if(!new_task.task){

            res.status(400).send({ error:true, message: 'Please provide task/status' });

        }
else{
  
  Task.createTask(new_task, function(err, task) {
    
    if (err)
      res.send(err);
    res.json(task);
  });
}

		  
  },
  
  
   mysql_login: (req, res) => {
	   
	   
	    var new_task = new Task(req.body);
console.log(new_task.task.password);
const { name, password } = req.body;
	   


const sql_77 = "select * from user where name = ? " ;
      sql.query( sql_77, [new_task.task.name], (err, result, fields) => {
												let result1 = {};
      let status = 200;
			
				//console.log(result[0].password);
				
						/*Object.keys(result).forEach(function(key) {
						console.log(result[key].RowDataPacket);
						
						});*/
						
						
				 if(!err) {
					       if (!err && new_task) {
            // We could compare passwords in our model instead of below as well
            bcrypt.compare(password, result[0].password).then(match => {
																  console.log(password);
																  console.log(new_task.task.password);
																  console.log(result[0].password);
              if (match) {
                status = 200;
                // Create a token
                const payload = { user: new_task.task.name };
                const options = { expiresIn: '2d', issuer: 'https://scotch.io' };
                const secret = process.env.JWT_SECRET;
                const token = jwt.sign(payload, secret, options);

                // console.log('TOKEN', token);
                result1.token = token;
                result1.status = status;
                result1.result = new_task;
				
				console.log(result)
				
				
              } else {
                status = 401;
                result1.status = status;
                result1.error = `Authentication error password not equal`;
              }
              res.status(status).send(result1);
            }).catch(err => {
              status = 500;
              result.status = status;
              result.error = err;
              res.status(status).send(result);
            });
          }else{
							status = 404;
							result.status = status;
							result.error = err;
							res.status(status).send(result);
						   }
					 
					 
					 } else {
        status = 500;
        result.status = status;
        result.error = err;
        res.status(status).send(result);
      }
											
											
});
	
	  
   },
  
  
  
  
  
  add_mongo: (req, res) => {
    mongoose.connect(connUri, { useNewUrlParser : true }, (err) => {
      let result = {};
      let status = 201;
      if (!err) {
        const { name, password } = req.body;
        const user = new User({ name, password }); // document = instance of a model
        // TODO: We can hash the password here before we insert instead of in the model
        user.save((err, user) => {
          if (!err) {
            result.status = status;
            result.result = user;
          } else {
            status = 500;
            result.status = status;
            result.error = err;
          }
          res.status(status).send(result);
        });
      } else {
        status = 500;
        result.status = status;
        result.error = err;
        res.status(status).send(result);
      }
    });
  },
  mongo_login: (req, res) => {
    const { name, password } = req.body;
    mongoose.set('useCreateIndex', true);
    mongoose.connect(connUri, { useNewUrlParser: true }, (err) => {
      let result = {};
      let status = 200;
      if(!err) {
        User.findOne({name}, (err, user) => {
          if (!err && user) {
            // We could compare passwords in our model instead of below as well
            bcrypt.compare(password, user.password).then(match => {
              if (match) {
                status = 200;
                // Create a token
                const payload = { user: user.name };
                const options = { expiresIn: '2d', issuer: 'https://scotch.io' };
                const secret = process.env.JWT_SECRET;
                const token = jwt.sign(payload, secret, options);

                // console.log('TOKEN', token);
                result.token = token;
                result.status = status;
                result.result = user;
              } else {
                status = 401;
                result.status = status;
                result.error = `Authentication error`;
              }
              res.status(status).send(result);
            }).catch(err => {
              status = 500;
              result.status = status;
              result.error = err;
              res.status(status).send(result);
            });
          } else {
            status = 404;
            result.status = status;
            result.error = err;
            res.status(status).send(result);
          }
        });
      } else {
        status = 500;
        result.status = status;
        result.error = err;
        res.status(status).send(result);
      }
    });
  },
  
 /*     
  getAll: (req, res) => {
    mongoose.set('useCreateIndex', true);
    mongoose.connect(connUri, { useNewUrlParser: true }, (err) => {
      let result = {};
      let status = 200;
      if (!err) {
        const payload = req.decoded;
        // TODO: Log the payload here to verify that it's the same payload
        //  we used when we created the token
        // console.log('PAYLOAD', payload);
        if (payload && payload.user === 'ajeet') {
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
            res.status(status).send(result);
          });
        } else {
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
    });
  }
  */
  
   getAll: (req, res) => {
   const sql_77 = "select * from user " ;
      sql.query( sql_77, (err,sqlresult) => {
      let result = {};
      let status = 200;
	  console.log(sqlresult);
	  
      if (!err) {
        const payload = req.decoded;
        // TODO: Log the payload here to verify that it's the same payload
        //  we used when we created the token
         console.log('PAYLOAD', payload);
		 //console.log(payload.user);
        if (payload && payload.user === 'ajeet') {
			console.log('ffffff');
          /*User.find({}, (err, users) => {
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
          });*/
		 
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
    });
  }
  

}