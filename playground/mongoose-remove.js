const {ObjectID}=require('mongodb');

const{mongoose}=require('./../server/db/mongoose');
const{Todo}= require('./../server/models/todo');
const {User}=require('./../server/models/user');

/*Todo.remove({}).then((result)=> {
   console.log(result);
});*/

Todo.findByIdAndRemove('5abdf7bbf7aa501a08c0a250').then((todo)=> {
  console.log(todo);
});


