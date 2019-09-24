'user strict';
var sql = require('./db.js');
console.log('module is running');
//Task object constructor
var Task = function(task){
    this.task = task;
};


const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const abc='';


const saltRounds = 10;


Task.findUser=function findUser(newTask, result){
  var userEmail=newTask.task.email;
  //console.log(userEmail); 
  sql.query("Select email from users where email = ? ", userEmail, function (err, res) {             
    if(err) {
        console.log("error: ", err);
        result(err, null);
    }
    else{
        result(null, res);
    }
});   
  
}

Task.createTask = function createUser(newTask, result) {   
     
    console.log(newTask.task.name);	 
    var salt = bcrypt.genSaltSync(saltRounds);
    var hash = bcrypt.hashSync(newTask.task.password, salt);
    console.log(hash);
    var email=newTask.task.email;
    var phone=newTask.task.phone;

    let todo = [newTask.task.name, hash,email,phone];

    sql.query("INSERT INTO users(name,password,email,phone) VALUES(?,?,?,?)", todo, function (err, res) {

    if(err) {
    console.log("error: ", err);
    result(err, null);
    }
    else{
    console.log(res.insertId);
    result(null, res.insertId);
    }
    });           
};
Task.getTaskById = function createUser(taskId, result) {
        sql.query("Select task from tasks where id = ? ", taskId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Task.getAllTask = function getAllTask(result) {
        sql.query("Select * from tasks", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('tasks : ', res);  

                 result(null, res);
                }
            });   
};
Task.updateById = function(id, task, result){
  sql.query("UPDATE tasks SET task = ? WHERE id = ?", [task.task, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Task.remove = function(id, result){
     sql.query("DELETE FROM tasks WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Task;