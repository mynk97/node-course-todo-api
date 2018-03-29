/*var mongoose =require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');*/
var express=require('express');
var bodyparser=require('body-parser');


var {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todo');
var {User}=require('./models/user');

var app=express();

 app.use(bodyparser.json());

app.post('/todos',(req,res)=> {
   var todo= new Todo({
   	text: req.body.text
   });

   todo.save().then((doc)=> {
   	res.send(doc);
   },(e)=> {
   	res.status(400).send(e);
   })
});


app.listen(3000,()=> {
	console.log('Server is up on port 3000');
});

/*var Todo =mongoose.model('Todo',{
	text: {
         type:String,
         required: true,
         minlength: 1,
         trim: true
	},
	completed: {
       type: Boolean,
       default: true
	},
	completedAt: {
       type: Number,
       default: null
	}
});*/

/*var newTodo=new Todo({
	text: 'Cook Dinner'
});*/
/*
newTodo.save().then((doc)=>{
   console.log('Saved todo',doc);
},(e)=>{
	console.log('Unable to save todo');
});*/

/*var otherTodo=new Todo({
  text: 'Something to do'
 });

otherTodo.save().then((doc)=> {
  console.log(JSON.stringify(doc,undefined,2));
},(e)=>{
	console.log('Unable to save',e);
});*/

/*var User=mongoose.model('User',{
  email: {
  	 type: String,
  	 required: true,
  	 minlength: 1,
  	 trim: true
  }
});*/

/*var user=new User({
  email: 'mayanktanwar97@gmail.com'
});

user.save().then((doc)=> {
  console.log('User saved',doc);
},(e)=>{
	console.log('Unable to save',e);
});*/