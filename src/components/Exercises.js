import React from 'react'
import Pagination from '@mui/material/Pagination';

import{Box ,Stack ,Typography} from '@mui/material/'
import { useEffect ,useState } from 'react'
import { exerciseOptions , fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'
import { BodyPart } from './BodyPart';




const Exercises = ( {exercises , bodyPart , setExercises}) => {
  console.log("exercises:",exercises)
  console.log(bodyPart);
 const[currentPage ,setCurrentPage] =useState(1);
  const indexOfLastExercise= 9*currentPage;
  const indexOfFirstExercise = indexOfLastExercise -9;
  const currentExercises= exercises.slice(indexOfFirstExercise ,indexOfLastExercise);
 
  //it take this value by default from paginate which is current  page no.
 const paginate=(e ,value)=>{  


     setCurrentPage(value);
     window.scrollTo({top:1600 ,behavior:"smooth"})
 }
 useEffect(() => {
    const  fetchExerciseData= async()=>{
       let exerciseData=[];
        if(bodyPart==='all')

        {
         exerciseData=  await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=1000',exerciseOptions);
        }
        else{
          exerciseData=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=1000`,exerciseOptions);
        }
        setExercises(exerciseData);
    }
    fetchExerciseData();
 

 }, [bodyPart])
 
  
  return (
    <Box  id="exercises"
    sx={{ 
      mt:{ lg:'110px'},
      mt:'50px',
      p:'20px'
    }}
    >
      <Typography variant='h4'>
        Rendering Results🔍..
      </Typography>
      <Stack direction="row" 
      sx={{
        gap:{lg:'110px' ,xs:'50px'}
      }} flexWrap="wrap" justifyContent="center">
        {currentExercises.map((exercise , index)=>(
          <ExerciseCard key={index} exercise={exercise}/>
        ))}
      </Stack>
      <Stack  mt="100px" alignItems="center" > 
      {exercises.length>9 && ( <Pagination
       variant="outlined" shape="rounded"
       defaultPage={1} count={Math.ceil(exercises.length/9)} 
        page={currentPage} 
         onChange={paginate}
         size="large">

      </Pagination>)}
     
      </Stack>

    </Box>
  )
}

export default Exercises