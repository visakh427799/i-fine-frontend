import React from 'react'
import {useEffect,useState} from 'react'
import axios from 'axios'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import UserNavbar from '../Components/userNavbar';
import Chip from '@mui/material/Chip';

function appointments() {

    const [doctors,setDoctors]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/admin/getallDoctors').then((resp)=>{
             if(resp.data.data){
                 setDoctors(resp.data.data)
                 console.log(resp.data.data);
             }
        }).catch((err)=>{
            console.log(err);
 
        })
 
     },[])
  return (
    <div>
<UserNavbar/>
        <section class="mb-20 text-gray-700">
  <div class="text-center md:max-w-xl lg:max-w-3xl mx-auto">
    <h3 class="text-3xl font-bold mb-6 text-gray-800">Book Appointments</h3>
    <p class="mb-6 pb-2 md:mb-12 md:pb-0">
      
    </p>
  </div>

  </section>
  <div className="container mx-auto max-w-full">
   <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4">
  {
      doctors.length>0? doctors.map((d)=>{

          return(
            <div className='ml-1'>
            <Card sx={{ maxWidth: 280 }}>
            <CardMedia
              component="img"
              alt="green iguana"
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
            <button type="button" class="inline-block px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out">View doctor</button>
            </CardActions>
          </Card>
          </div>
            
            
          
          )
        }):<div class="text-center pt-2">
        <div class="loader"></div>
        </div>
    }
    

    </div></div>

    </div>
  )
}

export default appointments