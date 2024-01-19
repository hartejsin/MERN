import { useEffect} from 'react'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
import useWorkoutsContent from '../hooks/useWorkoutsContext'

const Home = () => {

    const {workouts,dispatch} = useWorkoutsContent()

    useEffect(()=>{
        const fetchWorkout = async () => {
            const response = await fetch('http://localhost:4000/api/workouts')
            const json = await response.json()

            if (response.ok){
                dispatch({
                    type:'SET_WORKOUTS',
                    payload: json
                })
            }
        }

        fetchWorkout()
    }, []) // empty dependency array tell us to only render one
    return ( 
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout)=>(
                    <WorkoutDetails key = {workout._id} workout={workout}/>

                ))}
            </div>
            <WorkoutForm />
            
        </div>
     );
}
 
export default Home;