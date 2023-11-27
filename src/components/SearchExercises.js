import React ,{useState ,useEffect} from 'react'
import {Box ,Button ,Stack ,TextField ,Typography} from '@mui/material';
import {fetchData, exerciseOptions } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';



const SearchExercises = ( {setBodyPart , bodyPart ,setExercises}) => {
  const [search ,setSearch] =useState('')
  
  const[bodyParts ,setBodyParts]=useState([]);



  //for adding list of all  body parts we are using this fetchExerciseData function
  useEffect(() => {
    const fetchExerciseData =async()=>{
      const bodyPartsData= await fetchData( 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList' ,exerciseOptions)
      setBodyParts( ['all',...bodyPartsData]);
      console.log("list of all bodyparts");
      console.log(bodyPartsData);


    }
    //since we will show the data at time page is loaded first time so we are calling this function here
    
    fetchExerciseData();
    
  
   
  }, [])
  
  const handleSearch=async()=>{
       if(search)
       {
        //from utils folder
        const exerciseData= await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=300',exerciseOptions);
        const searchExercised=exerciseData.filter(
          (exercise)=> exercise.name.toLowerCase().includes(search)
          ||exercise.target.toLowerCase().includes(search)
          || exercise.equipment.toLowerCase().includes(search)
          ||exercise.bodyPart.toLowerCase().includes(search)
        );
        setSearch(' ');
        setExercises(searchExercised);
        window.scrollTo({top:2300 ,behavior:"smooth"})
        

        // console.log(exerciseData);
       }
  }
  
  return (

    

    <Stack alignItems="center" mt='35px'
    justifyContent="center"  p="21px"
    >
        <Typography fontWeight={700}
        sx={{ fontSize:{lg:'45px' ,xs:'30px'}}}
        mb="50px" textAlign="center">
           Start Strong:<br/> Awesome Beginner Exercise🔥
            </Typography>
            <Box position="relative" mb={72} >
           <TextField height="75px"
           sx={{
            input:{
                fontWeight:'700',
                botder:'none',
                borderRadius:'4px'
            },
            width:{lg:'1000px' ,xs:'350px'},
            background:"#fff",
            borderRadius:'40px'
           }}
           value={search}
           onChange={(e)=>{ setSearch(e.target.value.toLowerCase())}}
           placeholder="Search Exercises..."
           type="text">  </TextField>
           <Button className='search-btn'
           sx={{
             bgcolor:'#FF2625',
             color:'#fff',
             textTransform:'none',
             width:{
                lg:'175px' ,xs:'80px' },
            
             fontSize:{lg:'20px' ,xs:'14px'},
             height:'56px',
             position:"absolute",
             right:'0'
           }} 
           onClick={handleSearch}>Search</Button>
            </Box>
            <Box sx={{width:'100%' ,position:'relative' ,p:'20px'}}>
              {/* //it is the component to which we are passing our data */}
               <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyPart/>

            </Box>
            
            </Stack>
  )
}
 
export default SearchExercises