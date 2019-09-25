'user strict';
var sql = require('./db.js');
console.log('module is running');

//Store object constructor
var Store = function(store){
    this.store = store;
};

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const abc='';

const saltRounds = 10;

Store.findStore=function findStore(store, result){     
    sql.query("Select * from geo_loc", function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
          console.log('store : ', res);  

         result(null, res);
        }
    });
        
};

module.exports= Store;