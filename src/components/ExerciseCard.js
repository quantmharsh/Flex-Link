import React from 'react'
import { Button, Link ,Stack, Typography } from '@mui/material'
const ExerciseCard = ({exercise}) => {
  return (
    <div>
        
        <Link className='exercise-card' underline='none' to={`/exercise/ ${exercise.id}`} >
        <img src={exercise.gifUrl}  alt={exercise.name} loading='lazy' style={ {borderRadius:'20px'}} />
        <Stack direction="row" >
            <Button sx={{ ml:'21px' ,color:"#fff" ,background:'#fcc757' ,fontSize:'14px',
          borderRadius:'20px' ,textTransform:"capitalize"  }}>
    {exercise.bodyPart}
            </Button>
            <Button sx={{ ml:'21px' ,color:"#fff" ,background:'#ffa9a9' ,fontSize:'14px',
          borderRadius:'20px' ,textTransform:"capitalize" ,underline:"none"   }}>
    {exercise.target}
            </Button>
     
        </Stack> 
        
        <Typography ml='21px' color="#000" textTransform="capitalize" fontWeight="bold"
       mt="11px" pb="10px" >{exercise.name}</Typography>
       
        
            </Link>
           
    </div>
  )
}

export default ExerciseCard