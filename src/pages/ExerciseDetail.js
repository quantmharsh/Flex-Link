import React ,{useEffect ,useState} from 'react'
import{Box } from '@mui/material'
import {exerciseOptions ,fetchData ,youtubeOptions} from '../utils/fetchData'
//using this because we need to take  exercise id from parameter
import { useParams } from 'react-router-dom'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises' 


const ExerciseDetail = () => {
  //taking out id from parameter
  const{id}=useParams();
  //using useState for youtube videos
  const [exerciseVideos, setExerciseVideos] = useState([])
  
  const [exerciseDetail, setExerciseDetail] = useState({})
  //state for getting  exercise  for same muscle
  const[muscleDetail  , setMuscleDetail]= useState([])
  const[equipmentDetail ,setEquipmentDetail]=useState([])
  //using useeffect for updating state whenever id is changed
  useEffect(() => {
    const fetchExerciseData= async()=>{
      const exerciseDbUrl= `https://exercisedb.p.rapidapi.com`;
      const youtubeSearchUrl= 'https://youtube-search-and-download.p.rapidapi.com';
      const exerciseDetailData= await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}` ,exerciseOptions);
      setExerciseDetail(exerciseDetailData);
      console.log("hello" ,exerciseDetailData);
      const exerciseVideosData= await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}` ,youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);
      console.log("video" ,exerciseVideosData.contents);
      //fetching similar exercises for same muscle
      const exerciseMuscleData= await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}` ,exerciseOptions);
      setMuscleDetail(exerciseMuscleData);
    
      //fetching other exercises which can be  done with similar equipment
      const exerciseEquipmentData= await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}` ,exerciseOptions);
      setEquipmentDetail(exerciseEquipmentData);



      
 
    }
  
    fetchExerciseData();
     window.scrollTo({top:2300 ,behavior:"smooth"})
    
  }, [id])
  
  
  return (
    
   <Box> 
     {/* here we will have three diffrent components */}
   
    
     <Detail exerciseDetail ={exerciseDetail} />
     <ExerciseVideos  exerciseVideos={exerciseVideos}  name={exerciseDetail.name}/>
     <SimilarExercises muscleDetail={muscleDetail} equipmentDetail={equipmentDetail}/>

   </Box>
  )
}

export default ExerciseDetail