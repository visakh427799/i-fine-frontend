import React from 'react'
import UserNavbar from '../Components/userNavbar'
import axios from 'axios'
import {useEffect,useState} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
function doctorsSpecialized() {

    const [doctors,setDoctors]=useState([])

    useEffect(()=>{
       
        const queryString = window.location.search;
       
        const urlParams = new URLSearchParams(queryString);
         
        const spec = urlParams.get('category')
        console.log(spec);
        
        axios.post('http://localhost:5000/getDoctorBySpec',{spec}).then((resp)=>{
             setDoctors(resp.data.data)
             console.log(doctors);
        })

    },[])
  return (
    <div>
        <UserNavbar/>
        <div className="container mx-auto max-w-full mt-5">
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4">
  {
    doctors.length>0? doctors.map((d)=>{

return(
  <div className='ml-1'>
  <Card sx={{ maxWidth: 280 }} >
  <CardMedia
    component="img"
    alt="Image"
    height="110"
    image={d.photo}
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      {d.name}
    </Typography>
    <Typography variant="body2" color="primary">
      {d.specialization}
    </Typography>
    <Typography variant="body2" color="success">
      {d.qualification}
    </Typography>
    <Chip label="$ 500/-" color="success" />
  </CardContent>
  <CardActions>
  <button type="button" class="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">Book Appointment</button>
  <button type="button" class="inline-block px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out">Chat</button>
  </CardActions>
</Card>
</div>

  

)
}):<div class="text-center pt-2">
    No doctor
        <div class="loader"></div>
   </div>
   
 }
 </div>
 </div>




    </div>
  )
}

export default doctorsSpecialized