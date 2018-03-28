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

  /*db.collection('Todos').find({_id: new ObjectID('5abb431a291e650c0b5fda36')})
  .toArray().then((docs)=> {
     
     console.log('Todos');
     console.log(JSON.stringify(docs,undefined,2));

  },(err)=> {
    console.log('Unable to fetch todos',err);
  });*/

  /*db.collection('Todos').find().count().then((count)=> {
     
     console.log(`Todos conut: ${count}`);
     

  },(err)=> {
    console.log('Unable to fetch todos',err);
  });*/

  db.collection('Users').find({name: 'Arun'}).toArray().then((docs)=> {
     
    // console.log(`Todos conut: ${count}`);
     console.log(JSON.stringify(docs,undefined,2));
     

  },(err)=> {
    console.log('Unable to fetch todos',err);
  });

	//db.close();
});