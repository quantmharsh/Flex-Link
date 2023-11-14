import React from 'react'
import {Box ,Stack ,Typography ,Button} from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';
const HeroBanner = () => {
  return (
    <Box sx={{
        // margin top mt  lg large screens , xs small screen
        mt:{ lg:'212px' ,xs:'70px'},
        //margin left
        ml:{sx:'50px'}

    }}
    position ="relative"  p="20px">
        <Typography color='#FF2625'
         fontWeight="600"
         fontSize="26px">
            Fitness Club
        </Typography>
        <Typography fontWeight={700}
        sx={{
             fontSize: {lg:'44px' ,xs:'40px'  }
        }}
        mb={3}
        mt={3}> Sweat ,Smile <br/> & Conquer!</Typography>
        <Typography fontSize="22px" lineHeight="35px" mb={4}> Check out the most effective , Exercises!</Typography>
    <div>HeroBanner</div>
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
    className="hero-banner-img"/>
    </Box>
  )
}

export default HeroBanner