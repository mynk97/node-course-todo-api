// const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');
/*var obj=new ObjectID();
console.log(obj);*/
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=> {
	if(err)
	{
		return console.log('Unable to connect to server');
	}
	console.log('connected to mongo db server');

 /* db.collection('Todos').insertOne({
     
     text: 'something to do',
     completed: false

  },(err,result)=> {
  	 if(err)
  	 {
  	 	return console.log('Unable to insert todo',err);
  	 }

  	 console.log(JSON.stringify(result.ops,undefined,2));
  });*/

   /*db.collection('Users').insertOne({
       
       name: 'Arun',
       age: 25,
       location: 'India'
   },(err,result)=> {
   	   if(err)
   	   {
   	   	return console.log('Unable to insert todo',err);
   	   }

   	   console.log(result.ops[0]._id.getTimestamp());
   });*/
	db.close();
});