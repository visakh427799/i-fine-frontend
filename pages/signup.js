import React, { useState } from 'react'
import NavbarSignup from '../Components/navbarSignup'
import { LockClosedIcon } from '@heroicons/react/solid'
import axios from 'axios'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Swal from 'sweetalert2'
function signup() {

  const router=useRouter()

useEffect(()=>{
  let u_id=localStorage.getItem("user_id");
  if(u_id!=undefined){
    router.push('/userProfile')
  }
},[])

 
  const[user,setUser]=useState({
    name:"",
    email:"",
    phone:"",
    password:"",
    password2:""
    
  })

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
  const handleChange=(e)=>{

    setUser({...user,[e.target.name]:e.target.value})

  }
  const handleSubmit=()=>{

    if(user.name=="" || user.email=="" || user.phone=="" || user.password=="" || user.password2=="" ){
      console.log("inside");

      Toast.fire({
        icon: 'error',
        title: 'Please provide a valid input....!!'
      })
    }
    else{

      if(user){
        axios.post("http://localhost:5000/signup",user).then((resp)=>{
          console.log(resp.data);
          if(resp.data.success){
                localStorage.setItem("user_id",resp.data.user_id)
                router.push('/completeProfile')
          }
          else{
            Toast.fire({
              icon: 'error',
              title: 'User with this mail id already exist...!!'
            })
          }
        }).catch((err)=>{
  
        })
      }
      
    }


    
  }
  return (
   <div>

<NavbarSignup/>
<>
    
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-4 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-20 xl:pb-32">
          <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
    
          <div>
            
    
          

          </div>
    
          <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-2">
          <div className="max-w-md w-full space-y-8 w-80">
         
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">

            <div className="mt-2">
                <label htmlFor="email-address" className="sr-only">
                  Enter your name
                </label>
                <input
                  id="name"
                  onChange={handleChange}
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className=" mt-8 appearance-none rounded-none relative block w-full px-4 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mt-2">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  onChange={handleChange}
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-8 appearance-none rounded-none relative block w-full px-4 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              
              <div className="mt-2">
                <label htmlFor="email-address" className="sr-only">
                 Phone
                </label>
                <input
                  id="phone"
                  onChange={handleChange}
                  name="phone"
                  type="number"
                  autoComplete="email"
                  required
                  className="mt-8 appearance-none rounded-none relative block w-full px-4 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Enter phone number"
                />
              </div>

              <div className="mt-2">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  onChange={handleChange}
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="mt-8 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>

              <div className="mt-2">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password2"
                  onChange={handleChange}
                  type="password"
                  autoComplete="current-password"
                  required
                  className="mt-8 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Confirm Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              

              
            </div>

            <div>
              <button
                onClick={handleSubmit}
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
               Sign up
              </button>

            </div>
         
          </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 mt-20">
        <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt=""/>
      </div>

      {/* <div>
        <h4 className="ml-8 mt-5 tracking-tight font-extrabold text-gray-700 sm:text-2xl md:text-2xl">What would you like to do today</h4>
      </div> */}
    </div>
   

    </>
 
      </div>


  )
}

export default signup