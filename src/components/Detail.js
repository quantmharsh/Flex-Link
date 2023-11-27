import React from 'react'
import { Typography ,Box ,Stack, Button } from '@mui/material'
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({exerciseDetail}) => {
   
    
    //destructuring this things from exercise detail;
    const {bodyPart , gifUrl ,equipment , target , name} =exerciseDetail;
   const extraDetail=[
    {
        icon:BodyPartImage,
        name:bodyPart
    },
    {
        icon:TargetImage,
        name:target
    },
    {
        icon:EquipmentImage,
        name:equipment
    }
   ]
  return (

   <Stack  gap="60px" sx={{ flexDirection:{lg:'row'} ,p:'20px' ,alignItems:"center"}}>
    <img src={gifUrl} alt={name}  loading='lazy' className='deatail-image'/>
    <Stack sx={{ gap:{lg:'35px' ,xs:'20px'}}}> 
    <Typography variant='h3'>
    {name}
    </Typography>
    <Typography variant='h5'>
    Welcome to {name} Exercise, focusing on {target} muscles. All you need is {equipment} for a powerful and effective workout."
 </Typography>
   {extraDetail.map((item)=>(
    <Stack key= {item.name} direction="row" gap="24px" alignItems="center"> 
     <Button sx={{ background :'#fff2db' , borderRadius:'50%', width:'100px' , height:'100px'}}>
        <img src={item.icon} alt="bodypart" style={{width:'50px' ,height:'50px'}}/>
     </Button>
     <Typography variant='h4' textTransform="capitalize">
        {item.name}
     </Typography>

    </Stack>
   ))}
    </Stack>

   </Stack>
  )
}

export default Detail