import React from 'react'
import {Stack ,Typography} from '@mui/material';
import Icon from '../assets/icons/gym.png';

export const BodyPart = ({item , bodyPart ,setBodyPart}) => {
  return (
    <div>
      <Stack
      type="button"
      
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      
      sx={{
       borderTop:   bodyPart===item ?'4px solid #ff2625':'',
        backgroundColor:'#fff',
        borderBottomLeftRadius:'20px',
        width:'200px',
        height:'210px',
        cursor:'pointer',
        gap:'20px',
        marginTop:'10px',
        borderRadius:'20px',
        transition: 'background-color 0.5s ease , transform 0.2s ease', // Smooth transition on background color change
        ':hover': {
          backgroundColor: '#dcb7eb',
          transform: 'scale(1.2)', // Change to your desired hover color #e8e1e6
        
       
        
      
    
       } }}
    onClick={()=>{
      setBodyPart(item)
      window.scrollTo( { top:1800 , width:100 ,behavior:'smooth'})
     }}
      >
 
     
      <img src={Icon} alt="dumbbell" style={{ width:'100px' ,height:'110px' }}
    />
      <Typography fontSize='24px' fontWeight='bold' color ='#3A1212' textTransform="capitalize">{item}</Typography>
      </Stack>
    </div>
  )
}
