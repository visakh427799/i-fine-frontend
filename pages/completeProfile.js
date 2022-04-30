import React from 'react'
import NavbarSignup from '../Components/navbarSignup'
import { useState  } from 'react';
import Countries from "../utils/cArray";
import { useRouter } from 'next/router';
let cArr = Countries();
import axios from 'axios'



function completeProfile() {


  const router = useRouter()
  const [states, setStates] = useState([]);
  const [country, setCountry] = useState();
  const [st, setSt] = useState();
  const [profile,setProfile]=useState({
      district:"",
      place:"",
      height:"",
      weight:"",
      gender:"",
      age:""
  })

   const handleChange=(e)=>{
   setProfile({...profile,[e.target.name]:e.target.value})
   }
  const handleCountries = (e) => {
    //console.log(e.target.value);
    let sts = cArr.filter((dat) => dat.name === e.target.value);
    setStates(sts[0].states);
    setCountry(e.target.value)
    console.log(states);

  };
  const handleStates =(e)=>{
    setSt(e.target.value)


  }

  const handleSubmit=()=>{
    console.log(profile);
    let u_id=localStorage.getItem("user_id")
    axios.post("http://localhost:5000/complete-profile",{profile,country,st,u_id}).then((resp)=>{
      if(resp.data.success){
        router.push('/photoUpload')
      }
    })

      }
  return (
    <div>
      <NavbarSignup/>
      <main className="mt-2 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-4 lg:px-4 xl:mt-20">
      <h1 className="text-center">Complete profile</h1>
          <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-2 lg:px-3">
          <div className="max-w-md w-full space-y-8 w-120">
         
      <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md">
  
    <div class="grid grid-cols-2 gap-2">
    <div class="flex justify-center">
  <div class="mb-3 xl:w-96">
    <select 
      onChange={handleCountries}
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
        <option selected>Select Country</option>
        {cArr.map((dat) => {
                  return <option name="country">{dat.name}</option>;
                })}
    </select>
  </div>
</div>
      <div class="form-group mb-6">
      <div class="flex justify-center">
  <div class="mb-3 xl:w-96">
    <select 
      onChange={handleStates}
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
        <option selected>Select state</option>
        {states.map((dat) => {
                  return <option name="state">{dat.name}</option>;
                })}
    </select>
  </div>
</div>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-2">
      <div class="form-group mb-8">
        <input 
          name="district"
          type="text"
          onChange={handleChange}
           class="form-control
          block
          w-full
          px-3
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
          aria-describedby="emailHelp123" placeholder="District"/>
      </div>
      <div class="form-group mb-8">
        <input 
          name="place"
          onChange={handleChange}
          type="text" class="form-control
          block
          w-full
          px-3
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
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
          aria-describedby="emailHelp124" placeholder="Place"/>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-2">
      <div class="form-group mb-6">
        <input 
          name="height"
          type="text"
          onChange={handleChange}
           class="form-control
          block
          w-full
          px-3
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
          aria-describedby="emailHelp123" placeholder="Height"/>
      </div>
      <div class="form-group mb-8">
        <input 
          name="weight"
          onChange={handleChange}
          type="text" class="form-control
          block
          w-full
          px-3
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
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
          aria-describedby="emailHelp124" placeholder="Weight"/>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-2">
      <div class="form-group mb-6">
      <div class="flex justify-center">
       <div class="mb-3 xl:w-96">
       <select 
      onChange={handleChange}
      name="gender"
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
        <option selected>Select gender</option>
        <option name="gender" value="Male">Male</option>
        <option name="gender" value="Female">Female</option>
        
    </select>
  </div>
</div>
      </div>
      <div class="form-group mb-6">
        <input 
          name="age"
          onChange={handleChange}
          type="number" class="form-control
          block
          w-full
          px-3
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
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
          aria-describedby="emailHelp124" placeholder="age"/>
      </div>
    </div>
    





    <div class="form-group form-check text-center mb-6">
      
    </div>
    <button type="submit"
    onClick={handleSubmit}
     class="
      w-full
      px-6
      py-2.5
      bg-blue-600
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
      ease-in-out">Next</button>
  
</div>
</div>
</div>
</main>
    </div>
  )
}

export default completeProfile