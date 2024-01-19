import { useState } from "react";
import useWorkoutsContent from '../hooks/useWorkoutsContext'

const WorkoutForm = () => {
    const {dispatch} = useWorkoutsContent()
    const [title,setTitle] = useState('')
    const [load,setLoad] = useState('')
    const [reps,setReps] = useState('')
    const [error,setError] = useState('')
const handleSubmit = async (e) =>{
    e.preventDefault()
    const workout = {title,load,reps}

    const response = await fetch('http://localhost:4000/api/workouts',{
        method: 'POST',
        body: JSON.stringify(workout),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    const json = await response.json()

    if(!response.ok){
        setError(json.error)
    }
    if(response.ok){
        setError(null)
        setTitle('')
        setLoad('')
        setReps('')
        console.log('new workout added',json)
        dispatch({type:'CREATE_WORKOUT', payload:json})
    }
    
}
    return ( 
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new workout</h3>
            <label>Exercise Title:</label>
            <input type="text" onChange={(e)=> setTitle(e.target.value)} value = {title}/>

            <label>Load in KG:</label>
            <input type="number" onChange={(e)=> setLoad(e.target.value)} value = {load}/>

            <label>Reps:</label>
            <input type="number" onChange={(e)=> setReps(e.target.value)} value = {reps}/>
            <button>Add workout</button>

        </form>
    );
}
 
export default WorkoutForm;