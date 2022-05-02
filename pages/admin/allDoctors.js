import React from 'react'
import AdminNavbar from '../../Components/adminNavbar'
import {useEffect,useState} from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import CircularProgress from '@mui/material/CircularProgress';
import Swal from 'sweetalert2'

function allDoctors() {

  const [deleted,setDeleted]=useState(false)
  const [loading,setLoading]=useState(false)
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }}) 
    const [doctors,setDoctors]=useState([])
    const [view,setView]=useState(false)
    const router = useRouter()
    
    useEffect(()=>{
       axios.get('http://localhost:5000/admin/getallDoctors').then((resp)=>{
            if(resp.data.data){
                setDoctors(resp.data.data)
                console.log(resp.data.data);
            }
       }).catch((err)=>{
           console.log(err);

       })

    },[view,deleted])


    const handleClick = (u_id) => {
        
        
        router.push(`/admin/userProfileView/?u_id=${u_id}`)
      }
     const  handleDelete   = (doctor_id)=>{
      // setDeleted(false)
      setLoading(true)
      axios.post("http://localhost:5000/admin/deleteDoctor",{doctor_id}).then((resp)=>{
        if(resp.data.success){
          console.log(resp.data.success);
          Toast.fire({
            icon: 'success',
            title: 'Doctor deleted ...!!'
          })
          setDeleted(true)
          setLoading(false)
         
        }
        else{
          Toast.fire({
            icon: 'error',
            title: 'Something went wrong...!!'
          })
          setLoading(false)
        }
      })
     }



      return (
    <div>
        <AdminNavbar/>
        <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-center">
          <thead class="border-b bg-gray-800">
            <tr>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                Name
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                Email
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                Phone
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                Specialization
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4">
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                
              </th>
            </tr>
          </thead>
          <tbody>
              {
                  doctors.map((d)=>{
                      return(
                        <tr class="bg-white border-b">
              
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {d.name}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {d.email}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {d.phone}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {d.specialization}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button type="button" class="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">View</button>
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button type="button" class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">Edit</button>

                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {/* {
                          loading?<CircularProgress color="secondary" />:
                        <button type="button" class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" onClick={()=>{handleDelete(d._id)}}>Delete</button>
                          
                        } */}
                        <button type="button" class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" onClick={()=>{handleDelete(d._id)}}>Delete</button>
                        

                        </td>
                        
                      </tr>
                     
                      )
                  })
              }
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

    </div>    
  )
}

export default allDoctors