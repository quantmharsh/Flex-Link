import React from 'react'
import{Box ,Typography ,Stack} from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'


const SimilarExercises = ({muscleDetail ,equipmentDetail}) => {
  window.scrollTo(2000, 1000);

 
  
  return (
   <Box  sx={{ mt:{lg:'20px' , xs:'0px'}}}> 
    <Typography variant='h3' mb={5}> Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises</Typography>
    <Stack direction="row" sx={{ p:'2px' , position:'relative'}}>
    {   muscleDetail.length ? <HorizontalScrollbar  data={muscleDetail}/>:<Loader/>}
    </Stack>
    <Typography variant='h3' mb={5}>Max Impact: Shared<span style={{ color: '#FF2625', textTransform: 'capitalize' }}> Equipment</span>  Workouts.</Typography>
    <Stack direction="row" sx={{ p:'2px' , position:'relative'}}>
    {   equipmentDetail.length ? <HorizontalScrollbar  data={equipmentDetail}/>:<Loader/>}
    </Stack>
   </Box>
  )
}

export default SimilarExercises