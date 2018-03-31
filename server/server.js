/*var mongoose =require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');*/
 const _=require('lodash');
var express=require('express');
var bodyparser=require('body-parser');

const {ObjectID}=require('mongodb');
var {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todo');
var {User}=require('./models/user');

var app=express();
const port=process.env.PORT|| 3000;

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

 app.get('/todos',(req,res)=> {
   Todo.find().then((todos)=>{
     res.send({
     	todos
     });
   },(e)=> {
       res.status(400).send(e);
 });
 });

 app.get('/todos/:id',(req,res)=>{ 
    var id=req.params.id;

    if(!ObjectID.isValid(id))
    {
    	return res.status(400).send();
    }

    Todo.findById(id).then((todo)=> {
      if(!todo)
      {
      	return res.status(404).send();
      }

      res.send({todo});

    }).catch((err)=> {
    	res.status(400).send();
    
    });


 });

 app.delete('/todos/:id', (req, res) => {
   var id = req.params.id;

   if (!ObjectID.isValid(id)) {
     return res.status(404).send();
   }

   Todo.findByIdAndRemove(id).then((todo) => {
     if (!todo) {
       return res.status(404).send();
     }

     res.send({todo});
   }).catch((e) => {
     res.status(400).send();
   });
 });

app.patch('/todos/:id',(req,res)=> {
  var id=req.params.id;

  var body=_.pick(req.body,['text','completed']);

   if (!ObjectID.isValid(id)) {
     return res.status(404).send();
   }

   if(_.isBoolean(body.completed)&&  body.completed)
   {
   	body.completedAt =new Date().getTime();
   }
   else
   {
   	 body.completed=false;
   	 body.completedAt=null;
   }

   Todo.findByIdAndUpdate(id,{$set: body},{new: true}).then((todo)=> {
         if (!todo) {
       return res.status(404).send();
     }

     res.send({todo});
     
   }).catch((e)=> {
   	res.status(400).send();
   })
});

app.listen(port,()=> {
	console.log(`Server is up on port ${port}`);
});

module.exports={app};
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