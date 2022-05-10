import React from 'react'
import AdminNavbar from '../../Components/adminNavbar'
import {useState,useEffect} from 'react'
import {useRouter}  from 'next/router'
import Specilaizations from '../../utils/specializations'
import axios from 'axios'
import Swal from 'sweetalert2'

function AddMedicine() {
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
        name:String,
        description:String,
        prize:Number,
        drug_type:String,
        
        
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
       

       </div>
  )

}

export default AddMedicine