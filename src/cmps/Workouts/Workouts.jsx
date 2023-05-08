import exercises from "../../consts/exercises";
import Exercise from "../Exercise/Exercise";

const  Workouts = () => {
    return ( 
        <>
            {exercises.map((exercise)=>{
                return(
                    <Exercise name={exercise.name} img={exercise.tutorial}/>
                )
            })

            }
        </>
    );
}
 
export default  Workouts;