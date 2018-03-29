const {ObjectID}=require('mongodb');

const{mongoose}=require('./../server/db/mongoose');
const{Todo}= require('./../server/models/todo');
const {User}=require('./../server/models/user');

/*var id= '5abccff8c89fbec62fe673d5';

if(!ObjectID.isvalid(id))
{
	console.log('ID not valid');
}

Todo.find({
	_id: id
}).then((todos)=>{
    console.log('Todos',todos);
});

Todo.findOne({
	_id: id
}).then((todo)=> {
	console.log('Todo',todo);
});

Todo.findById(id).then((todo)=> {
	if(!todo)
	{
		return console.log('Id not found');
	}
  console.log('Todo By Id', todo);
}).catch((e)=> {
	console.log(e);
}); */

var id='5abbd2d84f80ffd235871350';

User.findById(id).then((user)=>{
	if(!user)
	{
		console.log('Id not found');
	}
	console.log('User by ID',user);
}).catch((e)=> {
    console.log(e);
});
