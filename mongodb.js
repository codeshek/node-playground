// CRUD 

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

// const id = new ObjectID();
// console.log(id.id.length); //why ObjectID() is stored rather than string id
// console.log(id.toHexString().length)

MongoClient.connect(connectionURL, { useNewUrlParser : true, useUnifiedTopology: true } , (error, client) => {
    if(error) {
        return console.log('Unable to connect to database');
    }

    const db = client.db(databaseName);

    //DELETE
    // db.collection('users').deleteMany({ 
    //     age: 26 
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    // db.collection('tasks').deleteOne({ 
    //     description: 'Complete the tasks'
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    //UPDATE

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount);
    // }).catch((error) => {
    //     console.log(error);
    // })

    // db.collection('users').updateOne({ 
    //     _id: new ObjectID('5e96f2f71bfb6e3eac7683d8')
    // }, {
    //     //Update fields
    //     // $set: {
    //     //     name: 'Pandas'
    //     // }
    //     //Increment field
    //     $inc: {
    //         age: 2
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    //READ

    // db.collection('users').findOne({ _id: new ObjectID('5e96f2f71bfb6e3eac7683d8') }, (error, user) => {
    //     if(error) {
    //         return console.log('Unable to fetch');
    //     }

    //     console.log(user);
    // })

    // db.collection('users').find({ age: 24 }).toArray((error, users) => {
    //     console.log(users);
    // })

    // db.collection('users').find({ age: 24 }).count((error, count) => {
    //     console.log(count);
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID('5e96f06001b58d5d58996fdd') }, (error, task) => {
    //     if(error) {
    //         return console.log('Unable to fetch');
    //     }

    //     console.log(task);
    // })

    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     console.log(tasks);
    // })

    // db.collection('tasks').find({ completed: false }).count((error, count) => {
    //     console.log(count);
    // })

    // db.collection('users').findOne({ name: 'Abhi', age:30 }, (error, user) => {
    //     if(error) {
    //         return console.log('Unable to fetch');
    //     }

    //     console.log(user);
    // })
    
    //CREATE

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Rahul',
    //     age: 24
    // }, (error,result ) => {
    //     if(error) {
    //         return console.log('Unable to insert result');
    //     }

    //     console.log(result.ops);
    // })

    // db.collection('users').insertMany([{
    //     name: 'Abhi',
    //     age: 24
    // },{
    //     name: 'Vicky',
    //     age: 25
    // }],(error, result) => {
    //     if(error) {
    //        return console.log('Unable to insert users.')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([{
    //     description: 'Complete the tasks',
    //     completed: true
    // },{
    //     description: 'Complete the course',
    //     completed: false
    // },{
    //     description: 'Renew ',
    //     completed: false
    // }],(error, result) => {
    //     if(error) {
    //        return console.log('Unable to insert users.')
    //     }

    //     console.log(result.ops)
    // })
})