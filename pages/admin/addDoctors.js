import React from 'react'
import AdminNavbar from '../../Components/adminNavbar'
import {useState,useEffect} from 'react'
import {useRouter}  from 'next/router'
import Specilaizations from '../../utils/specializations'
import axios from 'axios'
import Swal from 'sweetalert2'
import DoctorPhotoUpload from './doctorPhotoUpload'
function addDoctors() {
const [specs,setSpecs]=useState([])
useEffect(()=>{
    axios.get('http://localhost:5000/getAllSpecializations').then((resp)=>{
      if(resp.data.success){
         setSpecs(resp.data.data)
      }
    })
},[])

  const DoctorSpec=Specilaizations()
  console.log(DoctorSpec);
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
      
    const router = useRouter()
    const [states, setStates] = useState([]);
    const [country, setCountry] = useState();
    const [st, setSt] = useState();
    const [count,setCount]=useState(false)
    const [doctor,setDoctor]=useState({
        name:"",
        specialization:"",
        experience:"",
        gender:"",
        phone:"",
        email:"",
        qualification:"",
        patients:[],
        appointments:[],
        
    })
    const X={
      name:"",
      specialization:"",
      experience:"",
      gender:"",
      phone:"",
      email:"",
      patients:[],
      appointments:[],
      age:""
      
  }
    
  
     const handleChange=(e)=>{
     setDoctor({...doctor,[e.target.name]:e.target.value})
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
      console.log(doctor);
     
      axios.post("http://localhost:5000/admin/addDoctor",{doctor}).then((resp)=>{
        if(resp.data.success){
          console.log(resp.data.success);
          Toast.fire({
            icon: 'success',
            title: 'Doctor Added ...!!'
          })
          setDoctor(X)
          setCount(true)
          localStorage.setItem('doctor_id',resp.data.doctor_id)
          
        }
        else{
          Toast.fire({
            icon: 'error',
            title: 'Something went wrong...!!'
          })
        }
      })
  
        }


        
  return (

   
    <div>







       <AdminNavbar/> 
       {
         count?
         <DoctorPhotoUpload/>
        :
    
    <main className="mt-2 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-4 lg:px-4 xl:mt-20">
    <h1 className="text-center">Add Doctor</h1>
          <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-2 lg:px-3">
          <div className="max-w-md w-full space-y-8 w-120">
          <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md">

  <div class="grid grid-cols-2 gap-4">
    <div class="form-group mb-6">
      <input type="text"
       name="name"
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
        aria-describedby="emailHelp123" placeholder="Name"/>
    </div>
    <div class="form-group mb-6">
    <div class="flex justify-center">
<div class="mb-3 xl:w-96">
  <select 
    name='specialization'
    onChange={handleChange}
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
      <option selected>Specializations</option>
      {
        specs.map((s)=>{
          return(
            <option name="specialization" value={s.
              specialization_type
              }>{s.
                specialization_type
                }</option>
          )
        })
      }
      
      
  </select>
</div>
</div>
    </div>
  </div>
  <div class="grid grid-cols-2 gap-4">
    <div class="form-group mb-8">
      <input type="email"
       name="email"
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
        aria-describedby="emailHelp123" placeholder="Email"/>
    </div>
    <div class="form-group mb-8">
      <input
        name="phone"
        onChange={handleChange}
        type="Number" class="form-control
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
        aria-describedby="emailHelp124" placeholder="Phone"/>
    </div>
  </div>

  <div class="grid grid-cols-2 gap-4">
    <div class="form-group mb-8">
      <input type="text"
       name="gender"
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
        aria-describedby="emailHelp123" placeholder="Gender"/>
    </div>
    <div class="form-group mb-8">
      <input
        name="experience"
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
        aria-describedby="emailHelp124" placeholder="Experience"/>
    </div>
    <div class="form-group mb-6">
      <input 
        name="qualification"
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
        aria-describedby="emailHelp124" placeholder="Qualification"/>
    </div>
    <div class="form-group mb-6">
      <input type="number"
       name="age"
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
        aria-describedby="emailHelp123" placeholder="Age"/>
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
          </div>
</main>
 


       }
       
  </div>
  )

}

export default addDoctors