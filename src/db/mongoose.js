const mongoose=require('mongoose');
// const validator=require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
})

// const Task=mongoose.model('Task',{
//     description:{
//         type:String,
//         required:true,
//         trim:true
//     },
//     completed:{
//         type:Boolean,
//         default:false
//     }
// })

// const task=new Task({
//     description:'  Eat Lunch',
// })

// task.save().then(()=>{
//     console.log(task);
// }).catch((error)=>{
//     console.log(error)
// })

// const User=mongoose.model('User',{
//     name:{
//         type:String,
//     },
//     age: {
//         type:Number,
//     }
// })

// const User=mongoose.model('User',{
//     name:{
//         type:String,
//         required:true,
//         trim:true,
//     },
//     email:{
//         type:String,
//         required:true,
//         trim:true,
//         // lowercase:true,
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw Error('Email is invalid')
//             }
//         }
//     },
//     password:{
//         type:String,
//         required:true,
//         minlength:7,
//         trim:true,
//         validate(value){
//             if(value.toLowerCase().includes('password')){
//                 throw new Error('Password cannot contain password')
//             }
//         }
//     },
//     age: {
//         type:Number,
//         default:0,
//         validate(value){
//             if(value<0){
//                 throw new Error('Age Must be positive Number')
//             }
//         }
//     }
// })

// const me=new User({
//     name:'Ramann Singh',
//     email:'raman@gmail.com',
//     password:'phone098!',
//     age:22,
//     // age:21
// })

// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log(error)
// })