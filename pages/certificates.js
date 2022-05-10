import React from 'react'
import UserNavBar from '../Components/userNavbar'
import {useState,useEffect} from 'react'
import axios from 'axios'
import Box from '@mui/material/Box';


function certificates() {
  const [certificate,setCertificate]=useState([]);
    useEffect(()=>{
       let u_id=localStorage.getItem('user_id')
      axios.post('http://localhost:5000/getAllCertificates',{u_id}).then((resp)=>{
            if(resp.data.success){
              console.log(resp.data.data)
              setCertificate(resp.data.data)
            }
      })

    
},[])



  return (
    <div>
        <UserNavBar/>
        <div className="container mx-auto max-w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4">
          {
            certificate.map((c)=>{


                return(
                  <div className="m-2">
                  <a target="_blank" href={c.certificate_url}> 
                  <Box  
                  sx={{
                    width: 200,
                    height: 230,
                    backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/i-fine-ecf4f.appspot.com/o/file_icon.png?alt=media&token=dabc1a1b-75de-43d0-a49d-f40aae64b1f7")`,
                    
                  }}
                  />
                  <h6>{c.certificate_name}</h6>
                  </a> 
                  </div>
                )



            })
          }
       

        </div>
        </div>




    </div>
  )
}

export default certificates