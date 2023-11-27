import React from 'react'
import {Box ,Stack ,Typography ,Button} from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';
import { Height } from '@mui/icons-material';
const HeroBanner = () => {
  return (
    <Box sx={{
        // margin top mt  lg large screens , xs small screen
        mt:{ lg:'212px' ,xs:'70px'},
        //margin left
        ml:{xs:'50px'} ,
        

    }}
    position ="relative"  p="20px">
        <Typography color='#FF2625'
         fontWeight="600"
         fontSize="46px"
        
        >
            Flex-link🤸‍♂️
        </Typography>
        <Typography fontWeight={700}
        sx={{
             fontSize: {lg:'44px' ,xs:'40px'  }
        }}
        mb={3}
        mt={3}> Sweat ,Smile <br/> & Conquer ! 🚀 <br/>Embrace the journey,<br/> celebrate every victory.</Typography>
        <Typography fontSize="22px" lineHeight="35px" mb={4}>Empower your body, elevate your spirit!</Typography>
   
    <Button variant="contained" color="error" href='#exercises'
    sx={{
        backgroundColor:"#ff2625",
        padding:"10px"
    }}> Lets Explore!</Button>
    <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{
            opacity:0.1,
            display:{lg:'block' ,xs:'none'}
        }}
        fontSize="200px"
         > Exercises</Typography>
    <img src={HeroBannerImage} alt="banner"  
    className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner