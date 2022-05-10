import React, { useEffect } from 'react'
import UserNavBar from '../Components/userNavbar'
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
import {useState} from 'react'
function medicine() {
const axios = require("axios");
const[medicines,setMedicines]=useState(["A","B","C"])
useEffect(()=>{
    const options = {
        method: 'GET',
        url: 'https://drugapi.p.rapidapi.com/Drug/Summary/Acetaminophen-and-Codeine-Phosphate-Oral-Solution-acetaminophen-codeine-phosphate-665',
        headers: {
          'X-RapidAPI-Host': 'drugapi.p.rapidapi.com',
          'X-RapidAPI-Key': 'e172e2bdedmshbc8a3ed041197f3p120f5bjsna67f9ff2a910'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });
},[])




  return (
    <div>
        <UserNavBar/>

        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-2 lg:px-3">
          <div className="max-w-md w-full space-y-8 w-120">
         
      <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md">
  
    <div class="grid grid-cols-2 gap-2">
    <div class="flex justify-center">
  <div class="mb-3 xl:w-96">
  <select 
      // onChange={handleCountries}
      class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
        <option selected>Search Medicine</option>
        {medicines.map((dat) => {
                  return <option name="country">{dat}</option>;
                })}
    </select>
    <button
                // onClick={handleSubmit}
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
              Search 
    </button>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default medicine