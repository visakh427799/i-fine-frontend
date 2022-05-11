import React, { useEffect } from 'react'
import NavbarSignin from '../../Components/navbarSignin'
import { LockClosedIcon } from '@heroicons/react/solid'

import { Fragment,useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import Swal from 'sweetalert2'
import {useRouter} from 'next/router'
import axios from 'axios'
const people = [
  {
    id: 1,
    name: 'Parent',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    name: 'Therapists',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    name: 'Administrator',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
  },
  
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
function signin() {

  
const router=useRouter()

useEffect(()=>{
  let u_id=localStorage.getItem("d_id");
  if(u_id!=undefined){
    router.push('/doctor/doctorProfile')
  }
},[])

  const [selected, setSelected] = useState(people[1])
  const [user,setUser]=useState({
    email:"",
    password:""
  })
  const handleChange =(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
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
    }})

  const handleSubmit= ()=>{
     if(user.email=="admin@gmail.com" && user.password=="admin"){
       localStorage.setItem("admin_logged",true)
       router.push('/admin/adminHome')
     }
     else{
       //user login
       axios.post("http://localhost:5000/doctor/doctor-signin",user).then((resp)=>{
          if(resp.data.success){
            localStorage.setItem('d_id',resp.data.d_id)
            router.push('/doctor/doctorProfile')
          }
          else{
            Toast.fire({
              icon: 'error',
              title: 'Invalid credentials...!!'
            })
          }
       }).catch(()=>{
        Toast.fire({
          icon: 'error',
          title: 'Something went wrong...!!'
        })
       })
     }
  }
  return (
   <div>

<NavbarSignin/>
<div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 w-80">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://image.winudf.com/v2/image1/Y29tLmh1YXdlaS5waG9uZXNlcnZpY2VfaWNvbl8xNTU0OTkxMDc1XzA3Mw/icon.png?w=&fakeurl=1"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl  text-gray-900">Sign in </h2>
            
          </div>
         
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  onChange={handleChange}
                  autoComplete="email"
                  required
                  className=" mt-8 appearance-none rounded-none relative block w-full px-4 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={handleChange}
                  autoComplete="current-password"
                  required
                  className="mt-8 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div>
              
    </div>
            </div>

            <div className="flex items-center justify-between">
              

              
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handleSubmit}
             >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Sign in
              </button>
            </div>
         
        </div>
      </div>
      </div>


  )
}

export default signin