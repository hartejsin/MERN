const express = require('express')
const Workout = require('../models/workoutModel')
const router = express.Router()
const {createWorkout, getWorkout, getSingleWorkout, updateWorkout, deleteWorkout} = require('../Controllers/workoutController')

//GET all workouts
router.get('/',getWorkout)

//GET a single workout
router.get('/:id',getSingleWorkout)
//POST a single workout
router.post('/', createWorkout)
//DELETE a workout
router.delete('/:id',deleteWorkout)
//UPDATE a workout
router.patch('/:id',updateWorkout)


module.exports = router;