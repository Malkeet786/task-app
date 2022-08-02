const express =require('express');
require('./db/mongoose');
const User=require('./models/user');
const Task=require('./models/task');
const useRouter=require('./routers/users')
const taskRouter=require('./routers/task')
const app=express()



const port=process.env.PORT || 3000

// app.use((req,res,next)=>{
//     // console.log(req.method,req.path)
//     // next()
//     if(req.method==='GET'){
//         res.send('Get method are diabled')
//     }else{
//         next()
//     }
// })

// app.use((req,res,next)=>{
//     res.status(503).send('Site is Currently down')
// })


// const multer=require('multer')
// const upload=multer({
//     dest:'images'
// })



// app.post('/upload',upload.single('upload'),(req,res)=>{
//     res.send()
// },(error,req,res,next)=>{
//     res.status(400).send({error:error.message})
// })


app.use(express.json())
app.use(useRouter)
app.use(taskRouter)
// const router=new express.Router()
// router.get('/test',(req,res)=>{
//     res.send('This is other Router')
// })
// app.use(router)

// const bcrypt=require('bcryptjs')

// const myFunction=async()=>{
//     const password='Red12345!'
//     const hashPassword=await bcrypt.hash(password,8)

//     console.log(password)
//     console.log(hashPassword)

//     const isMatch=await bcrypt.compare('Red12345!',hashPassword)
//     console.log(isMatch)
// }

// const jwt=require('jsonwebtoken')

// const myFunction=async ()=>{
//     const token=jwt.sign({_id:'abc123'},'thisismynewcourse', {expiresIn:'7 days'})
//     console.log(token)
// }
// myFunction()

app.listen(port,()=>{
    console.log("Server is runing on Port " + port);
})

// const pet={
//     name:'Hal'
// }
// pet.toJSON=function(){
//     return {}
// }
// console.log(JSON.stringify(pet))

// const Task=require('./models/task')
// const main=async()=>{
//     // const task=await Task.findById('62e2361a18bf3f4654ff1705')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)
//     const user=await User.findById('62e231f2b5d55107ec05c651')
//     await user.populate('tasks')
//     console.log(user.tasks)
// }
// main()