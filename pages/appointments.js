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
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AllDiseases from '../utils/AllDiseases'
let names=AllDiseases()

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
function appointments() {

    const [doctors,setDoctors]=useState([])
    const [count,setCount]=useState(true)
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };
    const handleDisease=()=>{

      axios.post('http://localhost:5000/findDoctors',{personName}).then((resp)=>{
                 if(resp.data.data){
                     setDoctors(resp.data.data) 
                     setCount(false)
                     console.log(resp.data.data);
                 }
            }).catch((err)=>{
                console.log(err);
     
            })
       
    }
    // useEffect(()=>{
    //     axios.get('http://localhost:5000/admin/getallDoctors').then((resp)=>{
    //          if(resp.data.data){
    //              setDoctors(resp.data.data)
    //              console.log(resp.data.data);
    //          }
    //     }).catch((err)=>{
    //         console.log(err);
 
    //     })
 
    //  },[])
  return (
    <div>
<UserNavbar/>
  <section class="mb-20 text-gray-700">
  <div class="text-center md:max-w-xl lg:max-w-3xl mx-auto">
    <h5 class="text-3xl font-bold mb-6 text-blue-800 pt-3">Select Your Symptom</h5>
    <p class="mb-6 pb-2 md:mb-12 md:pb-0">
      
    </p>
  </div>

  </section>
 {
   count?
  <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-2 lg:px-3">
  <div className="max-w-md w-full space-y-8 w-120">
  <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md">
  <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Select Symptoms</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      
      <button type="button" onClick={handleDisease} class="inline-block mt-3 px-6 py-4 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg 
    focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">Go</button>
      
    
    </div>
    </div>
    </div>
    </div>:

    <div className="container mx-auto max-w-full">
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4">
  {
    doctors.length>0? doctors.map((d)=>{

return(
  <div className='ml-1'>
  <Card sx={{ maxWidth: 280 }}>
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
  <button type="button" class="inline-block px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out">View doctor</button>
  </CardActions>
</Card>
</div>

  

)
}):<div class="text-center pt-2">
        <div class="loader"></div>
   </div>
   
 }
 </div>
 </div>


}
  
    

</div>
  )
}

export default appointments