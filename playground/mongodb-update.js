// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) =>{
  if(err){
    return console.log('Unable to connect to mongodb server');
  }

  console.log('Connected to MongoDB server.');
  const db=client.db('TodoApp');
  //
  // db.collection('Todos')
  //   .findOneAndUpdate(
  //     {
  //       _id: new ObjectID('5b1d434e462934fcfce77bdd')
  //     }, {
  //       $set: {
  //         completed: true
  //       }
  //     },
  //     {
  //       returnOriginal: false
  //     }
  //   )
  //   .then((result)=>{
  //     console.log(result);
  //   });

    db.collection('Users')
      .findOneAndUpdate(
        {
          _id: new ObjectID('5b1d399221f3c51b249597f0')
        }, {
          $set: {
            name: 'Lars Awesome'
          },
            $inc: {age: 3}
        },
        {
          returnOriginal: false
        }
      )
      .then((result)=>{
        console.log(result);
      });

});
