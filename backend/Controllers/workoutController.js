const Workout = require('../models/workoutModel') 
const mongoose= require('mongoose')

//get all workouts

const getWorkout = async (req,res) =>{
    const workouts = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)
}

//get a single workout
const getSingleWorkout = async (req,res) =>{
   const id = req.params.id;

   if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({err:'no such workout'})
   }
   const workouts = await Workout.findById(id)

   if (!workouts){
    return res.staus(400).json({err:'No such workout'})
   }
   res.status(200).json(workouts)
}

//create a new workout
const createWorkout = async (req, res) =>{
    const {title, load, reps} = req.body;
    try {
        const workout = await Workout.create({title,load,reps})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({err: error.mesage})
    }
}
//delete a workout

const deleteWorkout = async (req,res) =>{
    const id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({err:'no such workout'})
       }
    
    const workout = await Workout.findOneAndDelete({_id:id})
    if (!workout){
        return res.status(400).json({err:'No such workout'})
       }
       res.status(200).json(workout)

    
}

//update a workout

const updateWorkout = async (req,res) =>{
    const id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({err:'no such workout'})
       }
    const workout = await Workout.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if (!workout){
        return res.staus(400).json({err:'No such workout'})
       }
       res.status(200).json(workout)
}

module.exports = {
    getWorkout,
    createWorkout,
    getSingleWorkout,
    deleteWorkout,
    updateWorkout
}