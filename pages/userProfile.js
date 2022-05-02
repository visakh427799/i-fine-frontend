import React from 'react'
import UserNavbar from '../Components/userNavbar'
import axios from 'axios'
import { useEffect,useState } from 'react'
import {useRouter} from 'next/router'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function userProfile() {
  const [user, setUser] = useState()
  const router =useRouter();
  
  useEffect(() => {
   
    
      
      let u_id=localStorage.getItem("user_id");

      if(u_id){

        axios.post('http://localhost:5000/admin/getUserDetails',{u_id}).then((resp) => {
          if (resp.data.success) {
            setUser(resp.data.data)
            console.log(resp.data.data);
          }
  
        }).catch((err) => {
  
        })
      }
      else{
         router.push('/signin')
      }
  
  

  },[])

  return (
    <div>
        <UserNavbar/>
        {
          user?
          <div>
          <div class="text-center pt-2">
          <img
            // src={`http://localhost:5000/user_images/${user.dat2.photo}`}
            src={user.dat2.photo}
            class="rounded-lg w-32 mb-4 mx-auto"
            alt="Avatar"
          />
         
          <h5 class="text-xl font-medium leading-tight mb-2">{user.dat1.name}</h5>
          {/* <p class="text-gray-500"> <Stack direction="row" spacing={2}>
           <Avatar
        alt="Remy Sharp"
        src={user.dat2.photo}
        sx={{ width: 56, height: 56 }}
      /></Stack></p> */}
          <div class="flex space-x-2 justify-center">
    <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">Health</span>
    <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-purple-600 text-white rounded">Medicine</span>
    <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-500 text-white rounded">Cosultations</span>
    {/* <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-600 text-white rounded">Danger</span>
    <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-yellow-500 text-white rounded">Warning</span>
    <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-400 text-white rounded">Info</span>
    <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 text-gray-700 rounded">Light</span>
    <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-800 text-white rounded">Dark</span> */}
  </div>
        </div>
  
        <div className="bg-white shadow overflow-hidden sm:rounded-lg pl-8 ">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">User Information</h3>
          <p className="mt-1 max-w-2xl text-sm text-blue-500">Personal details and other iformatios.</p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="mt-1 text-sm text-black-500 sm:mt-0 sm:col-span-2">
              <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded-full"> {user.dat1.name}</span>
               
                </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Email </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.dat1.email}</dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Gender</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.dat2.gender}</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Age</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.dat2.age}</dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Coutry</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {user.dat2.country}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">State</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {user.dat2.state}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">District</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {user.dat2.district}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Place</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {user.dat2.place}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Wight</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {user.dat2.weight}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              
            </div>
          </dl>
        </div>
      </div>
      </div>:
       <div class="text-center pt-2">
        <div class="loader"></div>
       <h5 class="text-xl font-medium leading-tight mb-2"></h5>
       <p class="text-gray-500"></p>
      <div class="flex space-x-2 justify-center">
      
      </div>
     </div>
      
      //
  
        }
       
    </div>
  )
}

export default userProfile