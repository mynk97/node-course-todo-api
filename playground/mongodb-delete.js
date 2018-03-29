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

  //deletMany
  /*db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=> {
    console.log(result);
  });*/

  //DeleteOne
  /*db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=> {
    console.log(result);
  });*/

  //find and delete one  
  /*db.collection('Todos').findOneAndDelete({completed: false}).then((result)=> {
    console.log(result);
  });*/

  //db.collection('Users').deleteMany({name: 'Arun'});

  db.collection('Todos').findOneAndDelete({_id: new ObjectID("5abb64b0ad2bff38b6ad3638")})
  .then((result)=> {
    console.log(JSON.stringify(result,undefined,2));
  });

	//db.close();
});