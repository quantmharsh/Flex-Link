 const API_KEY='c4090b7480msh88dca6b03a4f473p188bdfjsn871e3a902a1f'
 export const exerciseOptions={
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': API_KEY ,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
 };
  export const fetchData=async(url ,options)=>
{
    const response=await fetch(url ,options)
    const data= await response.json();
    return data;
    
    
}
