// CRUD create read update delete

// const mongodb=require('mongodb')
// const MongoClient=mongodb.MongoClient

const {MongoClient,ObjectId}=require('mongodb')

const connectionURL='mongodb://127.0.0.1:27017'
const databaseName= 'task-maanger'

const id=new ObjectId();
// console.log(id)
// console.log(id.getTimestamp())
// console.log(id.id.length)
// console.log(id.toHexString.length)

MongoClient.connect(connectionURL,{ useNewUrlParser:true },(error,client)=>{
    if(error){
        return console.log('Unable to connect to database')
    }
    // console.log('Connected Correctly!!')
    const db=client.db(databaseName)

    const updatePromise= db.collection('users').updateOne({
        _id:new ObjectId("62d7dd2d025ef9053c064738")
    },{
        $set:{
            name:'Mike'
        },$inc:{
            age:1,
        }
    })

    updatePromise.then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })



    db.collection('users').deleteMany({
        age:'21'
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })










    // db.collection('users').findOne({ _id:new ObjectId('62d9245af16a000bfc195813')} , (error,user) => {
    //     if(error){
    //         return console.log('Unable to fetch');
    //     }else{
    //         console.log(user)
    //     }
    // })

    // db.collection('users').find({ age:21 }).toArray((error,users)=>{
    //     console.log(users)
    // })

    // db.collection('users').find({ age:21 }).count((error,users)=>{
    //     console.log(users)
    // })

    // db.collection('tasks').findOne({ _id:new ObjectId('62d926728eff712404095389')} , (error,user) => {
    //     if(error){
    //         return console.log('Unable to fetch');
    //     }else{
    //         console.log(user)
    //     }
    // })

    // db.collection('users').insertOne({
    //     _id:id,
    //     name:'Malkeet',
    //     age:21
    // },(error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert User')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name:'Malkeet',
    //         age:21,
    //     },
    //     {
    //         name:'Vabhav',
    //         age:20
    //     }
    // ],(error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert User')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         descrption:'Do you like pizza',
    //         completed:true,
    //     },{
    //         descrption:'Do you like Car Ride',
    //         completed:true,
    //     },{
    //         descrption:'Do you like Waganor',
    //         completed:false,
    //     }
    // ],(error,result)=>{
    //     if(error){
    //         return console.log('Unable to Check')
    //     }
    //     console.log(result.ops)
    // })
})
