import React from 'react'
import AdminNavbar from '../../Components/adminNavbar'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { styled } from '@mui/material/styles';
import axios from 'axios'
import Swal from 'sweetalert2'
import AllDiseases from '../../utils/AllDiseases'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

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


let AllD=AllDiseases()



function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }


  export default  function addSpecializations() {

    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
    const router = useRouter()
    const [spec,setSpec]=useState("")
  
    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );

      }
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

  
    const handleChangeSpec=(e)=>{
      setSpec(e.target.value)
    }
    

    const handleSubmit = () => {
       
        if(spec=="" || personName.length<0 ){
            Toast.fire({
                icon: 'error',
                title: 'Please provide valid input...!!'
            })
        }
        else{
            console.log(personName,spec);
            axios.post("http://localhost:5000/admin/addSpecialization", {personName,spec}).then((resp) => {
                if (resp.data.success) {
                    console.log(resp.data.success);
                    Toast.fire({
                        icon: 'success',
                        title: 'Specialization Added ...!!'
                    })
                    router.push("/admin/adminHome")
                    
                    
    
                }
                else {
                    Toast.fire({
                        icon: 'error',
                        title: 'Something went wrong...!!'
                    })
                }
            })
        }

        

    }
   


    return (


        <div>







        <AdminNavbar />
           
        <main className="mt-2 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-4 lg:px-4 xl:mt-20">
    <h1 className="text-center">Add Specialization</h1>
          <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-2 lg:px-3">
          <div className="max-w-md w-full space-y-8 w-120">
          <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md">

  <div class="grid grid-cols-1 gap-4">
   

  
    <div class="form-group mb-6">
      <input type="text"
       name="Specialization"
       onChange={handleChangeSpec}
       class="form-control
        block
        w-full
        px-3
        pt-2
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
        aria-describedby="emailHelp123" placeholder="Name"/>
    </div>
         </div>

         <div class="grid grid-cols-1 gap-4">
    <div class="form-group mb-6">
    <div>
      <FormControl sx={{ m: 1, width: 390 }}>
        <InputLabel id="demo-multiple-chip-label">Select diseases</InputLabel>
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
                <Chip key={value} color="primary" label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {AllD.map((name) => (
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
    </div>
    </div>
         </div>
         </div>

         <button type="submit"
  onClick={handleSubmit}
  class="
    w-full
    px-6
    py-2.5
    bg-green-500
    text-white
    font-medium
    text-xs
    leading-tight
    uppercase
    rounded
    shadow-md
    hover:bg-blue-700 hover:shadow-lg
    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
    active:bg-blue-800 active:shadow-lg
    transition
    duration-150
    ease-in-out">Add
    
    
    </button>
    

         </div>
         </div>
         </main>
         </div>


 )

}
