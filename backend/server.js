require('dotenv').config()
const express = require('express')
const workoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
//middleware
app.use(express.json()) // sends form data in the request object


app.use((request,response,next)=>{
    console.log(request.path,request.method)
    next()
})
app.use(cors({origin:"http://localhost:3000"}))
app.use('/api/workouts',workoutRoutes)



//connect to db 
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        
        app.listen(process.env.PORT,() =>{
            console.log('connected to db/listening for requests on port ', process.env.PORT)
        })
    })
    .catch(error=>{
        console.log(error)
    })



